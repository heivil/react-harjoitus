import './App.css';
import {useState} from "react";
import CalcButton from './CalcButton';
import CalcScreen from './CalcScreen';

let buttons = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","="] 
let currentOperator = "", previousNumber = "", previousButton = "";
function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState(0)
  

  const buttonPressed=(x)=>{
    if (x === "=") {
        setText(result)
        currentOperator = ""
        previousNumber = text
    } else if(x === "+" || x === "-" || x === "*" || x === "/"){
      //tarkista oliko edellinen merkki/nappi operaattori
      if(previousButton !== "+" && previousButton !== "-" && previousButton !== "*" && previousButton !== "/" && previousButton !== "="){
          currentOperator = x
          setText(text+x)
          previousNumber = ""
        }
    } else {
      //jos edellinen nappi oli operaattori voi uuden numeron laskea tulokseen
      if(previousButton === "+" || previousButton === "-" || previousButton === "*" || previousButton === "/"){
        let numX = Number(x)
        calculate(numX)
        previousNumber = x
        setText(text+x)
      }else {
        //jos edellinen nappi oli luku, yhdistetään uusi luku edelliseen
        if(previousNumber !== undefined){
          let newNum = previousNumber + x
          setText(text+x)
          let numX = Number(newNum)
          console.log(typeof numX + " s" + previousNumber)
          calculate(numX)
          previousNumber = newNum
        }else {
          previousNumber = x
          setText(text+x)
          calculate(Number(x))
        }
      }
    }
    previousButton = x 
  }

  const calculate = (number) =>{
    let temp = 0;
    switch(currentOperator){
      case "+":
        setResult(result + number)
        return
      case "-":
        setResult(result - number)
        return
      case "*":
        temp = previousNumber * number
        setResult(result - previousNumber)
        setResult(result + temp)
        return
      case "/":
        temp = previousNumber / number
        setResult(result - previousNumber)
        setResult(result + temp)
        return
      default:{
        setResult(number)
        return
      }
    }
  }

  return (
      <div className='Grid-container'>
          <CalcScreen text={text} result={result}/>
          {buttons.map((btn,index)=><CalcButton key={index} buttonPressed={buttonPressed} btn={btn}/>)}
      </div>
  );
}

export default App;