import { useState } from 'react';
import "./App.css"

function App() {

  const [firstVariable, setFirstVariable] = useState('0')
  const [operator, setOperator] = useState(null)
  const [secondVariable, setSecondVariable] = useState('0')
  const [result, setResult] = useState(0)
  const [recall, setRecall] = useState('0')

  function handleFirstVariableChange(event) {
    if (event.target.value === '') {
      setFirstVariable('0')
    } else if (firstVariable === '0') {
      setFirstVariable(event.target.value)
    } else {
      setFirstVariable(firstVariable.concat(event.target.value))
    }
  }

  function handleOperatorChange(event) {
    setOperator(event.target.value)
  }

  function handleSecondVariableChange(event) {
    if (event.target.value === '') {
      setSecondVariable('0')
    } else if (secondVariable === '0') {
      setSecondVariable(event.target.value)
    } else {
      setSecondVariable(secondVariable.concat(event.target.value))
    }
  }

  function handleCalculation() {
    let first = Number(firstVariable)
    let second = Number(secondVariable)
    let result = 0
    switch (operator) {
      case "+":
        result = first + second
        break
      case "-":
        result = first - second
        break
      case "*":
        result = first * second
        break
      case "/":
        result = first / second
        break
    }
    setResult(result)
  }

  function handleStore(event) {
    setRecall(event.target.value)
  }

  function handleRecallFirstVariable() {
    setFirstVariable(recall)
  }
  function handleRecallSecondVariable() {
    setSecondVariable(recall)
  }

  function handleFirstVariablePeriod() {
    if (!firstVariable.includes(".")) {
      setFirstVariable(firstVariable.concat("."))
    }
  }
  function handleSecondVariablePeriod() {
    if (!secondVariable.includes(".")) {
      setSecondVariable(secondVariable.concat("."))
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstVariable}</p>
        <div className="numbers">
          <button value={1} onClick={handleFirstVariableChange}>1</button>
          <button value={2} onClick={handleFirstVariableChange}>2</button>
          <button value={3} onClick={handleFirstVariableChange}>3</button>
          <button value={4} onClick={handleFirstVariableChange}>4</button>
          <button value={5} onClick={handleFirstVariableChange}>5</button>
          <button value={6} onClick={handleFirstVariableChange}>6</button>
          <button value={7} onClick={handleFirstVariableChange}>7</button>
          <button value={8} onClick={handleFirstVariableChange}>8</button>
          <button value={9} onClick={handleFirstVariableChange}>9</button>
          <button value={0} onClick={handleFirstVariableChange}>0</button>
          <button onClick={handleFirstVariableChange}>Clear</button>
          <button onClick={handleRecallFirstVariable}>Recall</button>
          <button value={"."} onClick={handleFirstVariablePeriod}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button value={'+'} onClick={handleOperatorChange}>+</button>
          <button value={'-'} onClick={handleOperatorChange}>-</button>
          <button value={'*'} onClick={handleOperatorChange}>*</button>
          <button value={'/'} onClick={handleOperatorChange}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondVariable}</p>
        <div className="numbers">
          <button value={1} onClick={handleSecondVariableChange}>1</button>
          <button value={2} onClick={handleSecondVariableChange}>2</button>
          <button value={3} onClick={handleSecondVariableChange}>3</button>
          <button value={4} onClick={handleSecondVariableChange}>4</button>
          <button value={5} onClick={handleSecondVariableChange}>5</button>
          <button value={6} onClick={handleSecondVariableChange}>6</button>
          <button value={7} onClick={handleSecondVariableChange}>7</button>
          <button value={8} onClick={handleSecondVariableChange}>8</button>
          <button value={9} onClick={handleSecondVariableChange}>9</button>
          <button value={0} onClick={handleSecondVariableChange}>0</button>
          <button value={null} onClick={handleSecondVariableChange}>Clear</button>
          <button onClick={handleRecallSecondVariable}>Recall</button>
          <button value={"."} onClick={handleSecondVariablePeriod}>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleCalculation}>=</button>
          <button value={result} onClick={handleStore}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
