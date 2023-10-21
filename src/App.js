
import './App.scss';
import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result,setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalc = (value) =>{
      if( 
        (ops.includes(value) && calc === '') ||
        (ops.includes(value) && ops.includes(calc.slice(-1)))
      ){
        return;
      }
      setCalc(calc+value);

      if (!ops.includes(value)){
        setResult(eval(calc + value).toString());
      }
  }

  const onequals = () => {
    setCalc(eval(calc).toString());
  }

  const digitsbuttons = () => {
    const digits = [];

    for(let i=1;i < 10;i++){
      digits.push(
        <button key={i} id={i} onClick={() => updateCalc(i.toString())}>{i}</button>
      );
    }
    
    return digits
  }

  const clear = () => {
    setCalc('');
    setResult('');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ''}&nbsp;
          {calc}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={clear}>AC</button>
        </div>
        <div className="digits">
          { digitsbuttons()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={onequals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
