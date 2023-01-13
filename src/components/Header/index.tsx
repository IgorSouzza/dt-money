import * as S from './styles'

import logoImg from '../../assets/logo.svg'

import { Container } from '../Container'

export function Header() {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <img src={logoImg} alt="" />
          <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  )
}
