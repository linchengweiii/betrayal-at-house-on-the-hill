import Room from "./Room"

export default class GrandStaircase extends Room {
  static readonly DOORS = [false, false, false, true];
  static readonly EVENTS = 0;
  static readonly ITEMS = 0;
  static readonly OMENS = 0;
  static readonly WINDOW = false;
}
