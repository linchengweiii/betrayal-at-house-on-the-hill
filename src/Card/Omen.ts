import { Card } from "./Card"
import { Character } from "../Character"
import { Room } from "../House"

export namespace Omen {
  export interface Properties extends Card.Properties {
    readonly immovable: boolean; // This omen can't be dropped, traded, or stolen.
    readonly companion: boolean; // This omen is a companion.
    readonly weapon: boolean; // This item is a weapon. Weapons can not be used together.
  }

  export interface Effect extends Card.Effect {
    // An empty interface to make Omen.Effect a type
  }

  export namespace Effect {
    export const enum Active {
      Bloodstone = "Once per turn, you may lose 1 from any trait to add 2 dice (maximum of 8 dice) to your trait roll.",
      Cat = "You may call on the Cat for luck before your trait roll. Roll 1 die:\n" +
            "1+ Add 2 to the result of that roll.\n" +
            "0 Subtract 2 from the result of that trait roll.",
      CrystalBall = "Once during your turn after the haunt is revealed, you can attempt a Knowledge roll to peer into the Crystal Ball:\n" +
                    "4+ You see the truth. Search the item or event stack for a card of your choice. Shuffle that stack. Then place that card on top.\n" +
                    "1-3 You avert your eyes. Lose 1 Sanity.\n" +
                    "0 You stare into Hell. Lose 2 Sanity.",
      Letter = "Choose an explorer except you and you can move to his/her room once on your turn.",
      Mask = "Once during your turn, you can attempt a Sanity roll to use the Mask:\n" +
             "4+ You can put on or take off the Mask. If you put on the Mask, gain 2 Knowledge and lose 2 Sanity. If you take off the Mask, gain 2 Sanity and lose 2 Knowledge.\n" +
             "0-3 You can't use the Mask this turn.",
      Photograph = "When discovering a room, you may discard the first drawn room tile and discover the next eligble room in the room stack instead.",
      Ring = "If you attack an opponent that has a Sanity trait, you can attack with Sanity instead of Might. (Your opponent then defends with Sanity, and damage is mental instead of physical.)",
      Rope = "You may move up the Coal Chute, and from the Ballroom to the Gallery. You do not need to roll for crossing the Chasm. You do not take damage from the Collapsed Room, and can nove from the room Below Collapsed Room into the Collapsed Room. when moving via a dumbwaiter, you may move to any landing.",
      Skull = "If you take mental damage, you can take all of it as physical damage instead.",
      Spear = "You roll 2 additional dice (maximum of 8 dice) when making a Might attack with this weapon.",
      SpiritBoard = "Before you move during your turn, you can look at the top tile of the room stack\n" +
                    "If you use the Spirit Board after the haunt has been revealed, the traitor can move any number of monsters 1 space closer to you. (If you are the traitor, you don't jave to move those monsters.) If there is no traitor, all monsters move 1 space closer to you.",
      Vial = "Once on your turn, you may drink from the Vial. Roll 2 dice:\n" +
             "4 The blood of something unknown. Gain 1 in each trait but Sanity. Lose 2 Sanity.\n" +
             "3 Invigorating tonic. Gain 1 in any physical trait.\n" +
             "2 Failed experiment. No effect.\n" +
             "1 Visions and dreams. Take 2 points of mental damage. Draw an item card.\n" +
             "0 Poison! Take 2 points of physical damage.",
    }

    export const enum Passive {
      Bite = "When you draw this card, something bites you. The previous player rolls a Might 4 attack against you for the mysterious something (before it runs away into the darkness). You defend against this attack as normal, by rolling dice equal to your Might.",
      Book = "Gain 2 Knowledge now.\n" +
             "Lose 2 Knowledge if you lose the Book",
      Girl = "Gain 1 Sanity and 1 Knowledge now.\n" +
             "Lose 1 Sanity and 1 Knowledge if you lose custody of the Girl.\n",
      HolySymbol = "Gain 2 Sanity now.\n" +
                   "Lose 2 Sanity if you lose the Holy Symbol.",
      Madman = "Gain 2 Might and lose 1 Sanity now.\n" +
               "Lose 2 Might and gain 1 Sanity if you lose custody of the Madman",
      Medallion = "You are immune to the effects of the Pentagram Chamber, Crypt, and Graveyard.",
    }
    
    export const enum Both {
      Box = "When you draw this card, draw an item card and put it on this card. That item cannot be dropped or traded. If someone would steal that item, you can instead discard the Box. On your turn, you may remove that item from the Box and put a different item in your possession into the Box. If it is empty, you may put an item in the Box. The Box cannot be stolen.",
      Dog = "Gain 1 Might and 1 Sanity now.\n" +
            "Lose 1 Might and 1 Sanity if you lose custody of the Dog.\n" +
            "Once during your turn, the Dog can move to any explored room up to 6 spaces away, using doors and stairs, and them return. It can pick up, carry, and/or drop 1 item before it returns.\n" +
            "The dog isn't slowed by opponents. It can't use one-way passages or rooms that require a roll. It can't carry items that slow movement.",
      Key = "Add 4 dice to trait rolls to open or take something from a card or room tile, such as the Locked Room, Safe, or Vault.\n" +
            "You may pass through the Locked Room without removing a Lock. At the start of each turn, you may choose to put a Lock token on an unlocked door in the Locked Room, if you are next to that door.",
    }
  }
}

export class Omen extends Card {
  public readonly type: Card.Type = Card.Type.Omen;
  public static revealed: number = 0;

  public activate(character?: Character, room?: Room): void {

  }
}
