import { useState } from 'react'
import {
  CalculatorContainer,
  InputGroup,
  InputsContainer,
  Result,
  StyledButton,
  StyleInput
} from './styles'

const Calculator = () => {
  const [inputs, setInputs] = useState<string[]>(['', '', '', ''])
  const [results, setResults] = useState<number[]>([0, 0, 0, 0])

  const handleInputChange = (index: number, value: string) => {
    const updateInputs = [...inputs]
    updateInputs[index] = value
    setInputs(updateInputs)
  }

  const calculatePercentage = () => {
    const updateResults = inputs.map((input) => {
      const num = parseFloat(input)
      return isNaN(num) ? 0 : +(num + num * 0.3).toFixed(2)
    })
    setResults(updateResults)
  }

  return (
    <CalculatorContainer>
      <InputsContainer>
        {inputs.map((input, index) => (
          <InputGroup key={index}>
            <StyleInput
              type="number"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Digite um número"
              step="0.01"
            />
            <Result>Resultado: {results[index]}</Result>
          </InputGroup>
        ))}
      </InputsContainer>
      <StyledButton onClick={calculatePercentage}>Calcular</StyledButton>
    </CalculatorContainer>
  )
}

export default Calculator
