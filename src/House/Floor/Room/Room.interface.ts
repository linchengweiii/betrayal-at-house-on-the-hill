import Room from "./Room"

export default interface InterfaceRoom {
  name: string;

  // Whether each direction has door or not
  // [Top, Left, Bottom, Right]
  doors: boolean[]; 

  // The effects that will activate
  // when people reach or stay at the room
  effects: Room.Effect[];

  // Rotate the room counterclock-wise
  rotate(): void;

  // Whether this room has window or not
  isOutside(): boolean;
  hasWindows(): boolean;
  hasDumbWaiter(): boolean;
}
