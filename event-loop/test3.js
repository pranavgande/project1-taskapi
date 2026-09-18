console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

async function test() {
  console.log("C");
  await Promise.resolve();
  console.log("D");
}

test();

Promise.resolve().then(() => {
  console.log("E");
});

console.log("F");
