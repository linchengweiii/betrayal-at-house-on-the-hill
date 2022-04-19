import Character from "./Character"

export default abstract class Explorer extends Character {
  public readonly type: Character.Type = Character.Type.Explorer;
}
