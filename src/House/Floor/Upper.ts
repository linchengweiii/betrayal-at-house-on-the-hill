import Room, { InitialRooms } from "./Room"
import Floor from "./Floor"

export default class Upper extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    const upperLanding = InitialRooms["Upper Landing"];
    this.rooms[midpoint][midpoint] = new Room(upperLanding!);
  }
}
