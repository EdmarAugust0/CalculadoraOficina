import styled from 'styled-components'

export const ContainerGlobal = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const MainContent = styled.main`
  flex-grow: 1; /* O Calculator vai ocupar o espaço restante */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ajusta o conteúdo dentro do Calculator */
`
