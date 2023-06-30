'use client'
import { type FC, useState } from 'react'
import { Eye, EyeOff } from '@/components/icons'
import { Input } from '@/components/Base'

interface Props {
  color?: string
}

export const InputPassword: FC<Props> = ({ color }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const handleChangeTypePass = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="relative">
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        className="w-full"
        id="password"
        name="password"
        placeholder="Contraseña"
      />
      <button
        onClick={handleChangeTypePass}
        title={isPasswordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      >
        {isPasswordVisible ? (
          <Eye
            styles={'absolute top-1/2 right-3 -translate-y-1/2'}
            color={color}
          />
        ) : (
          <EyeOff
            styles={'absolute top-1/2 right-3 -translate-y-1/2'}
            color={color}
          />
        )}
      </button>
    </div>
  )
}
