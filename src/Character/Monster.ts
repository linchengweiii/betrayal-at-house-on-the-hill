import Character from "./Character"

export default abstract class Monster extends Character {
  public readonly type: Character.Type = Character.Type.Monster;
}
