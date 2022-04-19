export function shuffle(array: any[]): any[] {
  let randomIndex;
  let currentIndex = array.length;

  // While there remain elements to shuffle
  while (currentIndex != 0) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export class Die {
  static roll(): number {
    // Returns an integer in [0, 1, 2]
    return Math.floor(Math.random() * 3);
  }
}
