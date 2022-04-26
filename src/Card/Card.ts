import { InterfaceCard } from "./Card.interface"
import { Character } from "../Character"
import { Room } from "../House"

export namespace Card {
  export interface Properties {
    readonly name: string;
    readonly description: string;
    readonly effect: Card.Effect;
  }

  export const enum Type {
    Event,
    Item,
    Omen,
  }

  export interface Effect {
    // An empty interface to make Card.Effect a type
  }

}

export abstract class Card implements InterfaceCard {
  public readonly abstract type: Card.Type;
  public readonly name: string;
  public readonly description: string;
  public readonly effect: Card.Effect;

  constructor(props: Card.Properties) {
    this.name = props.name;
    this.description = props.description;
    this.effect = props.effect;
  }

  public abstract activate(character?: Character, room?: Room): void;

}
