// Написать класс Cache

class Cache {
  private cache: Record<string, unknown> = {};

  constructor(private readonly fn: (...args: number[]) => unknown) {}

  call(...args: number[]) {
    const key = this.fn.toString();
    if (key in this.cache) {
      return this.cache[key];
    }
    const res = this.fn(...args);
    this.cache[key] = res;
    return res;
  }

  clear(): void {
    this.cache = {};
  }

  get size(): number {
    return Object.keys(this.cache).length;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const func = new Cache((_num1: number, _num2: number) => Math.random());

console.log(func.call());
console.log(func.call());
console.log(func.size);
