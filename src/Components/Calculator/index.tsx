import { useState } from 'react'
import * as S from './styles'

const Calculator = () => {
  const [inputs, setInputs] = useState<string[]>(['', '', '', '', ''])
  const [results, setResults] = useState<number[]>([0, 0, 0, 0, 0])

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

  const clear = () => {
    setInputs(['', '', '', '', ''])
    setResults([0, 0, 0, 0, 0])
  }

  return (
    <S.CalculatorContainer>
      <S.InputsContainer>
        {inputs.map((input, index) => (
          <S.InputGroup key={index}>
            <S.StyleInput
              type="number"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Digite um número"
              step="0.01"
            />
            <S.Result>Resultado: {results[index]}</S.Result>
          </S.InputGroup>
        ))}
      </S.InputsContainer>
      <S.ContainerButtons>
        <S.StyledButton onClick={calculatePercentage}>Calcular</S.StyledButton>
        <S.StyledButton onClick={clear}>Limpar</S.StyledButton>
      </S.ContainerButtons>
    </S.CalculatorContainer>
  )
}

export default Calculator
