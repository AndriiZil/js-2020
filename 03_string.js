const start = '   Hello Youtube ';
const end = 'This is ne JS feature    ';

console.log(start.trimStart() + end.trimEnd()); // => Hello Youtube This is ne JS feature
console.log((start + end).trim()); // => Hello Youtube This is ne JS feature

console.log('vk'.padStart(6, 'www.')); // => www.vk
console.log('vk'.padStart(10, '!!!!')); // => !!!!!!!!vk
console.log('vk'.padEnd(6, '.com')); // => vk.com

function tag(strings) {
  console.log(strings);
  return 'hello world';
}

const person = {
  name: 'Andrii',
  age: 30
};

const output = tag`Human name is ${person.name} and ${person.age} in the family.`;

console.log(output);