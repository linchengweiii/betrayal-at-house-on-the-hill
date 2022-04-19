import InterfaceCharacter from "./Character.interface"
import Trait from "./Trait"
import { Die } from "../utils"

namespace Character {
  export const enum Action {
    Move,
    DieRoll,
    UseCard,
    Attack,
    EndTurn,
    Leave,
    Noop,
  }

  export const enum Type {
    Explorer,
    Monster,
  }
}

abstract class Character implements InterfaceCharacter {
  private _action: Character.Action = Character.Action.Noop;
  private _fetchActionResolve?: Function;
  private _fetchActionTimeout?: NodeJS.Timeout;

  public readonly traits: Trait[];
  public readonly name: string;

  static readonly NAME: string;
  static readonly SPEED_SCALE: number[];
  static readonly MIGHT_SCALE: number[];
  static readonly SANITY_SCALE: number[];
  static readonly KNOWLEDGE_SCALE: number[];
  static readonly SPEED_INIT_INDEX: number;
  static readonly MIGHT_INIT_INDEX: number;
  static readonly SANITY_INIT_INDEX: number;
  static readonly KNOWLEDGE_INIT_INDEX: number;
  
  constructor() {
    const props = this.constructor as typeof Character;
    this.name = props.NAME;
    this.traits = [
      new Trait(props.SPEED_SCALE, props.SPEED_INIT_INDEX),
      new Trait(props.MIGHT_SCALE, props.MIGHT_INIT_INDEX),
      new Trait(props.SANITY_SCALE, props.SANITY_INIT_INDEX),
      new Trait(props.KNOWLEDGE_SCALE, props.KNOWLEDGE_INIT_INDEX),
    ];
  }

  private async _fetchAction(): Promise<void> {
    return new Promise(resolve => {
      // Wait 10 seconds for response, end turn if no response
      this._fetchActionResolve = resolve;
      this._fetchActionTimeout = setTimeout(() => {
        if (this._action === Character.Action.Noop)
          this._action = Character.Action.EndTurn;
        resolve();
      }, 10000);
    });
  }

  public setAction(action: Character.Action): void {
    this._action = action;

    if (this._fetchActionTimeout) {
      clearTimeout(this._fetchActionTimeout);
      this._fetchActionTimeout = undefined;
    }

    if (this._fetchActionResolve) {
      this._fetchActionResolve();
      this._fetchActionResolve = undefined;
    }
  }

  public async act(): Promise<Character.Action> {
    // Reset action to no operation
    this._action = Character.Action.Noop;

    // Wait 10 seconds for response, end turn if no response
    await this._fetchAction();

    // TODO: React according to the action
    switch(this._action) {
    }

    return Promise.resolve(this._action);
  }

  public getTrait(type: Trait.Type): Trait {
    return this.traits[type];
  }

  public roll(type: Trait.Type): number[] {
    let dice = [];
    const num_die = this.traits[type].value;
    for (let i = 0; i < num_die; i++) {
      dice.push(Die.roll());
    }
    return dice;
  }
}

export default Character;
