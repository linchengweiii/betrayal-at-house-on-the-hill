import Character from "./Character"
import House, { Room } from "./House"
import { Event, Item, Omen } from "./Card"

interface InterfaceGame {
  gameover: boolean;
  play(): Promise<void>;
  act(): Promise<void>;
}

export default class Game implements InterfaceGame{
  private activeRole: number;
  private roles: Character[];
  private house: House;
  private roomStack: Room[];
  private eventStack: Event[];
  private itemStack: Item[];
  private omenStack: Omen[];
  private discardRooms: Room[];

  public gameover: boolean = false;

  constructor(roles: Character[]) {
    this.activeRole = 0;
    this.roles = roles;
    this.house = new House();
    // TODO: Initialize with card pool
    this.roomStack = [];
    this.eventStack = [];
    this.itemStack = [];
    this.omenStack = [];
    this.discardRooms = [];
  }

  public async play(): Promise<void> {
    console.log("Game Start")

    while (this.gameover === false) {
      try {
        await this.act();
        // TODO: Refresh the frontend
      } catch (error) {
        console.log(error);
      }
    }

    console.log("Game Over");
  }

  public async act(): Promise<void> {
    const action = await this.roles[this.activeRole].act();

    // TODO: Update the game according to the action
    switch(action) {
      case Character.Action.EndTurn: 
        this._next();
        break;
      case Character.Action.Noop:
        return Promise.reject("No operation action is not allowed");
        break;
    }
  }

  private _next(): void {
    this.activeRole = (this.activeRole + 1) % this.roles.length;
    // TODO: Remove this
    this.gameover = this.activeRole === 0;
  }
}
