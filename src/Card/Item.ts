import { Card } from "./Card"
import { Character } from "../Character"
import { Room } from "../House"

export namespace Item {
  export interface Properties extends Card.Properties {
    readonly weapon?: boolean; // This item is a weapon. Weapons can not be used together.
    readonly disposable?: boolean; // This item can only be used once.
  }

  export interface Effect extends Card.Effect {
    // An empty interface to make Item.Effect a type
  }

  export namespace Effect {
    export const enum Active {
      AdrenalineShot = "Before you attempt a trait roll, you can use this item to add 4 to the result of that roll.",
      AngelFeather = "When you attempt a roll of any kind, you can call out a number from 0 to 8. Use that number instead of rolling the dice.",
      Blueprint = "When you roll for your movement or to enter, exit, or cross a room, you may choose your result. You may travel between rooms that have a dumbwaiter.",
      Boomstick = "There are two bullets in this Boomstick. You can fire to make a Speed 7 attack instead of a Might attack. Discard the Boomstick after you fire 2 times.",
      Bottle = "Once during your turn after the haunt is revealed, you can roll 3 dice and drink from the Bottle:\n" +
               "6 Choose a room and move to there.\n" +
               "5 Gain 2 Might and 2 Speed.\n" +
               "4 Gain 2 Knowledge and 2 Sanity.\n" +
               "3 Gain 1 Knowledge and lose 1 Might.\n" +
               "2 Lose 2 Knowledge and 2 Sanity.\n" +
               "1 Lose 2 Might and 2 Speed.\n" +
               "0 Lose 2 from each trait.",
      CeremonialRobe = "Once per turn, when you make a Sanity or Knowledge roll, you may reroll any number of those dice.",
      Chainsaw = "If you make chainsaw noises, add 1 die to your Might roll. You can do this even when you defend.",
      Chalk = "You may roll Knowledge instead of Might on defense rolls.",
      DarkDice = "Once per turn, you can roll 3 dice:\n" +
                 "6 Move to the location of any explorer not revealed as a traitor.\n" +
                 "5 Move one other explorer in the same room into an adjacent room.\n" +
                 "4 Gain 1 in a physical trait.\n" +
                 "3 Immediately move into an adjacent room (no movement cost).\n" +
                 "2 Gain 1 in a mental trait.\n" +
                 "1 Draw an event card.\n" +
                 "0 Reduce all of your traits to the lowest value. Discard the Dark Dice.",
      Dynamite = "Instead of attacking, you can throw the Dynamite through a connecting door into an adjacent room. Each explorer and monster with Might and Speed traits in that room must attempt a Speed roll:\n" +
                 "5+ Take no damage from Dynamite.\n" +
                 "0-4 Take 4 points of physical damage.",
      HealingSalve = "You can apply the Healing Salve to yourself or to another living explorer in the same room. If that explorer's Might or Speed is below its staring value, raise one or both traits to its starting value.",
      Idol = "Once per turn, you can rub the Idol before making any trait, combat, or event roll to add 2 dice to the roll (to a maximum of 8 dice). Each time you do, lose 1 Sanity.",
      LuckyStone = "After you attempt a roll of any kind, you can rub the stone once to reroll any number of those dice.",
      MedicalKit = "Once during your turn, you can attempt a Knowledge roll to heal yourself or another explorer in the same room:\n" +
                   "8+ Gain up to 3 points of physical traits.\n" +
                   "6-7 Gain up to 2 points of physical traits.\n" +
                   "4-5 Gain 1 point in a physical trait.\n" +
                   "0-3 Nothing happens.\n" +
                   "You can't raise a trait above its starting value with the Medical Kit.",
      PickpoketsGloves = "When you are in the same room as another explorer, you can discard this item to take any item that explorer is carrying.",
      PuzzleBox = "Once during your turn, you can attempt a Knowledge roll to open the box:\n" +
                  "6+ You open the box. Draw 2 item cards and discard the Puzzle Box.\n" +
                  "0-5 You just can't get it open.",
      RabbitsFoot = "Once during your turn, you can reroll 1 die. You must keep the second roll.",
      Revolver = "You can use the Revolver to attack with Speed instead of Might. (Your opponent then defends with Speed and takes physical damage.)\n" +
                 "Roll 1 additional die on your Speed attack roll (maximum of 8 dice).\n" +
                 "With the Revolver, you can attack anyone in the same room or within line of sight (through an uninterrupted straight line of doors). If you attack someone in another room and lose, you don't take damage.",
      SacrificialDagger = "When making a Might attack with this weapon, you roll 3 extra dice (maximum of 8 dice), but you must make a Knowledge roll first:\n" +
                          "6+ No effect.\n" +
                          "3-5 Lose 1 from a mental trait.\n" +
                          "0-2 The dagger twists in your hand! Take 2 dice of physical damage. You can't attack this turn.",
      SmellingSalts = "If you or another living explorer's Knowledge is below its starting value, and you 're in the same room, you can raise Knowledge to its starting value by using the Smelling Salts.",
      SnakeOil = "Discard this item to choose an explorer in your room (including yourself) and raise one of his or her physical traits and/or one of his or her traits to their starting values.",
      Teapot = "Once during your turn, when an explorer in your room (including yourself) takes physical damage, you may draw an item card.\n" +
               "If you are or become the traitor, shuffle this item card into the item stack.",
    }

