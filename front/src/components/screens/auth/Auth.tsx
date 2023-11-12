'use client'

import { Button } from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { AtSign, KeyRound } from 'lucide-react'

interface IAuth {
	type?: 'Login' | 'Register'
}

export function Auth({ type }: IAuth) {
	return (
		<div>
			<form>
				<Field placeholder='email:' type='email' Icon={AtSign} />
				<Field placeholder='Пароль:' type='password' Icon={KeyRound} />

				<Button isLoading={true}>
					{type === 'Login' ? 'Войти' : 'Зарегистрироваться'}
				</Button>
			</form>
		</div>
	)
}
