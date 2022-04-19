import { GrandStaircase, Foyer, EntranceHall } from "./Room"
import Floor from "./Floor"

export default class Ground extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    this.rooms[midpoint][midpoint-1] = new GrandStaircase();
    this.rooms[midpoint][midpoint] = new Foyer();
    this.rooms[midpoint][midpoint+1] = new EntranceHall();
  }
}
