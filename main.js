const screenElement = document.getElementById("screen")

let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

function init(){
  const buttons = document.querySelector(".buttons");
  buttons.addEventListener("click", (e) => {
    const value = e.target.textContent;
    buttonClick(value);
  })
};
init();

function buttonClick(value){
  if (isNaN(value)){
    handleSymbols(value);
  } else {
    handleNumbers(value);
  }
  screenElement.textContent = buffer;
}

function handleNumbers(numberString){
  if (buffer === "0"){
    buffer = numberString;
  } else {
    buffer += numberString;
  }
  console.log("buffer :", buffer);
}

function handleSymbols(symbol){
  switch (symbol){
    case "AC":
      buffer = "0";
      runningTotal = 0;
      break;
    case "↼":
      if (buffer.length === 1){
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+/-":
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
    case "=":
      if (previousOperator === null){
        return;
      }
      operate(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      //runningTotal = 0;
      break;
  }
}; 

function handleMath(symbol){
  
  if (buffer === "0"){
    return;
  };
  console.log("symbol", symbol);

  const bufferInt = parseInt(buffer);

  if (runningTotal === 0){
    runningTotal = bufferInt;
  } else {
    operate(bufferInt);
  }
  
  previousOperator = symbol;
  console.log("HandleMath runningTotal:", runningTotal)
  

  buffer = "0";
};



function operate(bufferInt) {
  switch (previousOperator){
    case "+":
      runningTotal += bufferInt;
      break;
    case "-":
      runningTotal -= bufferInt;
      break;
    case "×":
      runningTotal *= bufferInt;
      break;
    case "÷":
      runningTotal /= bufferInt;
      break;
  }
  console.log("Operate runningTotal:", runningTotal)
}







































//TO BE DISCARDED!!!!!!!!!!!!!

// const numberElements = document.querySelectorAll(".numbers");
// const operatorElements = document.querySelectorAll(".operator");
// const equalsButton = document.getElementById("equals");

// numberElements.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     const value = e.target.textContent;
//     updateDisplay(value);
//     console.log(`runningTotal = ${runningTotal}`);
//     console.log(`displayValue = ${displayValue}`);

//   })
// })
// let runningTotal = 0;
// let chosenOperator = "";
// let operatorValue = "";
// let buffer = "";


// operatorElements.forEach((operator) => {
//   operator.addEventListener("click", (e) => {
//     buffer = displayValue;
//     //screenElement.textContent = "";
//     //updateDisplay("");
//     const value = e.target.textContent;
//     if (value === "+"){
//       chosenOperator = "add";
//     } else if (value === "-"){
//       chosenOperator = "subtract";
//     } else if (value === "×"){
//       chosenOperator = "multiply";
//     } else if (value === "÷"){
//       chosenOperator = "divide";
//     }
//     displayValue = "";

//     if (chosenOperator.length > 2){
//       console.log("there was an operator before")
//       const clickEvent = new Event("click");
//       equalsButton.dispatchEvent(clickEvent);
//       //displayValue = "";
//       console.log(chosenOperator);
//     };
//     console.log(buffer);
//     console.log(displayValue);
//     runningTotal += parseInt(displayValue);
//     console.log(`runningTotal = ${runningTotal}`);
    
//     updateDisplay(value);
    
//     if (value === "+"){
//       chosenOperator = "add";
//     } else if (value === "-"){
//       chosenOperator = "subtract";
//     } else if (value === "×"){
//       chosenOperator = "multiply";
//     } else if (value === "÷"){
//       chosenOperator = "divide";
//     }
    
//     console.log(chosenOperator);
//   })
// })



// function reset(){

// } 



// equalsButton.addEventListener("click", (e) => {
//   let answer = operate(displayValue);
//   screenElement.textContent = Math.round(answer * 100) / 100;
//   chosenOperator = "";
//   runningTotal = answer;
//   console.log(`runningTotal = ${runningTotal}`);
//   console.log(answer);
// })


// //let answer = 0;

// //add function
// function add(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// function subtract(num1, num2) {
//   let result = num1 - num2;
//   return result;
// }
// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }
// function divide(num1, num2) {
//   let result = num1 / num2;
//   return result;
// }
// //console.log(addnum(20,4))


// function operate(num2) {
//   let answer = 0;
//   switch (chosenOperator){
//     case "add":
//       answer = add(runningTotal, parseInt(num2));
//       break;
//     case "subtract":
//       answer = subtract(runningTotal, parseInt(num2));
//       break;
//     case "multiply":
//       answer = multiply(runningTotal, parseInt(num2));
//       break;
//     case "divide":
//       answer = divide(runningTotal, parseInt(num2));
//       break;
//   }
//   return answer;
  
// }

// //console.log(operate(multiply, 20, 4));


// let displayValue = "0";


// function updateDisplay(value) {
//  if (displayValue.length >= 8){
//     return
//   } else if (displayValue === "0"){
//     screenElement.textContent = value;
//     displayValue = value;
//   } else {
//     screenElement.textContent += value;
//     displayValue += value; //parseInt(value);
//     //console.log(`dis val: ${displayValue}`)
//   }
// }


