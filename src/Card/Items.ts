import { Item } from "./Item"

export const Items: Item.Properties[] = [
  {
    name: "Adrenaline Shot",
    description: "A syringe containing a strange fluorescent liquid.",
    effect: Item.Effect.Active.AdrenalineShot,
    disposable: true,
  },
  {
    name: "Amulet of the Ages",
    description: "Ancient silver and inlaid gems, inscribed with blessings.",
    effect: Item.Effect.Passive.AmuletOfTheAges,
  },
  {
    name: "Angel Feather",
    description: "A perfect feather fluttering in your hand.",
    effect: Item.Effect.Active.AngelFeather,
    disposable: true,
  },
  {
    name: "Armor",
    description: "It's just prop armor from a Renaissance fair, but it's still metal.",
    effect: Item.Effect.Passive.Armor,
  },
  {
    name: "Axe",
    description: "Very sharp.",
    effect: Item.Effect.Passive.Axe,
    weapon: true,
  },
  {
    name: "Bell",
    description: "A brass bell that makes a resonant clang.",
    effect: Item.Effect.Both.Bell,
  },
  {
    name: "Blood Dagger",
    description: "A nasty weapon. Needles and tubes extend from the handle... and plunge right into your veins.",
    effect: Item.Effect.Both.BloodDagger,
    weapon: true,
  },
  {
    name: "Blueprint",
    description: "An old map of the house.",
    effect: Item.Effect.Active.Blueprint,
  },
  {
    name: "Boomstick",
    description: "Rusted and well-used, someone took a hacksaw to the barrel. At least they left two good shells.",
    effect: Item.Effect.Active.Boomstick,
    weapon: true,
  },
  {
    name: "Bottle",
    description: "An opaque vial containing a black liquid.",
    effect: Item.Effect.Active.Bottle,
    disposable: true,
  },
  {
    name: "Camcorder",
    description: "Left by a previous explorer, there seems to be something on the tape. You should totally watch it.",
    effect: Item.Effect.Passive.Camcorder,
  },
  {
    name: "Candle",
    description: "It amkes the shadows move -- at least, you hope it's doing that.",
    effect: Item.Effect.Passive.Candle,
  },
  {
    name: "Ceremonial Robe",
    description: "Not sure if it's for the sacrificer or the sacrificee.",
    effect: Item.Effect.Active.CeremonialRobe,
  },
  {
    name: "Chainsaw",
    description: "Vroom, baby, vroom",
    effect: Item.Effect.Active.Chainsaw,
    weapon: true,
  },
  {
    name: "Chalk",
    description: "A simple drawing stick made of ground bone and wax.",
    effect: Item.Effect.Active.Chalk,
  },
  {
    name: "Dark Dice",
    description: "Are you feeling lucky?",
    effect: Item.Effect.Active.DarkDice,
  },
  {
    name: "Device",
    description: "A jumble of wires and glass instruments used to measure things that are not of this world.",
    effect: Item.Effect.Both.Device,
  },
  {
    name: "Dynamite",
    description: "The fuse isn't lit... yet.",
    effect: Item.Effect.Active.Dynamite,
    disposable: true,
  },
  {
    name: "Effigy",
    description: "Handmade wtih care, the doll is dressed in a tiny copy of your own clothes.",
    effect: Item.Effect.Passive.Effigy,
  },
  {
    name: "Healing Salve",
    description: "A stcky paste in a shallow bowl",
    effect: Item.Effect.Active.HealingSalve,
    disposable: true,
  },
  {
    name: "Idol",
    description: "Perhaps it's chosen you for some greater purpose. Like human sacrifice.",
    effect: Item.Effect.Active.Idol,
  },
  {
    name: "Locket",
    description: "A memento of love on a thin gold chain.",
    effect: Item.Effect.Passive.Locket,
  },
  {
    name: "Lucky Stone",
    description: "A smooth, ordinary-looking rock. You sense it will bring you good fortune.",
    effect: Item.Effect.Active.LuckyStone,
    disposable: true,
  },
  {
    name: "Medical Kit",
    description: "A doctor's bag, depleted in some critical resources.",
    effect: Item.Effect.Active.MedicalKit,
  },
  {
    name: "Music Box",
    description: "A hand-crafted antique. It plays a haunting melody that gets stuck in your head.",
    effect: Item.Effect.Both.MusicBox,
  },
  {
    name: "Pickpocket's Gloves",
    description: "Helping yourself has never seemed so easy.",
    effect: Item.Effect.Active.PickpoketsGloves,
  },
  {
    name: "Rabbit's Foot",
    description: "Not so lucky for the rabbit.",
    effect: Item.Effect.Active.RabbitsFoot,
  },
  {
    name: "Revolver",
    description: "An old, potent-looking weapon.",
    effect: Item.Effect.Active.Revolver,
    weapon: true,
  },
  {
    name: "Sacrificial Dagger",
    description: "A twisted shard of iron covered in mysterious symbols and stained with blood.",
    effect: Item.Effect.Active.SacrificialDagger,
    weapon: true,
  },
  {
    name: "Smelling Salts",
    description: "Whew, that's a lungful",
    effect: Item.Effect.Active.SmellingSalts,
    disposable: true,
  },
  {
    name: "Snake Oil",
    description: "The worn label has vague promises of renewed vigor. It doesn't smell poisonous.",
    effect: Item.Effect.Active.SnakeOil,
    disposable: true,
  },
  {
    name: "Teapot",
    description: "A porcelain teapot with a motif of delicate pink flowers. It grants wishes, at a price.",
    effect: Item.Effect.Active.Teapot,
  },
];
