const values = {
  undefined: undefined,
  null: null,
  false: false,
  zero: 0,
  empty: ''
}

console.log(values.undefined || 'default undefined'); // => default undefined
console.log(values.undefined ?? 'default undefined'); // => default undefined