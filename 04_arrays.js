const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]];

console.log(nested.flat()); // => [ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]
console.log(nested.flat().flat()); // => ['a', 'b', 'c','d', 'e', 'f','g']
console.log(nested.flat(2)); // => ['a', 'b', 'c','d', 'e', 'f','g']

const tech = ['react redux', 'angular', 'vue', 'deno and node'];
console.log(tech.map(tech => tech.split(' '))); // =>
/*
  [
    [ 'react', 'redux' ],
    [ 'angular' ],
    [ 'vue' ],
    [ 'deno', 'and', 'node' ]
  ]
 */
console.log(tech.flatMap(tech => tech.split(' '))); // =>
/*
  [
    'react',   'redux',
    'angular', 'vue',
    'deno',    'and',
    'node'
  ]
 */