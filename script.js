function calculate(op) {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result = 0;

  if (op === 'add') result = num1 + num2;
  else if (op === 'sub') result = num1 - num2;
  else if (op === 'mul') result = num1 * num2;
  else if (op === 'div') result = num1 / num2;

  document.getElementById('calcResult').innerText = "Result: " + result;}

function checkBMI() {
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);
  let bmi = weight / (height * height);
  document.getElementById('bmiResult').innerText = "BMI: " + bmi.toFixed(2);}

function calculateTax() {
  let income = parseFloat(document.getElementById('income').value);
  let tax = 0;

  if (income <= 5000) tax = 0;
  else if (income <= 20000) tax = (income - 5000) * 0.01;
  else if (income <= 35000) tax = 150 + (income - 2000) * 0.03;
  else tax = 600 + (income - 35000) * 0.08;

  document.getElementById('taxResult').innerText = "Tax: RM " + tax.toFixed(2);}

function convert(type) {
  let val = parseFloat(document.getElementById('distance').value);
  let result = 0;

  if (type === 'cmToM') result = val / 100;
  else if (type === 'mToCM') result = val * 100;
  else if (type === 'mToKM') result = val / 1000;
  else if (type === 'kmToM') result = val * 1000;

  document.getElementById('convResult').innerText = "Converted: " + result;}
