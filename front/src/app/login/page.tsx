import type { Metadata } from 'next'

import { Auth } from '@/components/screens/auth/Auth'
import { NO_INDEX_PAGE } from '@/constansts/seo.constants'

export const metadata: Metadata = {
	title: 'Вход',
	...NO_INDEX_PAGE,
}

export default function LoginPage() {
	return <Auth type='Login' />
}
