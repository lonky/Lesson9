// Написать свой метод myFilter в прототипе массивов

const arr = [1, 5, -4, 3, -2, 0];

Array.prototype.myFilter = function <T>(func: (value: T, index: number, array: T[]) => boolean): T[] {
  const res: T[] = [];
  for (let i: number = 0; i < this.length; i += 1) {
    if (func(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

console.log(arr.myFilter((value) => value > 0));

const values = [1, "a", 2, "b"];

const strings: string[] = values.myFilter((value): value is string => typeof value === "string");

console.log(strings);
