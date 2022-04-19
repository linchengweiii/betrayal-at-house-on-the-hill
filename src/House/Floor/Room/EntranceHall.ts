import Room from "./Room"

export default class EntranceHall extends Room {
  static readonly DOORS = [true, true, true, false];
  static readonly EVENTS = 0;
  static readonly ITEMS = 0;
  static readonly OMENS = 0;
  static readonly WINDOW = false;
}