    export const enum Passive {
      AmuletOfTheAges = "Gain 1 Might, 1 Speed, 1 Knowledge, and 1 Sanity now.\n" +
                        "Lose 3 Might, 3 Speed, 3 Knowledge, and 3 Sanity if you lose the Amulet.",
      Armor = "Any time (not just once per turn) you take physical damage, take 1 less point of damage.\n" +
              "This item can't be stolen.",
      Axe = "You roll 1 addtional die (maximum of 8 dice) when making a Might attack with this weapon.",
      Camcorder = "Once per game, an explorer in possession of the Camcorder can gain 1 Knowledge.",
      Candle = "If you draw an event card, roll 1 additional die (maximum of 8 dice) for that event's trait rolls.\n" +
               "If you have the Bell, Book, and Candle, gain 2 in each trait. The first time you lose one of those 3 items later in the game, lose 2 from each trait.",
      Effigy = "While you have the Effigy, add 1 die to all trait rolls, except when you attack or defend.\n" +
               "If you ever lose or drop the Effigy, reduce each of your traits by 1 die.",
      Locket = "Gain 1 Sanity\n" +
               "Any time (not just once per turn) you take mental damge, take 1 less point of damage.\n" +
               "If you lose this card, lose 1 Sanity.",
    }

    export const enum Both {
      Bell = "Gain 1 Sanity now.\n" +
             "Lose 1 Sanity if you lose the Bell.\n" +
             "Once during your turn after the haunt is revealed, you can attempt a Sanity roll to use the Bell.\n" +
             "5+ Move any number of unimpeded heroes 1 space closer to you.\n" +
             "0-4 The traitor can move any number of monsters 1 space closer to you. (If you are the traitor, this result has no effect.) If there is no traitor, all monsters move 1 space closer to you.",
      BloodDagger = "You roll 3 additional dice (maximum of 8 dice) when making a Might attack with this weapon. If you do, lose 1 Speed.\n" +
                    "This item can't be traded or dropped. If it's stolen, take two dice of physical damage.",
      Device = "At the end of your turn, if you are in the same room as an opponent, gain 1 Knowledge.\n" +
               "Discard this card to add 3 dice to your attack roll, but you may only use that attack to steal something.",
      MusicBox = "Once per turn, you can open or close the Music Box.\n" +
                 "While the Music Box is open, any explorer or monster with a Sanity trait that enters or starts its turn in the same room must make a Sanity roll of 4+. If the roll fails, the explorer or monster ends its turn as it is mesmerized by the music.\n" +
                 "If an explorer or monster carrying the Music Box is mesmerized, it drops the Music Box. If the Music Box is open when it is dropped, it remains open.",
    }
  }

}

export class Item extends Card {
  public readonly type: Card.Type = Card.Type.Item;
  public readonly weapon: boolean;
  public readonly disposable: boolean;

  constructor(props: Item.Properties) {
    super(props);
    this.weapon = props.weapon ?? false;
    this.disposable =  props.disposable ?? false;
  }

  public activate(character?: Character, room?: Room): void {

  }
}
