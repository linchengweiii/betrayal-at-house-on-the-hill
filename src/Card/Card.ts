import InterfaceCard from "./Card.interface"
import Character from "../Character"
import { Room } from "../House"

namespace Card {
  export interface Properties {
    name: string;
    description: string;
    activate(character?: Character, room?: Room): void;
  }

  export const enum Type {
    Event,
    Item,
    Omen,
  }
}

abstract class Card implements InterfaceCard {
  public readonly abstract type: Card.Type;
  public readonly name: string;
  public readonly description: string;
  public activate: (character?: Character, room?: Room) => void;

  constructor(props: Card.Properties) {
    this.name = props.name;
    this.description = props.description;
    this.activate = props.activate;
  }
}

export default Card;
