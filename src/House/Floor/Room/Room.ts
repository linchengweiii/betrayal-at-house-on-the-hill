import InterfaceRoom from "./Room.interface"

export default abstract class Room implements InterfaceRoom {
  public doors: boolean[];
  private _events: number;
  private _items: number;
  private _omens: number;
  private _window: boolean;

  static readonly DOORS: boolean[];
  static readonly EVENTS: number;
  static readonly ITEMS: number;
  static readonly OMENS: number;
  static readonly WINDOW: boolean;

  constructor() {
    const props = this.constructor as typeof Room;
    this.doors = props.DOORS;
    this._events = props.EVENTS;
    this._items = props.ITEMS;
    this._omens = props.OMENS;
    this._window = props.WINDOW;
  }

  public rotate(): void {
    this.doors.unshift(this.doors.pop()!);
  }

  public hasWindow(): boolean {
    return this._window;
  } 
}
