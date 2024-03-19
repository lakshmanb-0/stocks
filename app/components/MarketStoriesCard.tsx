import Image from 'next/image'
import React from 'react'

type TypeStoriesCard = {
    image: string,
    title: string,
    content: string,
}

const MarketStoriesCard = ({ data }: { data: TypeStoriesCard }) => {
    return (
        <div className='shadow-xl space-y-2 max-w-4xl'>
            <Image src={data.image} alt={data.title} width={1200} height={720} className='object-cover' />
            <div className='space-y-3 p-4'>
                <h1 className='font-bold text-xl'>{data.title}</h1>
                <p className='opacity-80'>{data.content}</p>
            </div>
        </div>
    )
}

export default MarketStoriesCard