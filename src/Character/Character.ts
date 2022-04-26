import { InterfaceCharacter } from "./Character.interface"
import { Trait } from "./Trait"
import { Die } from "../utils"

export namespace Character {
  export interface Properties {
    name: string;
    speed?: Trait;
    might?: Trait;
    sanity?: Trait;
    knowledge?: Trait;
  }

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

  export const enum Status {
    Normal = "You can do anything.",
    Buried = "You are buried. You can't do anything until you're freed. Explorers in the same room can attempt a Might roll to free you on their turn. (You can also attempt this roll.) A 4+ succeeds. After 3 unsuccessful attempts, you break free automatically on your next turn and take your turn normally.",
    Stuck = "You are stuck. You can't do anything until you're freed. Explorers in the same room can attempt a Might roll to free you on their turn. (You can also attempt this roll.) A 4+ succeeds. Anyone failing an attempt can't move for the rest of that turn. After 3 unsuccessful attempts, you break free automatically on your next turn and take your turn normally.",
  }
}

export abstract class Character implements InterfaceCharacter {
  private _action: Character.Action = Character.Action.Noop;
  private _fetchActionResolve?: Function;
  private _fetchActionTimeout?: NodeJS.Timeout;

  public readonly name: string;
  public readonly abstract type: Character.Type;
  public readonly traits: (Trait | undefined)[];
  
  constructor(props: Character.Properties) {
    this.name = props.name;
    this.traits = [
      props.speed,
      props.might,
      props.sanity,
      props.knowledge,
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

  public getTrait(type: Trait.Type): Trait | undefined {
    return this.traits[type];
  }

  public roll(type: Trait.Type): number[] {
    if (this.traits[type] === undefined)
      throw new Error("Assertion Error: " + this.name + " has no trait " + type);

    let dice = [];
    const num_die = this.traits[type]!.value;
    for (let i = 0; i < num_die; i++) {
      dice.push(Die.roll());
    }
    return dice;
  }
}
