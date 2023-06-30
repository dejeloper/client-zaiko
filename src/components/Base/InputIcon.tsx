'use client'
import { type FC } from 'react'
import * as Icons from '@/components/icons'
import { Input } from '.'

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

  let IconComponent = null

  switch (icon) {
    case 'eye':
      IconComponent = Icons.Eye
      break
    case 'eye-off':
      IconComponent = Icons.EyeOff
      break
    case 'search':
      IconComponent = Icons.Search
      break
    case 'user':
      IconComponent = Icons.User
      break
    case 'star':
      IconComponent = Icons.Star
      break
    default:
      IconComponent = Icons.Star
      break
  }

  return (
    <label className="relative block">
      <span className="sr-only">{nameInput}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <IconComponent styles={`h-5 w-5`} color={color} />
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
