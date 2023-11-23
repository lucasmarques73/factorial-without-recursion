const factorial = (n) => {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

const factorialWithoutRecursion = (n, acc = 1) => {
  while (true) {
    if (n <= 1) return acc;

    const aux = n - 1;
    acc = n * acc;
    n = aux;
  }
};

const main = () => {
  const n = 4;
  console.log("factorial", factorial(n));
  console.log("factorialWithoutRecursion", factorialWithoutRecursion(n));
};

main();
