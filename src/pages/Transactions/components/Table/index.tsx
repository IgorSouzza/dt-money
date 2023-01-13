import * as S from './styles'

import { Container } from '../../../../components/Container'

export function TransactionsTable() {
  return (
    <Container>
      <S.TransactionsTableContainer>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <S.PriceHighlight variant="income">R$ 12.000,00</S.PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="50%">Hamburguer</td>
            <td>
              <S.PriceHighlight variant="outcome">- R$ 59,00</S.PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </S.TransactionsTableContainer>
    </Container>
  )
}
