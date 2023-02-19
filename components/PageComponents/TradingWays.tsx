import { Kanit } from '@next/font/google'
import React from 'react'
import styles from '@/styles/Home.module.css'
import { UltraExtraButton } from '../ButtonComponents'
import { TradeWays } from '../Constants/ExamplePage'

const kanit = Kanit({ subsets: ['latin'], weight: '700' })

export default function TradingWays() {
    return (
        <>
            <div className='relative max-w-8xl w-full my-40 pt-12'>
                <div className={`${kanit.className} mb-10 text-bold text-4xl md:text-5xl text-center text-purple-600`}>4 Ways to make money with Automated Trader</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 text-slate-300'>
                    {TradeWays.map((example) => (
                        <div className='flex justify-center items-center' key={example.id}>
                            <button className={`relative w-full items-center justify-center p-7 min-h-[270px] min-w-[270px] overflow-hidden text-xl tracking-tighter text-white bg-gray-800 rounded-lg group`} >
                                <div className={`${kanit.className} latin`}><h4 className={`${styles.descTitleGroup} ${kanit.className} ${styles.descTitle} text-3xl`}>{example.title}</h4></div>
                                <div className={`text-slate-300 text-lg`}>{example.desc}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}