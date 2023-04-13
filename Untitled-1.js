// sample github master and branch

console.log('Hello World!');

function thisFunc(x) {
  for (let i = 1; i <= x; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('Bull Doge');
    } else if (i % 5 == 0) {
      console.log('Dog');
    } else if (i % 3 == 0) {
      console.log('Bull');
    } else {
      console.log(i);
    }
  }
}

thisFunc(50);
