'use client'
import React, { useEffect, useState } from 'react'
import DiscussionCard from './DiscussionCard'
import MarketStoriesCard from './MarketStoriesCard'
import { forumCard, storiesData } from '../data/data'

const Discussion = () => {
    const [selected, setSelected] = useState<string>('Discussion Forum');

    // set state to default when window innerWidth > 600
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setSelected('Discussion Forum');
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className='w-screen'>
            <header className='flex sm:hidden text-white text-xl select-none'>
                {['Discussion Forum', 'Market Stories'].map((el: string) => (
                    <h1 key={el} className={`py-5 w-full text-center ${el == selected ? 'bg-[#050e2e]' : 'bg-[#1f2a51]'}`} onClick={(e: any) => setSelected(e.target.textContent)}>{el}</h1>
                ))}
            </header>
            <div className='flex gap-5 lg:gap-20 justify-center'>
                {selected == 'Discussion Forum' ?
                    <section className='p-2 max-w-3xl'>
                        <h1 className="text-red-600 text-3xl font-bold hidden sm:block">DISCUSSION FORUM</h1>
                        <div className='py-10 space-y-10'>
                            {forumCard.map((item, index: number) => (
                                <DiscussionCard item={item} key={index} />
                            ))}
                        </div>
                    </section>
                    : <section className='py-10 space-y-10 px-3'>
                        {storiesData.map((item, index: number) => (
                            <MarketStoriesCard data={item} key={index} />
                        ))}
                    </section>
                }
                <section className='p-2 hidden sm:block max-w-xs md:max-w-sm '>
                    <h1 className="text-red-600 text-3xl font-bold hidden sm:block">MARKET STORIES</h1>
                    <div className='py-10 space-y-10'>
                        {storiesData.map((item, index: number) => (
                            <MarketStoriesCard data={item} key={index} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Discussion