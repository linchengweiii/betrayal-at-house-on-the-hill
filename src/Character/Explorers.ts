import Explorer from "./Explorer"

export class John extends Explorer {
  static readonly NAME = "John"
  static readonly SPEED_SCALE = [0, 1, 2, 3];
  static readonly MIGHT_SCALE = [0, 1, 2, 3];
  static readonly SANITY_SCALE = [0, 1, 2, 3];
  static readonly KNOWLEDGE_SCALE = [0, 1, 2, 3];
  static readonly SPEED_INIT_INDEX = 2;
  static readonly MIGHT_INIT_INDEX = 2;
  static readonly SANITY_INIT_INDEX = 2;
  static readonly KNOWLEDGE_INIT_INDEX = 2;
}
