namespace Trait {
  export const enum Type {
    Speed = 0,
    Might = 1,
    Sanity = 2,
    Knowledge = 3,
  }
}

class Trait {
  private readonly _scale: number[];
  private _index: number;

  constructor(scale: number[], initial_index: number) {
    this._scale = scale;
    this._index = initial_index;
  }

  get info(): [number[], number] {
    return [this._scale, this._index];
  }

  get value(): number {
    return this._scale[this._index];
  }

  public increase(value: number = 1): boolean {
    if (this._index + value < this._scale.length) {
      this._index += value;
      return true;
    }
    return false;
  }

  public decrease(value: number = 1): boolean {
    if (this._index - value >= 0) {
      this._index -= value;
      return true;
    }
    return false;
  }
}

export default Trait;
