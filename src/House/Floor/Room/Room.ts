import InterfaceRoom from "./Room.interface"

namespace Room {
  export interface Properties {
    name: string;
    doors: boolean[];
    effects: Room.Effect[];

    readonly card: Room.Card;
    readonly outside: boolean;
    readonly windows: boolean;
    readonly dumbwaiter: boolean;
  }

  export const enum Card {
    Event,
    Item,
    Omen,
    None,
  }

  export const enum Effect {
    // TODO: Add room effects
  }
}

class Room implements InterfaceRoom {
  public name: string;
  public doors: boolean[];
  public effects: Room.Effect[];

  private readonly _card: Room.Card;
  private readonly _outside: boolean;
  private readonly _windows: boolean;
  private readonly _dumbwaiter: boolean;

  constructor(props: Room.Properties) {
    this.name = props.name;
    this.doors = props.doors;
    this.effects = props.effects;
    this._card = props.card;
    this._outside = props.outside;
    this._windows = props.windows;
    this._dumbwaiter = props.dumbwaiter;
  }

  public rotate(): void {
    this.doors.unshift(this.doors.pop()!);
  }

  public isOutside(): boolean {
    return this._outside;
  }

  public hasWindows(): boolean {
    return this._windows;
  } 

  public hasDumbWaiter(): boolean {
    return this._dumbwaiter;
  }
}

export default Room;
