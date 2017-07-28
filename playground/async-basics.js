console.log('Starting App');

setTimeout(() => {
  console.log('First Callback')
}, 2000)

setTimeout(() => {
  console.log("Second callback")
}, 0)

console.log('Finishing App');
