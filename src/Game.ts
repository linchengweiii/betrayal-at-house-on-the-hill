import { Character } from "./Character"
import { House, Room, Rooms } from "./House"
import { Event, Events, Item, Items, Omen, Omens } from "./Card"
import { shuffle } from "./utils"

interface InterfaceGame {
  gameover: boolean;
  play(): Promise<void>;
  act(): Promise<void>;
}

export class Game implements InterfaceGame{
  private activeRole: number;
  private roles: Character[];
  private house: House;
  private roomStack: Room[];
  private eventStack: Event[];
  private itemStack: Item[];
  private omenStack: Omen[];
  private discardRooms: Room[];

  public gameover: boolean = false;

  constructor(explorers: Character[]) {
    this.activeRole = 0;
    this.roles = explorers;
    this.house = new House();
    this.roomStack = shuffle(Rooms.map(props => new Room(props)));
    this.eventStack = shuffle(Events.map(props => new Event(props)));
    this.itemStack = shuffle(Items.map(props => new Item(props)));
    this.omenStack = shuffle(Omens.map(props => new Omen(props)));
    this.discardRooms = [];
  }

  public async play(): Promise<void> {
    console.log("Game Start");

    while (this.gameover === false) {
      console.log("It's " + this.roles[this.activeRole].name + "'s turn.");
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
