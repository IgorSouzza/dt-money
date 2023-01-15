import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionContext'

import * as S from './styles'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <S.TransactionsTableContainer>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td width="50%">{transaction.description}</td>
            <td>
              <S.PriceHighlight variant="income">
                {transaction.price}
              </S.PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </S.TransactionsTableContainer>
  )
}
