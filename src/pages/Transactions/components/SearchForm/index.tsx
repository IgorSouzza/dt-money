import { MagnifyingGlass, Spinner } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
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
