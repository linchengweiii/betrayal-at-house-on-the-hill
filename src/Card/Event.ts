import Card from "./Card"
import Character from "../Character"
import { Room } from "../House"

namespace Event {
  export interface Properties extends Card.Properties {
    // An empty interface to make Event.Properties a type
  }

  export interface Effect extends Card.Effect {
    // An empty interface to make Event.Effect a type
  }

  export namespace Effect {
    export const enum OnRoom {
      AdditionalDie = "This room is blessed. Each hero rolls 1 additional die (maximum of 8 dice) on all trait rolls while in this room.",
      GetAttackByPreviousPlayer = "When an explorer exits this room after the haunt is revealed, the corpse attacks. The previous player makes a Might 4 attack against the explorer. If the explorer wins by 3 or more, discard the token.",
      OpenCloset = "Once during an explorer's turn, that explorer can roll 2 dice to open the Closet:\n" +
                   "4 Draw an item card.\n" +
                   "2-3 Draw an event card.\n" +
                   "0-1 Draw an event card and remove the Closet token.",
      FewerDie = "Water is dripping in this room. Each explorer rolls 1 fewer die (minimum of 1) on all trait rolls while in this room.",
      OpenSafe = "Once during an explorer's turn, that explorer can attempt a Knowledge roll to open the Safe:\n" +
                 "5+ Draw 2 item cars and remove the Safe token.\n" +
                 "2-4 Take 1 die of physical damage. The Safe won't open.\n" +
                 "0-1 Take 2 dice of physical damage. The Safe won't open.",
      Skeletons = "There are Skeletons in the room. Once during an explorer's turn, that explorer can attempt a Sanity roll to search the Skeletons:\n" +
                  "5+ Draw an item card. Remove the Skeletons token.\n" +
                  "0-4 You dig around, but find nothing. Take 1 die of mental damage.\n" +
                  "Each result affects only the explorer makeing that roll.",
      Smoke = "There is Smoke in this room. The Smoke blocks line of sight from adjacent rooms. An explorer rolls 2 fewer dice (minimum of 1 die) on all trait rolls while in this room.",
    }

