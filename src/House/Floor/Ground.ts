import Room, { InitialRooms } from "./Room"
import Floor from "./Floor"

export default class Ground extends Floor {
  constructor() {
    super();
    const midpoint = (this.SIDE_LENGTH - 1) / 2;
    const grandStaircase = InitialRooms["Grand Staircase"];
    const foyer = InitialRooms["Foyer"];
    const entranceHall = InitialRooms["Entrance Hall"];
    this.rooms[midpoint][midpoint-1] = new Room(grandStaircase!);
    this.rooms[midpoint][midpoint] = new Room(foyer!);
    this.rooms[midpoint][midpoint+1] = new Room(entranceHall!);
  }
}
