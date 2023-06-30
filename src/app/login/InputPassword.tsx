'use client'
import { useState } from 'react'
import { Eye, EyeOff } from '@/components/icons'

export const InputPassword = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const handleChangeTypePass = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        className="p-2 rounded-lg border w-full"
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
            size={22}
            color={'gray'}
            styles={'absolute top-1/2 right-3 -translate-y-1/2'}
          />
        ) : (
          <EyeOff
            size={22}
            color={'gray'}
            styles={'absolute top-1/2 right-3 -translate-y-1/2'}
          />
        )}
      </button>
    </div>
  )
}
