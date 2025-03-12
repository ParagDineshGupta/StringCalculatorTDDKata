import { useState } from 'react';
import './App.css';
import { StringCalculator } from './StringCalculator';



function App() {
  const [result, setResult] = useState(null)

  return (
    <>
      <input type="text" placeholder="Enter numbers to calculate" maxLength={10} />
      <button onClick={() => {
        const calculator = new StringCalculator()
        const result = calculator.add(document.querySelector('input')?.value)
        setResult(result)
      }}>Calculate</button>
      {!!result && <p>Result: {result}</p>}
    </>
  )
}

export default App
