export default interface InterfaceRoom {
  // Whether each direction has door or not
  // [Top, Left, Bottom, Right]
  doors: boolean[]; 

  // Rotate the room counterclock-wise
  rotate(): void;

  // Whether this room has window or not
  hasWindow(): boolean;
}
