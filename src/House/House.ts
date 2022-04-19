import InterfaceHouse from "./House.interface"
import Floor, { Basement, Ground, Upper } from "./Floor"

export default class House implements InterfaceHouse {
  public readonly floors = [new Basement(), new Ground(), new Upper()];
}
