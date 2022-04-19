import Trait from "./Trait"
import Character from "./Character"

export default interface InterfaceCharacter {
  act(): Promise<Character.Action>;
  setAction(action: Character.Action): void;
  getTrait(type: Trait.Type): Trait;
  roll(type: Trait.Type): number[];
}
