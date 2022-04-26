import { Room, InitialRooms } from "./Room"
import { Floor } from "./Floor"

export class Basement extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    const basementLanding = InitialRooms["Basement Landing"];
    this.rooms[midpoint][midpoint] = new Room(basementLanding!);
  }
}
