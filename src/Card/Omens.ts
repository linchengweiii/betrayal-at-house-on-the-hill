import { Omen } from "./Omen"

export const Omens: Omen.Properties[] = [
  {
    name: "Bite",
    description: "A growl, the scent of death. Pain. Darkness. Gone.",
    effect: Omen.Effect.Passive.Bite,
    immovable: true,
  },
  {
    name: "Bloodstone",
    description: "Smooth and the deep green of a midnight forest, the stone is veined with crimson. They say you can't get blood from a stone. They didn't ask this one.",
    effect: Omen.Effect.Active.Bloodstone,
  },
  {
    name: "Book",
    description: "A diary or lab notes? Ancient script or modern ravings?",
    effect: Omen.Effect.Passive.Book,
  },
  {
    name: "Box",
    description: "They were always telling you to think outside of it. Now you're worried you'll end up inside it.",
    effect: Omen.Effect.Both.Box,
  },
  {
    name: "Cat",
    description: "It crossed your path, and you're supposed to have bad luck. But maybe you crossed its path, and it's the one that isn't too happy about it. Now it accompanies you.",
    effect: Omen.Effect.Active.Cat,
    immovable: true,
    companion: true,
  },
  {
    name: "Crystal Ball",
    description: "Hazy images appear in the glass.",
    effect: Omen.Effect.Active.CrystalBall,
  },
  {
    name: "Dog",
    description: "This mangy dog seems friendly. At least you hope it is.",
    effect: Omen.Effect.Both.Dog,
    immovable: true,
    companion: true,
  },
  {
    name: "Girl",
    description: "A girl. Trapped. Alone. You free her!",
    effect: Omen.Effect.Passive.Girl,
    immovable: true,
    companion: true,
  },
  {
    name: "Holy Symbol",
    description: "A symbol of calm in an unsettling world.",
    effect: Omen.Effect.Passive.HolySymbol,
  },
  {
    name: "Key",
    description: "You've been wondering how to open all the locks in the house. The question is, why did they get locked in the first place?",
    effect: Omen.Effect.Both.Key,
  },
  {
    name: "Letter",
    description: "Scrawled in ink, or whatever.",
    effect: Omen.Effect.Active.Letter,
  },
  {
    name: "Madman",
    description: "A raving, frothing madman.",
    effect: Omen.Effect.Passive.Madman,
    immovable: true,
    companion: true,
  },
  {
    name: "Mask",
    description: "A somber mask to hide your intentions.",
    effect: Omen.Effect.Active.Mask,
  },
  {
    name: "Medallion",
    description: "A medallion inscribed with a pentagram.",
    effect: Omen.Effect.Passive.Medallion,
  },
  {
    name: "Photograph",
    description: "It changes as you look at it, showing different rooms in this house. Probably this house.",
    effect: Omen.Effect.Active.Photograph,
  },
  {
    name: "Ring",
    description: "A battered ring with an incomprehensible inscription.",
    effect: Omen.Effect.Active.Ring,
  },
  {
    name: "Rope",
    description: "It probably wasn't used to hang anybody. Today.",
    effect: Omen.Effect.Active.Rope,
  },
  {
    name: "Skull",
    description: "A skull, cracked and missing teeth.",
    effect: Omen.Effect.Active.Skull,
  },
  {
    name: "Spear",
    description: "A weapon pulsing with power.",
    effect: Omen.Effect.Active.Spear,
    weapon: true,
  },
  {
    name: "Spirit Board",
    description: "A board with letters and numbers to call the dead.",
    effect: Omen.Effect.Active.SpiritBoard,
  },
  {
    name: "Vial",
    description: "The old and crazy woman said you should drink this potion that glows with an amber light. Maybe that's how she got so old and crazy.",
    effect: Omen.Effect.Active.Vial,
  },
];
