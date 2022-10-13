import './App.css';
import boom from './boom.gif'

function Kaboom(props) {
  return (
    <img className='Boom' src={boom} alt="boom" onClick={() => props.clicked()}/>
  );
}

export default Kaboom;