    export const enum OnCharacter {
      Acupuncture = "Go to an adjacent, discovered room and lose 1 Sanity, or attempt a Might roll:\n" +
                    "5+ Gain 1 Speed, 1 Might and 1 Sanity.\n" +
                    "3-4 Gain 1 Speed and 1 Might.\n" +
                    "0-2 Lose 1 Speed and 1 Might.\n",
      AngryBeing = "You must attempt a Speed roll:\n" +
                   "5+ You get away. Gain 1 Speed.\n" +
                   "2-4 Take 1 die of mental damage.\n" +
                   "0-1 Take 1 die of mental damage and 1 die of physical damage.",
      BloodyVision = "You must attempt a Sanity roll:\n" +
                     "4+ You steel yourself. Gain 1 Sanity.\n" +
                     "2-3 Lose 1 Sanity.\n" +
                     "0-1 If an explorer or monster is in your room or an adjacent one, you must attack it (if you can). Choose the explorer with the lowest Might, if possible.",
      BurningMan = "You must attempt a Sanity roll:\n" +
                   "4+ You feel a little hot under the collar, but otherwise fine. Gain 1 Sanity.\n" +
                   "2-3 Out, out, you must get out. Put your explorer in the Entrance Hall.\n" +
                   "0-1 You burst into flames! Take 1 die of physical damage. Then take 1 die of mental damage as you put out the flames.",
      Contract = "You may sign the contract. If you do, attempt a Knowledge roll to read the fine print:\n" +
                 "5+ You find the contract isn't binding and keep your soul. Gain 1 Sanity. Draw an item card.\n" +
                 "4 You find a small loophole and keep your soul. Draw an item card.\n" +
                 "2-3 You lose your soul but you gain power. Lose 1 Sanity. Draw an item card.\n" +
                 "0-1 You sign your soul away for nothing. Lose 1 Sanity.",
      CreepyCrawlies = "You must attempt a Sanity roll:\n" +
                       "5+ You blink, and they're gone. Gain 1 Sainty.\n" +
                       "1-4 Lose 1 Sanity.\n" +
                       "0 Lose 2 Sainty.",
      CreepyPuppet = "The previous player rolls a Might 4 attack for the Creepy Puppet. You defend against this attack as normal, by rolling dice equal to your Might.\n" +
                     "If you take any damage from this attack, the explorer with the Spear gains 2 Might (unless you have the Spear).",
      Debris = "You must attempt a Speed roll:\n" +
               "3+ You dodge the plaster. Gain 1 Speed\n" +
               "1-2 You're buried in debris. Take 1 die of physical damage.\n" +
               "0 You're buried in debris. Take 2 dice of physical damage.\n",
      DisquietingSounds = "Roll 6 dice. If you roll equal to or more than the number of omens that have been revealed, you gain 1 Sanity. If not, take 1 die of mental damage.",
      Footsteps = "Roll 1 die. (An explorer in the Chapel rolls 1 additional die on this roll.)\n" +
                  "4 You and the nearest explorer gain 1 Might.\n" +
                  "3 You gain 1 Might, and the nearest explorer loses 1 Sanity.\n" +
                  "2 Lose 1 Sanity.\n" +
                  "1 Lose 1 Speed.\n" +
                  "0 Each explorer loses 1 point from a trait of his or her choice.",
      Funeral = "You must attempt a Sanity roll:\n" +
                "4+ You blink, and it's gone. Gain 1 Sanity.\n" +
                "2-3 The vision disturbs you. Lose 1 Sanity.\n" +
                "0-1 You're really in that coffin. Lose 1 Sanity and 1 Might as you dif yourself out. If the Graveyard or the Crypt has been found, put your explorer in one of those rooms (you choose which one).",
      GhostInTheMachine = "You must attempt a Sanity roll:\n" +
                          "3+ Draw a roof tile from the room stack, put it in the house, and you move to that room.\n" +
                          "0-2 Lose 1 Might. Put this card in front of you. All explorers can only move 1 space per turn, until the start of your next turn.",
      GraveDirt = "You must attempt a Might roll:\n" +
                  "4+ You shake it off. Gain 1 Might.\n" +
                  "0-3 Something is wrong. Take 1 point of physical damage at the start of each of your turns until an item card increases one of your traits or until you end your turn in the Balcony, Gardens, Graveyard, Gymnasium, Larder, Patio, or Tower.",
      Groundskeeper = "You must attempt a Knowledge roll. (An explorer in the Gardens rolls 2 fewer dice on this roll.)\n" +
                      "4+ You find something in the mud. Draw an item card.\n" +
                      "0-3 The groundskeeper reappears and strikes you in the face with the shovel. The previous player rolls a Might 4 attack for the Groundskeeper. You defend against this attack as normal, by rolling dice equal to your Might.",
      HangedMen = "You must attempt a roll for each trait:\n" +
                  "2+ That trait is unaffected.\n" +
                  "0-1 Lose 1 from that trait.\n" +
                  "If you roll a 2+ on all 4 rolls, gain 1 additional point in a trait of your choice.",
      HideousShriek = "Each explorer must attempt a Sanity roll:\n" +
                      "4+ You resist the sound.\n" +
                      "1-3 Take 1 die of mental damage.\n" +
                      "0 Take 2 dice of mental damage.\n" +
                      "Each result affects only the explorer making that roll.",
      ImageInTheMirrorLost = "Choose one of your item cards (not an omen card) and put it on the item stack. Then shuffle that stack. Gain 1 Knowledge.",
      ImageInTheMirrorGain = "Draw an item card.",
      ItIsMeantToBe = "Choose one of these 2 options:\n" +
                      "You can look at the top 3 tiles or cards of any one stack. If you do, rearrange those 3 tiles or cards in any order an put them back on top. Do not tell anyone the results.\n" +
                      "You can choose instead to roll 4 dice and write down the result. For one future die roll of your choice that you attempt, you can use that number instead of rolling. If that number is higher than the maximum possible result, use the maximum possible result instead.",
      JonahsTurn = "If an explorer has the Puzzle Box, that explorer discards that item and draws a replacement item for it. It this happens, you gain 1 Sanity; otherwise, you take 1 die of mental damage.",
      LightningStrikes = "All explorers on the roof or in an outside room must attempt a Might roll:\n" +
                         "4+ Nothing happens.\n" +
                         "1-3 Take 1 point of physical damage.\n" +
                         "0 Take 2 points of physical damage.",
      LightsOut = "You can move only 1 space each turn until you have the Candle or end your turn in the Furnance Room or the same room as another explorer. Then you can move normally again.",
      MistyArch = "You may choose to walk through. Roll 3 dice:\n" +
                  "5-6 Move to any room that has an open doorway. Draw an item card.\n" +
                  "3-4 Move to any room that has an open doorway.\n" +
                  "1-2 Move to Entrance Hall, resetting all traits to starting values.\n" +
                  "0 Move to Entrance Hall. You've lost something. Discard an item card.",
      MistsFromTheWalls = "Each explorer in the basement must attempt a Sanity roll:\n" +
                          "4+ The faces are tricks of light and shadow. All is well.\n" +
                          "1-3 Take 1 die of mental damage (and 1 additional die of damage if that explorer is in a room with an event symbol).\n" +
                          "0 Take 1 die of mental damage (and 2 additional die of damage if that explorer is in a room with an event symbol).\n" +
                          "Each result affects only the explorer making that roll.",
      MutantHousepet = "You must attempt a Speed roll of 4+. If you fail, take 1 point of physical damage from the pet's attack. If you succeed, gain 1 Sanity and 1 Speed.",
      NightView = "You must attempt a Knowledge roll:\n" +
                  "5+ You recognize the ghosts as former inhabitants of the house. You call their names, and they turn to you, whispering dark secrets of the house. Gain 1 Knowledge.\n" +
                  "0-4 You pull back in horror, unable to watch.",
      PhoneCall = "Roll 2 dice. A sweet little granny voice says:\n" +
                  "4 \"Tea and cakes! Tea and cakes! You always were my favorite!\" Gain 1 Sanity.\n" +
                  "3 \"I'm always here for you, Pattycakes. Watching... \" Gain 1 Knowledge.\n" +
                  "1-2 \"I'm here, Sweetums! Give us a kiss!\" Take 1 die of mental damage.\n" +
                  "0 \"Bad little children must be punished!\" Take 2 dice of physical damage.\n",
      Possession = "You must choose any one trait and attempt a roll for that trait:\n" +
                   "4+ You resist the shadow's corruption. Gain 1 in a trait of your choice.\n" +
                   "0-3 The shadow drains your energy. The chosen trait drops to its lowest value. If that trait is already at its lowest value, lower a different trait to its lowest value.",
      Rotten = "You must attempt a Sanity roll:\n" +
               "5+ Troubling odors, nothing more. Gain 1 Sanity.\n" +
               "2-4 Lose 1 Might.\n" +
               "1 Lose 1 Might and 1 Speed.\n" +
               "0 You double over with nausea. Lose 1 Might, 1 Speed, 1 Knowledge, and 1 Sanity.",
      ShriekingWind = "Each explorer in the Gardens, Graveyard, Patio, Tower, on the Balcony, or in a room with an outside-facing window, must attempt a Might roll:\n" +
                      "5+ You keep your footing.\n" +
                      "3-4 The wind knocks you down. Take 1 die of physical damage.\n" +
                      "1-2 The wind chills your soul. Take 1 die of mental damage.\n" +
                      "0 The wind knocks you down hard. Take 1 die of physical damage. Put one of your items (if you have one) in the Entrance Hall.\n" +
                      "Each result affects only the explorer making that roll.",
      Silence = "Each explorer in the basement must attempt a Sanity roll.\n" +
                "4+ You wait calmly for your hearing to return.\n" +
                "1-3 You scream a silent scream. Take a die of mental damage.\n" +
                "0 You freak out. Take 2 dice of mental damage.\n" +
                "Each result affects only the explorer making that roll.",
      SomethingHidden = "If you want to try to figure out what's odd, attempt a Knowledge roll:\n" +
                        "4+ A section of wall slides away, revealing an alcove. Draw an item card.\n" +
                        "0-3 You can't figure it out, and that makes you a bit crazy. Lose 1 Sanity.",
      SomethingSlimy = "You must attempt a Speed roll:\n" +
                       "4+ You break free. Gain 1 Speed.\n" +
                       "1-3 Lose 1 Might.\n" +
                       "0 Lose 1 Might and 1 Speed",
      Spider = "You must attempt a Speed roll to brush it away or a Sanity roll to stand still:\n" +
               "4+ It's gone. Gain 1 in the trait you used to attempt this roll.\n" +
               "1-3 It bites you. Take 1 die of physical damage.\n" +
               "0 It takes a chunk out of you. Take 2 dice of physical damage",
      TheBeckoning = "Each explorer in the Gardens, Graveyard, Tower, on the Balcony, or in a room with an outside-facing window must attempt a Sanity roll:\n" +
                     "3+ You back away from the ledge.\n" +
                     "0-2 You jump to the Patio. (If it isn't in the house, search the room stack for it, put it in the house, and shuffle that stack.) Put your explorer there and take 1 die of physical damage.\n" +
                     "Each result affects only the explorer making that roll",
      TheLeftHand = "Choose one:\n" +
                    "Cut off your hand. Lose 1 Might and gain 1 Sanity.\n" +
                    "Replace your hand. Lose 1 Might, and draw an item cared.\n" +
                    "Keep your hand. Lose 2 Sanity, gain 1 Might, and move to the nearest room with an omen symbol and draw an omen card.",
      TheLostOne = "You must attempt a Knowledge roll. If the result is 5 or more, you break out of your trance and gain 1 Knowledge; otherwise, roll 3 dice to see where the Lost One leads you:\n" +
                   "6 Move to Entrance Hall.\n" +
                   "4-5 Move to Upper Landing.\n" +
                   "2-3 Draw room tiles until you find an upper floor room.\n" +
                   "0-1 Draw room tiles until you find a basement room.\n" +
                   "If this card requires you to draw a room tile for a specific floor, put that tile in the house, and move there. If you reach the end of the stack without drawing a room for the floor you rolled, put your explorer in the Entrance Hall instead.",
      TheVoice = "You must attempt a Knowledge roll:\n" +
                 "4+ You find something under the floor. Draw an item card.\n" +
                 "0-3 You dig and search for the voice, but to no avail.",
      TheWalls = "You must draw the next room tile and put it in the house. Move to that room.",
      TheWallsHaveEyes = "You must attempt a Sanity roll:\n" +
                         "4+ If the Arsenal is in play, move to Arsenal and draw an item card. If the Arsenal is not yet in play, search through the room stack until you find it and place it in the house. Then shuffle that stack and move to Arsenal as if you just discovered it.\n" +
                         "3 Gain 1 Knowledge.\n" +
                         "0-2 Lose 1 Sanity.",
      Webs = "You must attempt a Might roll:\n" +
             "4+ You break free. Gain 1 Might and discard this card.\n" +
             "0-3 You're stuck.",
      WhatThe = "Pick up the tile for the room you are in (after setting everything on it aside). Put it somewhere else on the same floor of the house so its door is attacked to a different unexplored doorway (and put back everything you set aside). If there isn't an unexplored doorway on this floor, move the room to a different floor.",
      WhatYearIsIt = "Lose 1 Sanity, and gain 1 Might and 1 Knowledge.\n" +
                     "If the haunt has been revealed, the other side must read aloud their italicized opening and closing story text. If not, place this card in front of you until the haunt is revealed.",
      Whoops = "The previous player randomly discards one of your item cards.",
    }

