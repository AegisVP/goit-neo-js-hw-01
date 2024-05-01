const getShippingMessage = (country, price, deliveryFee) => {
  console.log({ country, price, deliveryFee });
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
};

const testTask2 = () => {
  document.getElementById('result').innerHTML = '';
  logOutput(getShippingMessage, 'Australia', 120, 50); // "Shipping to Australia will cost 170 credits"
  logOutput(getShippingMessage, 'Germany', 80, 20); // "Shipping to Germany will cost 100 credits"
  logOutput(getShippingMessage, 'Sweden', 100, 20); // "Shipping to Sweden will cost 120 credits"
};
