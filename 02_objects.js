const person = {
  name: 'Andrii',
  age: 30
};

console.log(Object.getOwnPropertyDescriptor(person, 'age')); // => { value: 30, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, 'name')); // =>
/*
  {
    value: 'Andrii',
    writable: true,
    enumerable: true,
    configurable: true
  }
 */

console.log(Object.entries(person)); // => [ [ 'name', 'Andrii' ], [ 'age', 30 ] ]
console.log(Object.fromEntries([['name', 'Andrii'], ['age', 30]])); // => { name: 'Andrii', age: 30 }

console.log(Object.entries(['A', 'n', 'd', 'r', 'i', 'i'])); // =>
/*
  [
    [ '0', 'A' ],
    [ '1', 'n' ],
    [ '2', 'd' ],
    [ '3', 'r' ],
    [ '4', 'i' ],
    [ '5', 'i' ]
  ]
 */

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}

console.log(Object.values(person)); // => [ 'Andrii', 30 ]