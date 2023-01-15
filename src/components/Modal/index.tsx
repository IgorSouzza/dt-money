import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

type ModalProps = {
  trigger: ReactNode
  children: ReactNode
}

export function Modal({ trigger, children }: ModalProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        {children}
      </Dialog.Root>
    </>
  )
}
