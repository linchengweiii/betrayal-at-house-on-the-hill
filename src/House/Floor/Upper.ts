import { UpperLanding } from "./Room"
import Floor from "./Floor"

export default class Upper extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    this.rooms[midpoint][midpoint] = new UpperLanding();
  }
}
