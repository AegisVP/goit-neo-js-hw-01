const makeTransaction = (quantity, pricePerDroid) => {
  return `You ordered ${quantity} droid${quantity > 1 ? 's' : ''} worth ${quantity * pricePerDroid} credits!`;
};

const testTask1 = () => {
  document.getElementById('result').innerHTML = '';
  logOutput(makeTransaction, 5, 3000); // "You ordered 5 droids worth 15000 credits!"
  logOutput(makeTransaction, 3, 1000); // "You ordered 3 droids worth 3000 credits!"
  logOutput(makeTransaction, 10, 500); // "You ordered 10 droids worth 5000 credits!"
};
