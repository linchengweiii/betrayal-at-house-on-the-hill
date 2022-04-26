import { Trait } from "./Trait"
import { Character } from "./Character"

export interface InterfaceCharacter {
  readonly name: string;
  readonly type: Character.Type;
  act(): Promise<Character.Action>;
  setAction(action: Character.Action): void;
  getTrait(type: Trait.Type): Trait | undefined;
  roll(type: Trait.Type): number[];
}
