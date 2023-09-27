const navigation = [
     {
        name: 'Twitter',
        href: 'https://twitter.com/Betting_4_Value',
        icon: 'https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/large-x-logo.png.twimg.2560.png'
    },
    {
        name: 'Discord',
        href: 'https://discord.gg/WrB3HvHJ',
        icon: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg',
    }
]

export default function Footer() {
    return (
        <footer className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center lg:px-8">
                <div className="flex justify-center space-x-4 md:order-2 mx-4">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <img src={item.icon} alt={`${item.name} logo`} className='h-5'/>
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        Developed By 
                        <a href="https://richardtillo.com/" target="_blank" rel="noreferrer"> Richard Tillo</a>
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h4>Responsible Gambling</h4>
                <p className="text-xs leading-5 text-gray-500"> At Betting for Value, we believe in responsible gambling. We understand that sports betting can be addictive, and it's important to set limits and know when to take a break. We encourage our readers to gamble within their means and never to chase their losses. </p>
                <button
                    type="button"
                    className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    <a href="https://www.responsiblegambling.org/for-the-public/problem-gambling-help/help-for-canadians/" target="_blank" rel="noreferrer">If You Need Help</a>
                </button>
            </div>
        </footer>
    )
}