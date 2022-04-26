import { Character } from "./Character"

export class Monster extends Character {
  public readonly type: Character.Type = Character.Type.Monster;
}