    export const enum OnBoth {
      Flytrap = "Take 1 die of physical damage. After the haunt is revealed, when any hero, traitor, or monster enters that room, you may attempt a Might 7 attack against that opponent.",
      MysticSlide = "There is a Slide in this room. You must attempt a Might roll to use the Slide.\n" +
                    "5+ You control the Slide. Move to any explored room on any floor below the Slide.\n" +
                    "0-4 Draw tiles from the room stack until you draw a basement room. Place the room tile. (If no basement rooms are in the stack, choose a basement room in play.) You fall to that room and take 1 die of physical damage. If it's not your turn, don't draw a card for that room.\n" +
                    "On later turns, any explorer can attempt this roll to use the Slide.",
      RevolvingWall = "Place the Wall Switch on a wall without an exit in this room or a corner of this room. If there isn't a room on the other side of the Wall Switch, draw room tiles until you find one for this floor, then put it in the house. (If there are no more rooms on this floor, discard this card.) Then move to that room.\n" +
                      "Once during an explorer's turn, if that explorer is in either room, he or she can attempt a Knowledge rool to use the Wall Switch:\n" +
                      "3+ That explorer finds the hidden switch and goes through. This doesn't count as moving a space.\n" +
                      "0-2 That explorer can't find the hidden switch and can't go through.",
      SecretPassage = "Put a Secret Passage entrance in this room. Roll 3 dice and place the second Secret Passage entrance in:\n" +
                      "6 Any existing room.\n" +
                      "4-5 Any existing upper floor room.\n" +
                      "2-3 Any existing ground floor room.\n" +
                      "0-1 Any existing basement floor room.\n" +
                      "You can then use the Secret Passage, even if you don't have any movement left.\n" +
                      "Moving through Secret Passage counts as moving one space.\n" +
                      "On later turns, any explorer can use the Secret Passage.",
      SecretStairs = "Put a Secret Stair entrance in this room and the second Secret Stair entrance in an existing room on another floor. Moving through Secret Stairs counts as moving one space.\n" +
                     "You can follow the stairs right now, even if you don't have any movement left. If you do follow them this turn, draw an event card in the new room.",
    }
  }
}

class Event extends Card {
  public readonly type: Card.Type = Card.Type.Event;

  public activate(character?: Character, room?: Room): void {

  }
}

export default Event;
