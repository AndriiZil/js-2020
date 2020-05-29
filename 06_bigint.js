console.log(Number.MAX_SAFE_INTEGER); // => 9007199254740991

console.log(typeof 10); // => number
console.log(typeof 10n); // => bigint
console.log(-64923198421684165341894n); // => -64923198421684165341894n

// console.log(10n - 4); // error
console.log(parseInt(10n) - 4); // => 6