import { Kanit } from '@next/font/google'
import React from 'react'
// import VideoPlayer from "react-background-video-player";

const kanit = Kanit({ subsets: ['latin'], weight: '700' })

export default function Automatic() {
    return (
        <div>
            <div className={`${kanit.className} mb-10 text-bold text-4xl md:text-5xl text-center text-purple-600`}>
                <p>Automate ALL your Trades...</p>
                <p>Even the Manual Ones!</p>
            </div>
            <div className='relative hidden md:block'>
                <div className='text-center absolute z-50 w-full h-full flex'>
                    <div className='max-w-[700px] flex justify-center flex-col m-auto text-slate-300 text-xl my-8'>
                        There is no such thing as risk-free trading. We do not create investment strategies and do not provide investment advice. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard.
                    </div>
                </div>
                <div className='blur-[2px]' style={{ width: '100%' }}>
                    <video autoPlay loop>
                        <source src="/video/trading.mp4" />
                    </video>
                </div>
            </div>
            <div className='block md:hidden'>
                <div className='text-center z-50 w-full h-full flex'>
                    <div className='max-w-[700px] flex justify-center flex-col m-auto text-slate-300 text-xl my-8'>
                        There is no such thing as risk-free trading. We do not create investment strategies and do not provide investment advice. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard.
                    </div>
                </div>
                <div className='' style={{ width: '100%' }}>
                    <video autoPlay loop>
                        <source src="/video/trading.mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}