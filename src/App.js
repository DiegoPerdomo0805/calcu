import React, {useState } from 'react';
import './App.css';

const App = () => {
  //Valores de las operaciones
  const [R, setR] = useState('');

  const Clear = () => {
    setR('');
  }

  const Del = () => {
    setR(R.slice(0,R.length-1));
  }

  const Click = (e) => {
    if (R == 'ERROR' || R == 'ERROR***')
    {
      Clear();
      setR(R.concat(e.target.name));
    }
    else
    {
      setR(R.concat(e.target.name));
    }
  }

  const Equal = () => {

    let Screen = eval(R)
    let size = Screen.toString().length

    if(Screen > 999999999 || Screen<0){//Limitaciones para el laboratorio
      if (Screen > 0){
        Screen = 'ERROR'
      }
      else{
        Screen = 'ERROR***'
      }
    } else{
      if(size > 9){
        while (size > 9){
          Screen = Screen.toString().slice(0, -1)
          size--
        }
      } 
    }
    Screen = Screen.toString();
    setR(Screen);
  }

  const Negative = () => {
    let Screen = eval(R + '* -1');
    Screen = Screen + '';
    setR(Screen);
  }

  return (
    <div className='calcu'>
      <form>
        <input type='text' value={R} />
      </form>
      <div className='teclado'>
        <button className='clear' onClick={Clear}>AC</button>
        <button className='Del' onClick={Del}>C</button>


        <button className='operation' name='/' onClick={Click}>/</button>
        
        <button className='num' name='7' onClick={Click}>7</button>
        <button className='num' name='8' onClick={Click}>8</button>
        <button className='num' name='9' onClick={Click}>9</button>
        
        <button className='operation' name='*' onClick={Click}>*</button>
        
        <button className='num' name='4' onClick={Click}>4</button>
        <button className='num' name='5' onClick={Click}>5</button>
        <button className='num' name='6' onClick={Click}>6</button>
        
        <button className='operation' name='-' onClick={Click}>-</button>
        
        <button className='num' name='1' onClick={Click}>1</button>
        <button className='num' name='2' onClick={Click}>2</button>
        <button className='num' name='3' onClick={Click}>3</button>
        
        <button className='operation' name='+' onClick={Click}>+</button>
        
        <button className='num' name='0' onClick={Click}>0</button>
        <button className='Point' name='.' onClick={Click}>.</button>
        
        <button className='operation' name='%' onClick={Click}>%</button>
        
        <button className='equal' onClick={Equal}>=</button>
        <button className='Negative' name='+/-'  onClick={Negative}>+/-</button>

      </div>
    </div>
  );
}

export default App;
