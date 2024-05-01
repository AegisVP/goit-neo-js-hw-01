const getElementWidth = (content, padding, border) => {
  return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
};

const testTask3 = () => {
  document.getElementById('result').innerHTML = '';
  logOutput(getElementWidth, '50px', '8px', '4px'); // 74
  logOutput(getElementWidth, '60px', '12px', '8.5px'); // 101
  logOutput(getElementWidth, '200px', '0px', '0px'); // 200
};

testTask3();
