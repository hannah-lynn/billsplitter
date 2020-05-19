function empty() {
  let billAmt = document.getElementById('amount').value;
  let people = document.getElementById('people').value;
  if (billAmt === '') {
    alert('Enter bill amount');
  } else if (people === '') {
    alert('Enter number of people');
  }
}

function checkEmpty() {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', empty);
}
checkEmpty();

function calculate() {
  let percent = document.getElementById('serviceSelect').value;
  let billAmt = document.getElementById('amount').value;
  let people = document.getElementById('people').value;
  let total = (Number(billAmt) * Number(percent)) / people;
  let round = Math.round((total + Number.EPSILON) * 100) / 100;
  total = total.toFixed(2);
  let amt = document.getElementById('amt');
  amt.innerText = round;
}

document.getElementById('rst-btn').onclick = function () {
  document.getElementById('people').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('amt').innerText = '0.00';
};
