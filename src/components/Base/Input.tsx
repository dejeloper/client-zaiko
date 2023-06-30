import { type FC } from 'react'

interface Props {
  type: string
  id: string
  name: string
  placeholder: string
  className: string
}

export const Input: FC<Props> = ({
  type = 'text',
  id,
  name,
  placeholder,
  className = '',
}) => {
  const styleDefault =
    'placeholder:italic placeholder:text-slate-400 bg-white w-full border border-slate-400 rounded-md p-2 focus:outline-none focus:border-principal focus:ring-sky-500 focus:ring-1 sm:text-sm'

  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`${className} ${styleDefault} `}
    />
  )
}
