import Event from "./Event"

export const Events: Event.Properties[] = [
  {
    name: "A Moment of Hope",
    description: "Something feels stangely right about this room. Something is resisting the evil of the house.",
    effect: Event.Effect.OnRoom.AdditionalDie,
  },
  {
    name: "Acupuncture",
    description: "This room is pleasantly lit with candles. A woman with long dark hair in a pristine white coat smiles warmly at you. She raises a needle, thin as a hair and longer than her hand. The point of the needle glints in the candlelight as it is driven toward your eye.",
    effect: Event.Effect.OnCharacter.Acupuncture,
  },
  {
    name: "Angry Being",
    description: "It emerges from the slime on the wall next to you.",
    effect: Event.Effect.OnCharacter.AngryBeing,
  },
  {
    name: "Bloody Vision",
    description: "The walls of this room are damp with blood. The blood drips from the ceiling, down the walls, over the furniture, and onto your shoes. In a blink, it is gone.",
    effect: Event.Effect.OnCharacter.BloodyVision,
  },
  {
    name: "Burial Mound",
    description: "A pile of rocks covering a fresh cropse. Too fresh.",
    effect: Event.Effect.OnRoom.GetAttackByPreviousPlayer,
  },
  {
    name: "Burning Man",
    description: "A man on fire runs through the room. His skin bubbles and cracks, falling away from him and leaving a fiery skull that clatters to the ground, bounces, rolls, and disappears.",
    effect: Event.Effect.OnCharacter.BurningMan,
  },
  {
    name: "Closet Door",
    description: "That closet door is open... just a crack. There must be something inside.",
    effect: Event.Effect.OnRoom.OpenCloset,
  },
  {
    name: "Contract",
    description: "Here's a contract for power in return for your soul.",
    effect: Event.Effect.OnCharacter.Contract,
  },
  {
    name: "Creepy Crawlies",
    description: "A thousand bugs spill out on your skin, under your clothes, and in your hair.",
    effect: Event.Effect.OnCharacter.CreepyCrawlies,
  },
  {
    name: "Creepy Puppet",
    description: "You see one of those dolls that give you the willies. It jumps at you with a tiny spear.",
    effect: Event.Effect.OnCharacter.CreepyPuppet,
  },
  {
    name: "Debris",
    description: "Plaster falls from the walls and ceiling.",
    effect: Event.Effect.OnCharacter.Debris,
  },
  {
    name: "Disquieting Sounds",
    description: "A baby's cry, lost and abandoned. A scream. The crack of breaking glass. Then silence.",
    effect: Event.Effect.OnCharacter.DisquietingSounds,
  },
  {
    name: "Drip... Drip... Drip...",
    description: "A rhythmic sound that needles at your brain.",
    effect: Event.Effect.OnRoom.FewerDie,
  },
  {
    name: "Flytrap",
    description: "An enormous exotic plant stands beneath an elaborate rig of lights and plumbing. Its leaves are brown and withered, its giant flower pod stands partially open, waiting for sustnance. It needs water. It needs to be fed your blood.",
    effect: Event.Effect.OnBoth.Flytrap,
  },
  {
    name: "Footsteps",
    description: "The floorboards slowly creak. Dust rises. Footprints appear on the dirty floor. And then, as they reach you, they are gone.",
    effect: Event.Effect.OnCharacter.Footsteps,
  },
  {
    name: "Funeral",
    description: "You see an open coffin. You're inside it.",
    effect: Event.Effect.OnCharacter.Funeral,
  },
  {
    name: "Ghost in the Machine",
    description: "The crackling  of static startles you as a small television sparks to life. Through the snowy image, you make out the shape a child playing somewhere in the house. She stops her game, turns toward you and beckons you to join her. The television goes black once again.",
    effect: Event.Effect.OnCharacter.GhostInTheMachine,
  },
  {
    name: "Grave Dirt",
    description: "This room is covered in a thick layer of dirt. You cough as it gets on your skin and in your lungs.",
    effect: Event.Effect.OnCharacter.GraveDirt,
  },
  {
    name: "Groundskeeper",
    description: "You turn to see a man in groundskeeper clothing. He raises his shovel and charges. Inches from your face, he disappears, leaving muddy footprints, and nothing more.",
    effect: Event.Effect.OnCharacter.Groundskeeper,
  },
  {
    name: "Hanged Men",
    description: "A breeze chills the room. Before you, three men hang from frayed ropes. They stare at you with cold, dead eyes. The trio swing silently, then fade into dust that falls to the ground. You start to choke.",
    effect: Event.Effect.OnCharacter.HangedMen,
  },
  {
    name: "Hideous Shriek",
    description: "It starts like a whisper, but ends in a soul-rendering shriek.",
    effect: Event.Effect.OnCharacter.HideousShriek,
  },
  {
    name: "Image in the Mirror",
    // If you don't have any item ards, this event affects the next explorer with an item card. Discard this card if no explorer has an item card. 
    description: "There is an old mirror in this room. Your frightened reflection moves on its own. You realize it is you from another time. You need to help your reflection, so you write on the the mirror: THIS WILL HELP You then hand an item through the mirror.",
    effect: Event.Effect.OnCharacter.ImageInTheMirrorLost,
  },
  {
    name: "Image in the Mirror",
    description: "There is an old mirror in this room. Your frightened reflection moves on its own. You realize it is you from the another time. Your reflection writes on the mirror: THIS WILL HELP Then it hands you an item through the mirror.",
    effect: Event.Effect.OnCharacter.ImageInTheMirrorGain,
  },
  {
    name: "It is Meant to Be",
    description: "You collapse to the floor, visions of future events pouring through your head.",
    effect: Event.Effect.OnCharacter.ItIsMeantToBe,
  },
  {
    name: "Jonah's Turn",
    description: "Two boys are playing with a wooden top. \"Would you like a turn, Jonah?\" one asks.\n" +
                 "\"No,\" says Jonah, \"I want all the turns.\" Jonah takes the top and hits the other boy in the face. The boy falls. Jonah keeps hitting him as they fade from view.",
    effect: Event.Effect.OnCharacter.JonahsTurn,
  },
  {
    name: "Lightning Strikes",
    description: "You count the seconds from when you see the flash. Second.",
    effect: Event.Effect.OnCharacter.LightningStrikes,
  },
  {
    name: "Lights Out",
    description: "Your flashlight goes out. Don't worry, someone else has batteries.",
    effect: Event.Effect.OnCharacter.LightsOut,
  },
  {
    name: "Locked Safe",
    description: "Behind a portrait is a wall safe. It is trapped, of course.",
    effect: Event.Effect.OnRoom.OpenSafe,
  },
  {
    name: "Misty Arch",
    description: "An archway in the wall filled with colored mists.",
    effect: Event.Effect.OnCharacter.MistyArch,
  },
  {
    name: "Mists from the Walls",
    description: "Mists pour out from the walls. There are faces in the mists, human and... inhuman",
    effect: Event.Effect.OnCharacter.MistsFromTheWalls,
  },
  {
    name: "Mutant Housepet",
    description: "A mewling. From inside the wall. Is it a cat? A second yowl erupts from the same spot in the wall, a different feline voice. Two cats? You hear only one scratching to get out. Two heads? You claw at the plaster to find out.",
    effect: Event.Effect.OnCharacter.MutantHousepet,
  },
  {
    name: "Mystic Slide",
    // If you're in the basement, this event affects the next explorer not in the basement. Discard this card if all of the explorers are in the basement.
    description: "The floor falls from under you.",
    effect: Event.Effect.OnBoth.MysticSlide,
  },
  {
    name: "Night View",
    description: "You see a vision of a ghostly couple walking the grounds, silently strolling in their wedding best.",
    effect: Event.Effect.OnCharacter.NightView,
  },
  {
    name: "Phone Call",
    description: "A phone rings in the room. You feel compelled to answer it.",
    effect: Event.Effect.OnCharacter.PhoneCall,
  },
  {
    name: "Possession",
    description: "A shadow separates from the wall. As you stand in shock, the shadow surrounds you and chills you to the core.",
    effect: Event.Effect.OnCharacter.Possession,
  },
  {
    name: "Revolving Wall",
    description: "The wall spins to another place.",
    effect: Event.Effect.OnBoth.RevolvingWall,
  },
  {
    name: "Rotten",
    description: "The smell in this room, it's horrible. Smalls like death, like blood. A slauterhouse smell.",
    effect: Event.Effect.OnCharacter.Rotten,
  },
  {
    name: "Secret Passage",
    description: "A section of the wall slides away. Behind it, a moldy tunnel awaits.",
    effect: Event.Effect.OnBoth.SecretPassage,
  },
  {
    name: "Secret Stairs",
    description: "A horrible creaking sound echoes around you. You've discovered a secret stairwell.",
    effect: Event.Effect.OnBoth.SecretStairs,
  },
  {
    name: "Shrieking Wind",
    description: "The wind picks up, a slow crescendo to a screeching howl.",
    effect: Event.Effect.OnCharacter.ShriekingWind,
  },
  {
    name: "Silence",
    description: "Underground, everything goes silent. Even the sound of breathing is gone.",
    effect: Event.Effect.OnCharacter.Silence,
  },
  {
    name: "Skeletons",
    description: "Mother and child, still embracing.",
    effect: Event.Effect.OnRoom.Skeletons,
  },
  {
    name: "Smoke",
    description: "Smoke billows around you. You cough, wiping away tears.",
    effect: Event.Effect.OnRoom.Smoke,
  },
  {
    name: "Something Hidden",
    description: "There's something odd about this room, but what? It's tickling the back of your mind.",
    effect: Event.Effect.OnCharacter.SomethingHidden,
  },
  {
    name: "Something Slimy",
    description: "What's around your ankle? A bug? A tentacle? A dead hand clawing?",
    effect: Event.Effect.OnCharacter.SomethingSlimy,
  },
  {
    name: "Spider",
    description: "A spider the size of a fist lands on your shoulder... and crawls into your hair.",
    effect: Event.Effect.OnCharacter.Spider,
  },
  {
    name: "The Beckoning",
    description: "Outside. You must get outside. Fly to freedom!",
    effect: Event.Effect.OnCharacter.TheBeckoning,
  },
  {
    name: "The Left Hand",
    description: "Your hand begins to itch. Then burn. The pain is overwhelming and you can do nothing but clutch your hand and scream. The scream dies in your throat when you realize you can't feel anything in it now. You attempt to wiggle your fingers and the hand moves of its own accord toward your throat.",
    effect: Event.Effect.OnCharacter.TheLeftHand,
  },
  {
    name: "The Lost One",
    description: "A woman wearing a Civil War dress beckons to you. You fall into a trance.",
    effect: Event.Effect.OnCharacter.TheLostOne,
  },
  {
    name: "The Voice",
    description: "\"I'm under the floor, buried under the floor...\"\n" +
                 "The voice whispers once, then is gone.",
    effect: Event.Effect.OnCharacter.TheVoice,
  },
  {
    name: "The Walls",
    description: "This room is warm. Flesh-like walls pulse with a steady heartbeat. Your own heart beats with the rhythm of the house. You are drawn into the walls... and emerge somewhere else.",
    effect: Event.Effect.OnCharacter.TheWalls,
  },
  {
    name: "The Walls Have Eyes",
    description: "A series of faded portraits hang on the wall. Their eyes seem to follow you. Is it just a painter's trick? No, the silent, dead faces are trying to tell you something.",
    effect: Event.Effect.OnCharacter.TheWallsHaveEyes,
  },
  {
    name: "Webs",
    description: "Casually, you reach up to brush some webs aside... but they won't brush away. They cling.",
    effect: Event.Effect.OnCharacter.Webs,
  },
  {
    name: "What the...?",
    description: "As you look back the way you came, you see... nothing. Just empty fog and mist where a room used to be.",
    effect: Event.Effect.OnCharacter.WhatThe,
  },
  {
    name: "What Year Is It?!",
    description: "You step through the door and stop. You've been here before. Years ago, before The Incident. You catch your reflection in the window and your face looks so young. But this time, you won't be so naive.",
    effect: Event.Effect.OnCharacter.WhatYearIsIt,
  },
  {
    name: "Whoops!",
    description: "You feel a body under your foot. Before you can leap away from it, you're knocked over. A giggling voice runs away from you.",
    effect: Event.Effect.OnCharacter.Whoops,
  },
];
