import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass, Spinner } from 'phosphor-react'
import * as zod from 'zod'

import * as S from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        autoComplete="off"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        {!isSubmitting ? <MagnifyingGlass size={20} /> : <Spinner size={20} />}
        Buscar
      </button>
    </S.SearchFormContainer>
  )
}
