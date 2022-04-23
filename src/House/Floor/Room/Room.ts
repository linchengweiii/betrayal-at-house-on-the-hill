import InterfaceRoom from "./Room.interface"

namespace Room {
  export interface Properties {
    name: string;
    doors: boolean[];
    effects: Room.Effect[];

    readonly card: Room.Card;
    readonly outside: boolean;
    readonly windows: boolean;
    readonly dumbwaiter: boolean;
  }

  export const enum Card {
    Any,
    Event,
    Item,
    Omen,
    None,
  }

  export const enum Direction {
    North,
    West,
    South,
    East,
    UpStair,
    DownStair,
  }

  export interface Effect {
    // An empty interface to make Room.Effect a type
  }

  export namespace Effect {
    // You may do an optional action (e.g. die roll), which may result in gaining something
    export const enum Optional {
      MoveToDumbwaiterRoom = "When you exit, you may attempt a Speed roll of 3+. If you succeed, move to any room with a dumbwaiter.",
      MoveToOpenDoor = "Open per turn, roll 2 dice and move this room next to any open door on:\n" +
                       "4 Any floor\n" +
                       "3 Upper floor\n" +
                       "2 Ground floor\n" +
                       "1 Basement\n" +
                       "0 Basement, then take 1 die of physical damage",
      MoveToAnyLanding = "You may spend 2 spaces of movement to move to any landing.",
      GainPhysical = "If you end your turn here, you may discard an item card to gain 1 physical trait if it's below its starting value.",
      GainSanity = "If you end your turn here, you may discard an item card to gain 1 Sanity.",
      OpenVault = "You can attempt a Knowledge roll of 6+ to open and empty the vault.",
      FallToBallroom = "You can choose to fall to the Ballroom if it's in the house. If you do, take 1 die of physical damage.",
      MightBarrier = "There is a barrier in this room. You can attempt a Might roll of 3+ to cross. If you fail, you top moving.",
      ChangeItem = "If you end your turn here, you may discard an item card to draw an item card from the discard pile.",
      SanityBarrier = "There is a barrier in this room. You can attempt a Sanity roll of 6+ to cross. If you fail, you top moving.",
      SpeedBarrier = "There is a barrier in this room. You can attempt a Speed roll of 3+ to cross. If you fail, you top moving.",
    }

    // You are required to do an action (e.g. die roll), which may result in either losing sth. or gaining sth.
    export const enum Required {
      LoseSpeed = "When exiting, you must attempt a Might roll of 3+. If you fail, lose 1 Speed (but continue moving).",
      PlaceRoom = "When discovered, search the room stack and choose a room tile to place in the house. Then shuffle that stack.",
      LoseMight = "When exiting, you must attempt a Speed roll of 3+. If you fail, lose 1 Might (but continue moving).",
      FallToBasementAndPhysicalDamage = "You must attempt a Speed roll of 5+ to avoid falling. If you fail the roll, draw a basement tile and put it in play. You fall there and take 1 die of physical damage.",
      LoseKnowledge = "When exiting, you must attempt a Sanity roll of 4+. If you fail, lose 1 Knowledge (but continue moving).",
      PortalToUpperOrRoof = "Put a Portal on any open door on the roof or upper floor. This room is adjacent to that door.",
      LoseSanityEnter = "When you enter, you must attempt a Sanity roll of 3+. If you fail, lose 1 Sanity.",
      LoseSanityExit = "When exiting, you must attempt a Knowledge roll of 4+. If you fail, lose 1 Sanity (but continue moving).",
    }

    // The effect will automatically activate when reaching, staying, or having some movement here.
    export const enum Automatic {
      GainMental = "Once per game, if you end your turn here, gain 1 mental trait.",
      LockedDoor = "There is a Lock on each door of this room. To enter or exit through a locked door, attempt a Knowledge roll of 3+ to remove the Lock.",
      GainOrLoseSanity = "If you end your turn here, gain 1 Sanity if it's below its starting value. Lose 1 Sanity if it's above its starting value",
      AddKnowledgeAndSubtractSpeed = "Add 1 to the results of Knowledge rolls here, and subtract 1 from the results of Speed rolls here (minimum 0).",
      GainSpeed = "Once per Game, if you end your turn here, gain 1 Speed.",
      GainSanity = "Once per game, if you end your turn here, gain 1 Sanity.",
      GainKnowledge = "Once per game, if you end your turn here, gain 1 Knowledge.",
      FallToBasement = "One-way slide to Basement Landing",
      DrawTwoItemsAndKeepOne = "When you draw an item card in this room, draw 2 cards and choose 1 to keep. Discard the other.",
      GainPhysical = "Once per game, if you end your turn here, gain 1 physical trait.",
      PhysicalDamage = "If you enter and exit this room on your turn, lose 1 die from a physical trait.",
      LoseMental = "If you end your turn here, take 1 point of mental damage.",
      LosePhisycal = "If you end your turn here, take 1 point of physical damage.",
      GainMight = "Once per game, if you end your turn here, gain 1 Might.",
    }

  }

}

class Room implements InterfaceRoom {
  public name: string;
  public doors: boolean[];
  public effects: Room.Effect[];

  private readonly _card: Room.Card;
  private readonly _outside: boolean;
  private readonly _windows: boolean;
  private readonly _dumbwaiter: boolean;

  constructor(props: Room.Properties) {
    this.name = props.name;
    this.doors = props.doors;
    this.effects = props.effects;
    this._card = props.card;
    this._outside = props.outside;
    this._windows = props.windows;
    this._dumbwaiter = props.dumbwaiter;
  }

  public rotate(): void {
    this.doors.unshift(this.doors.pop()!);
  }

  public isOutside(): boolean {
    return this._outside;
  }

  public hasWindows(): boolean {
    return this._windows;
  } 

  public hasDumbWaiter(): boolean {
    return this._dumbwaiter;
  }
}

export default Room;
