// Написать метод myReduce в прототипе массива, который будет работать аналогично reduce

const array: number[] = [4, 2, 3, 1];

Array.prototype.myReduce = function <T, R>(
  func: (acc: R, value: T, index: number, array: T[]) => R,
  initialValue?: R,
): R {
  let acc = initialValue ?? this[0];
  const start = initialValue !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i += 1) {
    acc = func(acc, this[i], i, this);
  }
  return acc;
};

console.log(array.myReduce((acc, value) => acc + value)); //10
// console.log(
//   array.myReduce((acc, value, i) => {
//     return (acc[i] = value);
//   }, {}),
// );
