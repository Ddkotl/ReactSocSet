import LayoutClient from '@/components/layout/Layout'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Социальная сеть',
	description: 'веб приложение соц сеть',
	icons: '/logo.svg',
}

export const viewport: Viewport = {
	themeColor: '#0E0818',
	colorScheme: 'dark',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<LayoutClient>{children}</LayoutClient>
			</body>
		</html>
	)
}
