import moment from "moment";
import { BsChatLeftText } from "react-icons/bs";
import { RiExchangeDollarFill } from "react-icons/ri";

export let forumCard = [
    {
        topic: "Technology",
        name: "Samantha Smith",
        content: "Will quantum computing reshape cybersecurity? The potential is vast, but so are the risks. Let's explore the implications.",
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGF',
        date: moment().subtract(10, 'minutes'),
        likeCount: 1000,
        viewCount: 4000,
        commentCount: 100,
    },
    {
        topic: "Gaming",
        name: "Alex Chen",
        content: "Is virtual reality the future of gaming? As VR technology advances, it's changing how we play and experience games.",
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: moment().subtract(30, 'minutes'),
        likeCount: 8000,
        viewCount: 100000,
        commentCount: 1000,
    },
    {
        topic: "Sports",
        name: "Michael Johnson",
        content: "The impact of data analytics in sports is undeniable. From enhancing performance to strategy, it's revolutionizing the game.",
        image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: moment().subtract(50, 'minutes'),
        likeCount: 20,
        viewCount: 1000,
        commentCount: 4,
    },
    {
        topic: "Stocks",
        name: "Emily White",
        content: "What's the outlook for renewable energy stocks? With increasing focus on sustainability, investors are eyeing this sector closely.",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: moment().subtract(12, 'minutes'),
        likeCount: 34,
        viewCount: 300,
        commentCount: 3,
    },
    {
        topic: "Market",
        name: "Daniel Brown",
        content: "How will geopolitical tensions affect global markets? Uncertainty looms as investors navigate geopolitical risks.",
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: moment().subtract(25, 'minutes'),
        likeCount: 2,
        viewCount: 12,
        commentCount: 0,
    }
]

export let storiesData = [
    {
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Gaming Giant's New Release Skyrockets Sales",
        content: "Gaming Giant's New Release Skyrockets Sales: XYZ Corp's latest game title 'Epic Quest' breaks records with over 5 million copies sold in the first week.",
    },
    {
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tech Stocks Surge Amidst Positive Earnings Reports",
        content: "Tech Stocks Surge: FAANG companies lead the market rally as investors regain confidence in the sector's growth prospects amidst positive earnings reports.",
    },
    {
        image: "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Market Volatility Continues Amidst Geopolitical Tensions",
        content: "Market Volatility Continues: Uncertainty looms as geopolitical tensions and inflation fears drive wild swings in global stock indices, leaving investors on edge.",
    }

]

export let navbarList = [
    {
        icon: <BsChatLeftText />,
        title: 'Discussion Forum',
    },
    {
        icon: <RiExchangeDollarFill />,
        title: 'Market Stories',
    },
    {
        title: 'Sentiment',
    },
    {
        title: 'Market',
    },
    {
        title: 'Sector',
    },
    {
        title: 'Watchlist',
    },
    {
        title: 'Events',
    },
    {
        title: 'News/Interview',
    },
]