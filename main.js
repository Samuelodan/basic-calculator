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
  
}

function handleNumbers(numberString){
  if (buffer === "0"){
    buffer = numberString;
  } else {
    buffer += numberString;
  }
  screenElement.textContent = buffer;
  console.log("buffer :", buffer);
}

function handleSymbols(symbol){
  switch (symbol){
    case "AC":
      buffer = "0";
      runningTotal = 0;
      screenElement.textContent = buffer;
      break;
    case "↼":
      if (buffer.length === 1){
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      screenElement.textContent = buffer;
      break;
    case "+/-":
      break;
    case ".":
      if (buffer.includes(".")){
        return;
      };
      buffer += ".";
      screenElement.textContent = buffer;
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      if (runningTotal === 0 && buffer === "0"){
        buffer = `${screenElement.textContent}`;
        runningTotal = parseFloat(buffer);
      }
      handleMath(symbol);
      break;
    case "=":
      if (previousOperator === null){
        return;
      }
      if (buffer === "0"){
        return;
      }
      operate(parseFloat(buffer));
      previousOperator = null;
      buffer = runningTotal;
      screenElement.textContent = buffer;
      buffer = "0";
      runningTotal = 0;
      break;
  }
}; 

function handleMath(symbol){
  
  if (buffer === "0"){
    return;
  };
  console.log("symbol", symbol);

  const bufferInt = parseFloat(buffer);

  if (runningTotal === 0){
    runningTotal = bufferInt;
  } else {
    operate(bufferInt);
  }
  
  previousOperator = symbol;
  console.log("HandleMath runningTotal:", runningTotal)
  
  screenElement.textContent = runningTotal;
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


