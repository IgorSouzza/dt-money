import * as S from './styles'

import logoImg from '../../assets/logo.svg'

import { Container } from '../Container'
import { Modal } from '../Modal'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <img src={logoImg} alt="" />
          <Modal
            trigger={
              <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
            }
          >
            <NewTransactionModal />
          </Modal>
        </S.HeaderContent>
      </Container>
    </S.HeaderContainer>
  )
}
