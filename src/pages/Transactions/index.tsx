import * as S from './styles'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from './components/Table'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <S.TransactionsTableContainer>
        <TransactionsTable />
      </S.TransactionsTableContainer>
    </div>
  )
}
