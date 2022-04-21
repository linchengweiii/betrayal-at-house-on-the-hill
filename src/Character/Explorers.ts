import Character from "./Character"
import Explorer from "./Explorer"
import Trait from "./Trait"

const Explorers: Character.Properties[] = [
  {
    name: "Madame Zostra",
    speed: new Trait([2, 3, 3, 5, 5, 6, 6, 7], 2),
    might: new Trait([2, 3, 3, 4, 5, 5, 5, 6], 3),
    sanity: new Trait([4, 4, 4, 5, 6, 7, 8, 8], 2),
    knowledge: new Trait([1, 3, 4, 4, 4, 5, 6, 6], 3),
  },
  {
    name: "Vivian Lopez",
    speed: new Trait([3, 4, 4, 4, 4, 6, 7, 8], 3),
    might: new Trait([2, 2, 2, 4, 4, 5, 6, 6], 2),
    sanity: new Trait([4, 4, 4, 5, 6, 7, 8, 8], 2),
    knowledge: new Trait([4, 5, 5, 5, 5, 6, 6, 7], 3),
  },
  {
    name: "Brandon Jaspers",
    speed: new Trait([3, 4, 4, 4, 5, 6, 7, 8], 3),
    might: new Trait([2, 3, 3, 4, 5, 6, 6, 7], 3),
    sanity: new Trait([3, 3, 3, 4, 5, 6, 7, 8], 3),
    knowledge: new Trait([1, 3, 3, 5, 5, 6, 6, 7], 2),
  },
  {
    name: "Peter Akimoto",
    speed: new Trait([3, 3, 3, 4, 6, 6, 7, 7], 3),
    might: new Trait([2, 3, 3, 4, 5, 5, 6, 8], 2),
    sanity: new Trait([3, 4, 4, 4, 5, 6, 6, 7], 3),
    knowledge: new Trait([3, 4, 4, 5, 6, 6, 7, 8], 2),
  },
  {
    name: "Heather Granville",
    speed: new Trait([3, 3, 4, 5, 6, 6, 7, 8], 2),
    might: new Trait([3, 3, 3, 4, 5, 6, 7, 8], 2),
    sanity: new Trait([3, 3, 3, 4, 5, 6, 6, 6], 2),
    knowledge: new Trait([2, 3, 3, 4, 5, 6, 7, 8], 4),
  },
  {
    name: "Jenny LeClerc",
    speed: new Trait([2, 3, 4, 4, 4, 5, 6, 8], 3),
    might: new Trait([3, 4, 4, 4, 4, 5, 6, 8], 2),
    sanity: new Trait([1, 1, 2, 4, 4, 4, 5, 6], 4),
    knowledge: new Trait([2, 3, 3, 4, 4, 5, 6, 8], 2),
  },
  {
    name: "Darrin \"Flash\" Williams",
    speed: new Trait([4, 4, 4, 5, 6, 7, 7, 8], 4),
    might: new Trait([2, 3, 3, 4, 5, 6, 6, 7], 2),
    sanity: new Trait([1, 2, 3, 4, 5, 5, 5, 7], 2),
    knowledge: new Trait([2, 3, 3, 4, 5, 5, 5, 7], 2),
  },
  {
    name: "Ox Bellows",
    speed: new Trait([2, 2, 2, 3, 4, 5, 5, 6], 4),
    might: new Trait([4, 5, 5, 6, 6, 7, 8, 8], 2),
    sanity: new Trait([2, 2, 3, 4, 5, 5, 6, 7], 2),
    knowledge: new Trait([2, 2, 3, 3, 5, 5, 6, 6], 2),
  },
  {
    name: "Father Rhinehardt",
    speed: new Trait([2, 3, 3, 4, 5, 6, 7, 7], 2),
    might: new Trait([1, 2, 2, 4, 4, 5, 5, 7], 2),
    sanity: new Trait([3, 4, 5, 5, 6, 7, 7, 8], 4),
    knowledge: new Trait([1, 3, 3, 4, 5, 6, 6, 8], 3),
  },
  {
    name: "Professor Longfellow",
    speed: new Trait([2, 2, 4, 4, 5, 5, 6, 6], 3),
    might: new Trait([1, 2, 3, 4, 5, 5, 6, 6], 2),
    sanity: new Trait([1, 3, 3, 4, 5, 5, 6, 7], 2),
    knowledge: new Trait([4, 5, 5, 5, 6, 6, 7, 8], 3),
  },
  {
    name: "Missy Dubourde",
    speed: new Trait([3, 4, 5, 6, 6, 6, 7, 7], 2),
    might: new Trait([2, 3, 3, 3, 4, 5, 6, 7], 3),
    sanity: new Trait([1, 2, 3, 4, 5, 5, 6, 7], 2),
    knowledge: new Trait([2, 3, 4, 4, 5, 6, 6, 6], 3),
  },
  {
    name: "Zoe Ingstrom",
    speed: new Trait([4, 4, 4, 4, 5, 6, 8, 8], 3),
    might: new Trait([2, 2, 3, 3, 4, 4, 6, 7], 3),
    sanity: new Trait([3, 4, 5, 5, 6, 6, 7, 8], 2),
    knowledge: new Trait([1, 2, 3, 4, 4, 5, 5, 5], 2),
  },
];

export default Explorers;
