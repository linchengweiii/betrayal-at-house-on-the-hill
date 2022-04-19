# Betrayal at House on the Hill Online

**Currently only contains the backend**



## TODOs

### Backend Structure

- [ ] Characters (Explorers, Monsters)
- [ ] Cards (Events, Items, Omens)
- [ ] Rooms
- [ ] Game rules
- [ ] ...



### Backend Server

- [ ] API to trigger Character.setAction(action)
- [ ] ...



## Installation

You can simply install all the needed modules using

```bash
npm install
```



## Usage

You can now start the backend using

```bash
npm run start
```



## Directory Structure

```bash
.
├── node_modules/
├── package.json
├── package-lock.json
├── tsconfig.json
├── webpack.config.js
├── README.md
└── src/
    ├── utils.ts
    ├── Game.ts
    ├── Cards/
    │   ├── Event.ts
    │   ├── Item.ts
    │   └── Omen.ts
    ├── House/
    │   └── Floor/
    │       └── Room/
    └── Character/
        ├── Explorer.ts (abstract)
        ├── Explorers.ts
        ├── Monster.ts (abstract)
        ├── Monsters.ts
        └── Trait.ts
```

Every `Component` folder in `src/` contains `index.ts`,  `Component.interface.ts` and `Component.ts`, which exports the overall modules, interface and base class respectively.

