import Room from "./Room"

export const InitialRooms: Record<string, Room.Properties> = {
  "Roof Landing": {
    name: "Roof Landing",
    doors: [true, true, true, true],
    effects: [],
    card: Room.Card.None,
    outside: false,
    windows: false,
    dumbwaiter: false,
  },

  "Upper Landing": {
    name: "Upper Landing",
    doors: [true, true, true, true],
    effects: [],
    card: Room.Card.None,
    outside: false,
    windows: false,
    dumbwaiter: false,
  },

  "Grand Staircase": {
    name: "Grand Staircase",
    doors: [false, false, false, true],
    effects: [],
    card: Room.Card.None,
    outside: false,
    windows: false,
    dumbwaiter: false,
  },

  "Foyer": {
    name: "Foyer",
    doors: [true, true, true, true],
    effects: [],
    card: Room.Card.None,
    outside: false,
    windows: false,
    dumbwaiter: false,
  },

  "Entrance Hall": {
    name: "Entrance Hall",
    doors: [true, true, true, false],
    effects: [],
    card: Room.Card.None,
    outside: false,
    windows: false,
    dumbwaiter: false,
  },

  "Basement Landing": {
    name: "Basement Landing",
    doors: [true, true, true, true],
    effects: [],
    card: Room.Card.None,
    outside: false,
    windows: false,
    dumbwaiter: false,
  },
};
