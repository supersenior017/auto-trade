import { Kanit } from '@next/font/google'
import React from 'react'
import styles from '@/styles/Home.module.css'

const kanit = Kanit({ subsets: ['latin'], weight: '700' })

interface TitleTypes {
    title: string;
    size?: string;
}

export default function Title({
    title,
    size
}: TitleTypes) {
    return (
        <div className={`${styles.descTitleGroup}`}>
            <div className={`${kanit.className} ${styles.descTitle} ${size === 'small' ? 'text-5xl sm:text-6xl lg:text-5xl xl:text-6xl' : 'text-6xl sm:text-7xl lg:text-6xl xl:text-7xl'}`}>{title}</div>
            <div className={`${kanit.className} ${styles.descTitle} ${size === 'small' ? 'text-5xl sm:text-6xl lg:text-5xl xl:text-6xl' : 'text-6xl sm:text-7xl lg:text-6xl xl:text-7xl'}`}>{title}</div>
            <div className={`${kanit.className} ${styles.descTitle} ${size === 'small' ? 'text-5xl sm:text-6xl lg:text-5xl xl:text-6xl' : 'text-6xl sm:text-7xl lg:text-6xl xl:text-7xl'}`}>{title}</div>
        </div>
    )
}
