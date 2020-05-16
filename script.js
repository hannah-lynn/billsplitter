let btn = document.getElementById('btn');

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

// function empty() {
//   if (people === '') {
//     alert('Enter number of people');
//   } else if (billAmt === '') {
//     alert('Enter bill amount');
//   }
// }

// btn.addEventListener('click', empty);
