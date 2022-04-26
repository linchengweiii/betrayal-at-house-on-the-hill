import { Card } from "./Card"
import { Character } from "../Character/"
import { Room } from "../House"

export interface InterfaceCard {
  readonly type: Card.Type;
  readonly name: string;
  readonly description: string;
  activate(character: Character, room: Room): void;
}
