import { Kanit } from '@next/font/google'
import { Inter } from '@next/font/google'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Memberships } from '../Constants/ExamplePage'

const kanit = Kanit({ subsets: ['latin'], weight: '700' })
const inter = Inter({ subsets: ['latin'] })

export default function ChoosePlan
    () {

    const [isShown, setIsShown] = useState(false);
    const [isSelect, setSelect] = useState(0);

    return (
        <>
            <div className='relative max-w-8xl w-full my-40 m-auto'>
                <div className={`${kanit.className} mb-10 text-bold text-4xl md:text-5xl text-center text-purple-600`}>Choose Your Plan</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {Memberships.map((membership) => (
                        <div className='membership items-center bg-transparent backdrop-blur-sm py-10 px-6 text-center rounded-lg hover:scale-105 ease-in duration-300' key={membership.id} onMouseEnter={() => {setIsShown(true); setSelect(membership.id)}}
                            onMouseLeave={() => setIsShown(false)}>
                            <div className='text-slate-300 flex flex-col justify-between h-full'>
                                <div className='mb-2'>
                                    <div>
                                        <span className='font-bold text-lg'>{membership.title}</span>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-xl font-bold'><span className='text-7xl font-extrabold'>${membership.price}</span>/mo</p>
                                    </div>
                                    <div>
                                        <span>{membership.desc}</span>
                                    </div>
                                </div>
                                {/* {isShown && isSelect === membership.id && ( */}
                                    <div className='scale-105 ease-in duration-300 ml-6 my-6'>
                                        {membership.list.map((item: any) => (
                                            <div className='text-left flex my-2' key={item.id}>
                                                <div className='mr-2'><Icon icon={item.icon} fontSize={20} />
                                                </div>
                                                <div>{item.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                {/* )} */}
                                <div>
                                    {/* {!isShown && <span>Detail</span>} */}
                                    <button className={`${inter.className} mt-4 relative w-full px-4 py-2 sm:px-5 sm:py-2.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 relative rounded group font-medium text-white font-medium inline-block`}>
                                        <span className="absolute inset-0 h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500">
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
            </div>
        </>
    )
}