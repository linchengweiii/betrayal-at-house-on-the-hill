import Room, { InitialRooms } from "./Room"
import Floor from "./Floor"

export default class Roof extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    const roofLanding = InitialRooms["Roof Landing"];
    this.rooms[midpoint][midpoint] = new Room(roofLanding!);
  }
}
