import Card from "./Card"

export default class Item extends Card {
  public readonly type: Card.Type = Card.Type.Item;
}
