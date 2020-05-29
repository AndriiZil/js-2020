const emulate = (id, ms) => new Promise(resolve => {
  setTimeout(() => resolve(id), ms);
})

const promises = [
  emulate(1, 250),
  emulate(2, 500),
  emulate(3, 1500)
];

async function old() {
  for (let promise of await Promise.all(promises)) {
    console.log('old', promise);
  }
}
// ES2020
async function modern() {
  for await (let promise of promises) {
    console.log('Modern', promise);
  }
}

modern();