import { useState } from 'react';
import './App.css';
import { StringCalculator } from './StringCalculator';

function App() {
  const [result, setResult] = useState<number | string>('')
  // console.log(result);
  return (
    <>
      <textarea id="multiliner" name="multiliner" placeholder="Enter numbers to calculate"></textarea>
      <br />
      <button onClick={() => {
        const calculator = new StringCalculator()
        const result = calculator.add(document.querySelector('textarea')?.value ?? '')
        setResult(result)
      }}>Calculate</button>
      <p>Result: {result}</p>
    </>
  )
}

export default App
