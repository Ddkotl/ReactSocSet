'use client'

import { Button } from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { AtSign, KeyRound } from 'lucide-react'

interface IAuth {
	type?: 'Login' | 'Register'
}

export function Auth({ type }: IAuth) {
	return (
		<div className='flex w-screen h-full'>
			<form className='m-auto  max-w-xs w-96 border border-border rounded-md p-layout flex flex-col gap-8 '>
				<h1 className='text-center mb-5'>
					{type === 'Login' ? 'Войти' : 'Зарегистрироваться'}
				</h1>
				<Field placeholder='email:' type='email' Icon={AtSign} />
				<Field
					placeholder='Пароль:'
					type='password'
					Icon={KeyRound}
					error={{ message: 'error password 2901384025285', type: 'min' }}
				/>

				<Button isLoading={false}>
					{type === 'Login' ? 'Войти' : 'Зарегистрироваться'}
				</Button>
			</form>
		</div>
	)
}
