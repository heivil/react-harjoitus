import './App.css';
import {useState} from "react";
import CalcButton from './CalcButton';
import CalcScreen from './CalcScreen';
import Kaboom from './Kaboom';
import LinkToRealCalc from './LinkToRealCalc';
import LinkButton from './LinkButton';

let buttons = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","=", "C"] 
let currentOperator = "", previousNumber = "", previousButton = "";
function App() {
  const [text, setText] = useState("")
  const [result, setResult] = useState(0)
  const [kaboomcounter, setKaboomCounter] = useState(0)
  const [showLink, setShowLink] = useState(false)

  const buttonPressed=(x)=>{
    if (x === "=") {
        setText(result)
        currentOperator = ""
        previousNumber = text
    } else if(x === "+" || x === "-" || x === "*" || x === "/"){
      //tarkista oliko edellinen merkki/nappi operaattori
      if(previousButton !== "+" && previousButton !== "-" && previousButton !== "*" && previousButton !== "/"){
          currentOperator = x
          setText(text+x)
        }
    } else if(x === "C"){
        setResult(0)
        setText("")
    }else {
      //jos edellinen nappi oli operaattori voi uuden numeron laskea tulokseen
      if(previousButton === "+" || previousButton === "-" || previousButton === "*" || previousButton === "/"){
        let numX = Number(x)
        calculate(numX)
        previousNumber = x
        setText(text+x)
      }else { //jos edellinen nappi oli luku, yhdistetään uusi luku edelliseen
        if(previousNumber !== undefined && previousButton !== "="){
          let newNum = previousNumber + x
          setText(text+x)
          let numX = Number(newNum)
          console.log(Number(previousButton))
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
        break
      case "-":
        setResult(result - number)
        break
      case "*":
        if(kaboomcounter === 0){
          temp = Number(previousNumber) * number
          setResult("Error - olen huono laskin" + "Tulos: "+ temp)
          setKaboomCounter(kaboomcounter + 1)
          }else {
            temp = Number(previousNumber) * number
            setResult("Warning - Räjähdysvaara!" + "Tulos: "+ temp)
            setKaboomCounter(kaboomcounter + 1)
          }
          break
      case "/":
        if(kaboomcounter === 0){
        temp = Number(previousNumber) / number
        setResult("Error - olen huono laskin. Tulos: "+ temp)
        setKaboomCounter(kaboomcounter + 1)
        }else {
          temp = Number(previousNumber) / number
          setResult("Warning - Räjähdysvaara! Tulos: "+ temp)
          setKaboomCounter(kaboomcounter + 1)
        }
        break
      default:{
        setResult(number)
        break
      }
    }
  }

  const MakeCalcLink = () => {
    setShowLink(true)
  }

  if(kaboomcounter < 3){
    return (
      <div className = 'Body'>
        <div className='Grid-container'>
          <CalcScreen text={text} result={result}/>
          {buttons.map((btn,index)=><CalcButton key={index} buttonPressed={buttonPressed} btn={btn}/>)}
        </div>
        {showLink ? (<LinkToRealCalc/>) : (<LinkButton clicked={MakeCalcLink}/>)}
      </div>
    );
  }else {
    return (
      <div className='BoomDiv'>
        <Kaboom clicked= {MakeCalcLink}/>
        {showLink ? (<LinkToRealCalc/>) : (<p>kuolit :(</p>)}
      </div>
    )
  }
}

export default App;