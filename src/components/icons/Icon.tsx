import { type ReactNode, type FC } from 'react'

interface Props {
  children: ReactNode
  size?: number
  color?: string
  styles?: string
}

export const Icon: FC<Props> = ({
  children,
  size = 22,
  color = 'text-gray-400',
  styles = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={`${styles} ${color} fill-current`}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  )
}
