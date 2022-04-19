import { BasementLanding } from "./Room"
import Floor from "./Floor"

export default class Basement extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    this.rooms[midpoint][midpoint] = new BasementLanding();
  }
}
