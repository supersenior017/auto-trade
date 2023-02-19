import { Inter } from '@next/font/google'
import { Kanit } from '@next/font/google'
import React, { useEffect, useState, useRef } from 'react'
import { FillButton, OutlineButton } from '../ButtonComponents';
import ChatBox from '../Components/ChatBox';
import Title from '../Components/Title';
import Automatic from './Automatic';
import ChoosePlan from './ChoosePlan';
import Examplespage from './Examplespage';
import TradingWays from './TradingWays';

const inter = Inter({ subsets: ['latin'] })

const kanit = Kanit({ subsets: ['latin'], weight: '700' })

export interface ChatContentTypes {
    Human: string;
    AI: string;
}

export default function Homepage() {

    return (
        <div className='m-auto'>
            <div className='descSection m-auto relative max-w-8xl w-full pt-12 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-12 lg:gap-0'>
                <div className='flex flex-col gap-8 w-2/5 min-w-full lg:min-w-[450px] xl:min-w-[550px]'>
                    <Title title='SAY GOODBYE TO MANUAL TRADING' />
                    <div>
                        <p className={`${inter.className} text-slate-300 text-sm sm:text-base lg:text-sm xl:text-base`}>
                            <span className='font-bold'>BETA COMING SOON Q4</span>
                        </p>
                        <p className={`${inter.className} text-slate-300 text-sm sm:text-base lg:text-sm xl:text-base`}>
                            <span className='font-bold'>The most innovative trading Dashboard!</span>
                        </p>
                        <p className={`${inter.className} text-slate-300 text-sm sm:text-base lg:text-sm xl:text-base`}>
                            <span className='font-bold'>PRE-REGISTRATION IS NOW AVAILABLE.</span>
                        </p>
                    </div>
                    <FillButton name='Join Waitlist' link="/" />
                </div>
                <div className="relative max-w-auto lg:max-w-xl w-full text-md self-center">
                    <img src="/image/automate.gif" alt="" />
                </div>
            </div>
            <Examplespage />
            <Automatic />
            <TradingWays />
            <ChoosePlan />
            <div>
                <div className='max-w-[700px] m-auto'>
                <div className={`${kanit.className} mb-10 text-bold text-4xl md:text-5xl text-center text-purple-600`}>
                    Contact Us
                </div>
                    <div className='text-slate-300 text-sm sm:text-base lg:text-sm xl:text-base my-8'>
                        There is no such thing as risk-free trading. We do not create investment strategies and do not provide investment advice. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard.
                    </div>
                    <div className='flex items-center gap-5 justify-center'>
                        <OutlineButton isIcon iconName='mdi:youtube' link="https://www.youtube.com/channel/UC6fpw9ACFKDfyqK0aNSAW-Q" />
                        <OutlineButton isIcon iconName='mdi:instagram' link="https://www.instagram.com/automated.trader/" />
                        <OutlineButton isIcon iconName='pajamas:twitter' link="https://twitter.com/automatedapp" />
                        <OutlineButton isIcon iconName='ic:baseline-discord' link="https://discord.com/invite/RU5t7ErGEE" />
                    </div>
                </div>
            </div>
        </div>
    )
}