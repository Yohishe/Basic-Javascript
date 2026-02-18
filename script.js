function getCounter() {
  return parseInt(document.getElementById("counter").textContent, 10);
}

function setCounter(value) {
  document.getElementById("counter").textContent = value;
}

function tickUp() {
  setCounter(getCounter() + 1);
}

function tickDown() {
  setCounter(getCounter() - 1);
}

function runForLoop() {
  const count = getCounter();
  let output = [];

  for (let i = 0; i <= count; i++) {
    output.push(i);
  }

  document.getElementById("forLoopResult").textContent = output.join(", ");
}

function showOddNumbers() {
  const count = getCounter();
  let output = [];

  for (let i = 1; i <= count; i++) {
    if (i % 2 !== 0) output.push(i);
  }

  document.getElementById("oddNumberResult").textContent = output.join(", ");
}

function addMultiplesToArray() {
  const count = getCounter();
  let arr = [];

  for (let i = count; i >= 5; i--) {
    if (i % 5 === 0) arr.push(i);
  }

  console.log(arr);
}

function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

function loadCar(carNumber) {
  let carToLoad;

  if (carNumber === 1) carToLoad = window.carObject1;   
  else if (carNumber === 2) carToLoad = window.carObject2;
  else if (carNumber === 3) carToLoad = window.carObject3;
  else return;

  document.getElementById("carType").value = carToLoad.cType;
  document.getElementById("carMPG").value = carToLoad.cMPG;
  document.getElementById("carColor").value = carToLoad.cColor;
}

function changeColor(choice) {
  const p = document.getElementById("styleParagraph");

  if (choice === 1) p.style.color = "red";
  else if (choice === 2) p.style.color = "green";
  else if (choice === 3) p.style.color = "blue";
}
