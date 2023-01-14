import * as S from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from './components/Table'
import { SearchForm } from './components/SearchForm'
import { Container } from '../../components/Container'

export function Transactions() {
  return (
    <div>
      <Header />
      <Container>
        <Summary />
        <S.TransactionsTableContainer>
          <SearchForm />
          <TransactionsTable />
        </S.TransactionsTableContainer>
      </Container>
    </div>
  )
}
