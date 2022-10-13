import './App.css';
function CalcButton(props) {
  const buttonClass = getClass(props.btn);
  return (
      <button className = {buttonClass} onClick={()=>props.buttonPressed(props.btn)}>{props.btn}</button>
  );
}

const getClass = (btn) => {
  if(btn === "+"){
    return "Plus-btn"
  }else if(btn === "-"){
    return "Minus-btn"
  }else if(btn === "*"){
    return "Multi-btn"
  }else if(btn === "/"){
    return "Division-btn"
  }else if(btn === "="){
    return "Equals-btn"
  }else if(btn === "1"){
    return "One"
  }else if(btn === "2"){
    return "Two"
  }else if(btn === "3"){
    return "Three"
  }else if(btn === "4"){
    return "Four"
  }else if(btn === "5"){
    return "Five"
  }else if(btn === "6"){
    return "Six"
  }else if(btn === "7"){
    return "Seven"
  }else if(btn === "8"){
    return "Eight"
  }else if(btn === "9"){
    return "Nine"
  }else if(btn === "0"){
    return "Zero"
  }else {
    return ""
  }
}

export default CalcButton;