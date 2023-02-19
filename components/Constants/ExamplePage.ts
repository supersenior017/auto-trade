interface TextExampleListTypes {
    name: string;
    icon: string;
    link: string;
    img: string;
}

interface TradeWaysTypes {
    id: number;
    title: string;
    desc: string;
    icon: string;
    link: string;
}

export const TextExampleList: TextExampleListTypes[] = [
    {
        name: 'Real time chat',
        icon: 'material-symbols:chat-bubble-outline-rounded',
        link: '/examples/real-time-chat',
        img: '/image/tradingview.webp'
    },
    {
        name: 'Grammar correction',
        icon: 'fluent:text-grammar-wand-20-regular',
        link: '/examples/grammar-correction',
        img: '/image/ftmo.webp'
    },
    {
        name: 'English to other languages',
        icon: 'bi:translate',
        link: '/examples/english-to-others',
        img: '/image/automated.png'
    },
    {
        name: 'Movie to Emoji',
        icon: 'mdi:emoji-happy-outline',
        link: '/examples/movie-to-emoji',
        img: '/image/metatrader.png'
    },
]

export const TradeWays: TradeWaysTypes[] = [
    {
        id: 1,
        title: 'Make your own bots',
        desc: 'With amazing built in features to help you turn your Tradingview Alerts into profitable trades. Highly configurable and easy to manage. Works with all indicators and most prop firms, also tracks all account data so you can win more trades!',
        icon: 'material-symbols:chat-bubble-outline-rounded',
        link: '/examples/real-time-chat',
    },
    {
        id: 2,
        title: 'Share your bots comings soon',
        desc: 'Once you find a profitable system you can make it public and it will show on your profile for others to follow. You can also automate your tradingview alerts into telegram & discord & become a Signal provider just start looking for the perfect alerts!',
        icon: 'material-symbols:chat-bubble-outline-rounded',
        link: '/examples/real-time-chat',
    },
    {
        id: 3,
        title: 'Copy other trader coming soon',
        desc: 'Do not worry if you are new to trading with Automated Trader you can connect to traders around the world. Passive investing handsfree, just find a profitable trading solution that works for you. We show you all the users public data so you can know exactly what to expect when following a signal provider!',
        icon: 'material-symbols:chat-bubble-outline-rounded',
        link: '/examples/real-time-chat',
    },
    {
        id: 4,
        title: 'Top of the line affiliate program coming soon',
        desc: 'Competitive commission rates, which can add up quickly if you have a large and engaged audience. With every sale made through your affiliate link, you will earn a percentage of the revenue, which can be a powerful way to monetize your website or social media presence.',
        icon: 'material-symbols:chat-bubble-outline-rounded',
        link: '/examples/real-time-chat',
    }
]