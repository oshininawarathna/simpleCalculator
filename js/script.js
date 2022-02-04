addition = () => {
  let firstValue = document.getElementById("first").value;
  let secondValue = document.getElementById("second").value;
  let x = parseInt(firstValue);
  let y = parseInt(secondValue);
  let add = x + y;
  document.getElementById("myH1").innerHTML = add;
};
substraction = () => {
  let firstValue = document.getElementById("first").value;
  let secondValue = document.getElementById("second").value;
  let x = parseInt(firstValue);
  let y = parseInt(secondValue);
  let substraction = x - y;
  document.getElementById("myH1").innerHTML = substraction;
};
multiplication = () => {
  let firstValue = document.getElementById("first").value;
  let secondValue = document.getElementById("second").value;
  let x = parseInt(firstValue);
  let y = parseInt(secondValue);
  let multiplication = x * y;
  document.getElementById("myH1").innerHTML = multiplication;
};
division = () => {
  let firstValue = document.getElementById("first").value;
  let secondValue = document.getElementById("second").value;
  let x = parseInt(firstValue);
  let y = parseInt(secondValue);
  let division = x / y;
  document.getElementById("myH1").innerHTML = division;
};
