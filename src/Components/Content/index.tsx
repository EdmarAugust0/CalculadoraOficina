import Calculator from '../Calculator'
import Footer from '../Footer'
import Header from '../Header'
import { ContainerGlobal, MainContent } from './styles'

const Content = () => {
  return (
    <ContainerGlobal>
      <MainContent>
        <Header />
        <Calculator />
        <Footer />
      </MainContent>
    </ContainerGlobal>
  )
}

export default Content
