import { Kanit } from '@next/font/google'
import { Inter } from '@next/font/google'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Memberships, AnnualMemberships, LifetimeMembership } from '../Constants/ExamplePage'

const kanit = Kanit({ subsets: ['latin'], weight: '700' })
const inter = Inter({ subsets: ['latin'] })

export default function ChoosePlan
    () {

    const [isShown, setIsShown] = useState(false);
    const [isSelect, setSelect] = useState(0);
    const [isTab, setTab] = useState(1);

    const renderMembership = (Memberships: any) => (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {Memberships.map((membership: any) => (
                <div className='membership items-center bg-transparent backdrop-blur-sm py-10 px-6 text-center rounded-lg hover:scale-105 ease-in duration-300' key={membership.id} onMouseEnter={() => { setIsShown(true); setSelect(membership.id) }}
                    onMouseLeave={() => setIsShown(false)}>
                    <div className='text-slate-300 flex flex-col justify-between h-full'>
                        <div className='mb-2'>
                            <div>
                                <span className='font-bold text-lg'>{membership.title}</span>
                            </div>
                            <div className='py-3'>
                                <p className='text-xl font-bold'><span className='text-7xl font-extrabold'>${membership.price}</span>/{membership.period}</p>
                            </div>
                            <div>
                                <span>{membership.desc}</span>
                            </div>
                        </div>
                        <div className='scale-105 ease-in duration-300 ml-6 my-6'>
                            {membership.list.map((item: any) => (
                                <div className='text-left flex my-2' key={item.id}>
                                    <div className='mr-2'><Icon icon={item.icon} fontSize={20} />
                                    </div>
                                    <div>{item.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <button className={`${inter.className} mt-4 relative w-full px-4 py-2 sm:px-5 sm:py-2.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 relative rounded group font-medium text-white font-medium inline-block`}>
                                <span className="absolute inset-0 h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-300 from-blue-500">
                                </span>
                                <span className="relative text-sm sm:text-base lg:text-sm xl:text-base">
                                    Select {membership.title}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

    return (
        <>
            <div className='relative max-w-8xl w-full my-40 m-auto'>
                <div className={`${kanit.className} mb-10 text-bold text-4xl md:text-5xl text-center text-blue-500`}>Choose Your Plan</div>
                <div className='text-slate-300 my-20 text-center'>
                    <div className='tab-wrap rounded-lg  w-fit m-auto flex p-1.5 ease-in-out duration-300'>
                        <div className={`${isTab === 1 && 'tab-item'} px-4 py-1 rounded-lg cursor-pointer`} onClick={() => setTab(1)}>
                            <span>Monthly Pricing</span>
                        </div>
                        <div className={`${isTab === 2 && 'tab-item'} px-4 py-1 rounded-lg cursor-pointer`} onClick={() => setTab(2)}>
                            <span>Annual Pricing</span>
                        </div>
                        <div className={`${isTab === 3 && 'tab-item'} px-4 py-1 rounded-lg cursor-pointer`} onClick={() => setTab(3)}>
                            <span>Lifetime Membership</span>
                        </div>
                    </div>
                </div>
                {isTab == 1 ? renderMembership(Memberships)
                    :
                    (
                        isTab === 2 ?
                            renderMembership(AnnualMemberships)
                            :
                            renderMembership(LifetimeMembership)
                    )
                }
            </div>
        </>
    )
}