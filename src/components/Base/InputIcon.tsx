'use client'
import { type FC } from 'react'
import { Input } from '@/components/Base'
import { SelectIcons } from '@/components/icons'

interface Props {
  type: string
  id: string
  name: string
  placeholder: string
  color?: string
  className: string
  nameInput: string
  icon: string
}

export const InputIcon: FC<Props> = ({
  type = 'text',
  id,
  name,
  placeholder,
  className = '',
  nameInput,
  color,
  icon = 'star',
}) => {
  const styleDefault = `py-2 pl-9 pr-3`
  const styles = `h-5 w-5`

  const IconComponent = () => SelectIcons({ icon, styles, color })

  return (
    <label className="relative block">
      <span className="sr-only">{nameInput}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <IconComponent />
      </span>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`${styleDefault} ${className}`}
      />
    </label>
  )
}
