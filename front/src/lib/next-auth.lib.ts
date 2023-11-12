import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const options = {
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'grafbase',
				},
				password: { label: 'Password', type: 'password' },
			},
		}),
	],
	database: process.env.NEXT_PUBLIC_DATABASE_URL,
	session: {
		jwt: true,
	},
	callbacks: {
		session: async (session, user) => {
			session.jwt = user.jwt
			session.id = user.id
			return Promise.resolve(session)
		},
		jwt: async (token, user, account) => {
			const isSignIn = user ? true : false
			if (isSignIn) {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
				)
				const data = await response.json()
				token.jwt = data.jwt
				token.id = data.user.id
			}
			return Promise.resolve(token)
		},
	},
}

const Auth = (req, res) => NextAuth(req, res, options)

export default Auth
