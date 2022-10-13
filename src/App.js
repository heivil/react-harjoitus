import './App.css';
import {useState} from "react";
import CalcButton from './CalcButton';

let buttons = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","="] 
function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState(0)
  let currentOperator = "", previousOperator = "", previousNumber = 0

  const buttonPressed=(x)=>{
    if (x === "=") {
      setText(result)
    } else if(x === "+" || x === "-" || x === "*" || x === "/"){
      if(currentOperator !== "") previousOperator = currentOperator

      currentOperator = x
    } else {
      const numX = Number(x)
      previousNumber = numX
      calculate(numX)
    }
    setText(text+x)
  }

  const calculate = (number) =>{
    switch(currentOperator){
      case "+":
        if(previousOperator === "+" || previousOperator === "-"){
          setResult(result + number)
        }else {
          
        }
        return
      case "-":
        setResult(result - number)
        return
      case "*":
        setResult(result * number)
        return
      case "/":
        setResult(result / number)
        return
    }
  }

  return (
      <div className='Grid-container'>
        <div className='Calc-screen'>
          <p>{text}</p>
          <p>{result}</p>
        </div>
          {buttons.map((btn,index)=><CalcButton key={index} buttonPressed={buttonPressed} btn={btn}/>)}
      </div>
  );
}

export default App;