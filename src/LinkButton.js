import './App.css';

function LinkButton(props) {
  return (
      <button className = 'buttonClass' onClick={()=>props.clicked()}>luovutan</button>
  );
}

export default LinkButton;