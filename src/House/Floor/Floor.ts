import { InterfaceFloor } from "./Floor.interface"
import { Room } from "./Room"

export namespace Floor {
  export const enum Type{
    Basement = 0,
    Ground = 1,
    Upper = 2,
  }
}

export abstract class Floor implements InterfaceFloor {
  public rooms: Room[][];
  protected readonly SIDE_LENGTH = 15;

  constructor() {
    this.rooms = []
    for (let i = 0; i < this.SIDE_LENGTH; i++) {
      this.rooms[i] = [];
    }
  }
}
