import styled from 'styled-components'
import { colors } from '../../styles'

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${colors.darkGrey};
  padding: 216px 0;
`
export const InputsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyleInput = styled.input`
  padding: 16px;
  width: 200px;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Result = styled.p`
  font-size: 24px;
`
export const StyledButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  font-size: 24px;
  cursor: pointer;
  background-color: ${colors.darkRed};
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.red};
  }
`
