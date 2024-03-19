import moment from 'moment';
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { GiShare } from "react-icons/gi";

type TypeForumCard = {
    image: string,
    name: string,
    topic: string,
    date: moment.Moment,
    content: string,
    likeCount: number,
    viewCount: number,
    commentCount: number,
}

const DiscussionCard = ({ item }: { item: TypeForumCard }) => {

    // formatted number 
    function formatNumberToK(number: number) {
        if (number >= 1000) {
            const rounded = Math.round(number / 100) / 10;
            return rounded + 'k';
        }
        return number
    }

    return (
        <div className='shadow-xl p-3 flex gap-4' key={item.content}>
            <Image src={item.image} alt='avatar' width={500} height={500} className='rounded-full mt-1 size-10 object-cover' />
            <div className='space-y-6 flex-1'>
                <div className='flex items-center flex-wrap gap-4'>
                    <h1 className='sm:text-xl'>{item.name}</h1>
                    <button className='rounded-full bg-[#304078] px-4 py-1 text-white text-sm sm:text-lg'>{item.topic}</button>
                    <p className='ml-auto text-sm opacity-60'>{moment(item.date, "YYYYMMDD").fromNow()}</p>
                </div>
                <p className='opacity-85 text-sm sm:text-lg'>{item.content}</p>
                <div className='flex justify-between gap-2 flex-wrap items-center select-none text-sm sm:text-base'>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <AiOutlineHeart />
                        {formatNumberToK(item.likeCount)}
                    </span>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <FaRegEye />
                        {formatNumberToK(item.viewCount)}
                    </span>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <BiComment />
                        {formatNumberToK(item.commentCount)} Comments
                    </span>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <GiShare />
                        Share
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DiscussionCard