import { useState } from 'react';
import './App.css';
import { StringCalculator } from './StringCalculator';



function App() {
  const [result, setResult] = useState(NaN)
  console.log(result);
  return (
    <>
      {/* <input type="text" placeholder="Enter numbers to calculate" maxLength={10} /> */}
      <textarea id="multiliner" name="multiliner">3</textarea>
      <br />
      <button onClick={() => {
        const calculator = new StringCalculator()
        const result = calculator.add(document.querySelector('textarea')?.value)
        setResult(result)
      }}>Calculate</button>
      {!!result && <p>Result: {result}</p>}
    </>
  )
}

export default App
