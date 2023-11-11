'use client'
import cn from 'clsx'
import { Sun } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.scss'
import { MENU } from './sidebar.data'

export function Sidebar() {
	const pathName = usePathname()

	return (
		<aside className={styles.sidebar}>
			<Image src='/logo.svg' priority alt='' width={40} height={40} />
			<div>
				{MENU.map(item => (
					<Link
						href={item.url}
						key={item.url}
						className={cn({
							[styles.active]: pathName === item.url,
						})}
					>
						<item.icon size={25} />
					</Link>
				))}
			</div>
			<Sun size={25} />
		</aside>
	)
}
