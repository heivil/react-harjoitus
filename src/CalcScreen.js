import './App.css';
function CalcScreen(props) {
  return (
    <div className='Calc-screen'>
      <p>{props.text}</p>
      <p>{props.result}</p>
    </div>
  );
}
export default CalcScreen;