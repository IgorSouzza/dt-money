import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as zod from 'zod'

import * as S from './styles'
import { TransactionsContext } from '../../contexts/TransactionContext'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    createTransaction({ description, price, category, type })
    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <S.TransactionType
                onValueChange={field.onChange}
                value={field.value}
              >
                <S.TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </S.TransactionTypeButton>
                <S.TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </S.TransactionTypeButton>
              </S.TransactionType>
            )}
          />
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
