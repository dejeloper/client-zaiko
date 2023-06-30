import { type FC } from 'react'
import * as Icons from '@/components/icons'

interface Props {
  icon: string
  styles?: string
  color?: string
}

export const SelectIcons: FC<Props> = ({ icon, styles, color }) => {
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

  return <IconComponent styles={styles} color={color} />
}
