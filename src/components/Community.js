import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPhone, faChartSimple, faDollarSign, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

export default function Community() {
    return (
        <>
            <div className="bg-light-green">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex">
                    <div className="lg:my-20 my-12">
                        <h2 className="text-7xl font-bold mb-8">Discover value together!</h2>
                        <p className="font-semibold text-lg mb-5">The Betting For Value community is more than just picking winners. Success is defined by positive expected value and closing line value.</p>
                        <p className="font-semibold text-lg my-2">Our vision is to cultivate a community where every bettor is a value seeker, using data to uncover hidden opportunities and drive consistent profitability.</p>
                        <a href="https://discord.gg/WrB3HvHJ" target="_blank" rel="noreferrer" className="bg-blurple py-3 px-4 my-5 inline-flex justify-center items-center rounded-md font-bold border text-sm leading-6 text-white hover:bg-light-blurple transition-all focus:outline-none focus:ring-2s focus:ring-blurple focus:ring-offset-2">Join the Discord  <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" alt="discord logo" className="h-5 ms-2" /></a>
                    </div>
                    <div className="w-1/3 hidden lg:inline-block my-12">
                        <img src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2667&q=80" alt="2 individuals on their laptops" className=" rounded-md object-cover h-full" />
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto mt-5 p-4 sm:p-6 lg:p-8 text-center">
                <h3 className="text-5xl font-bold mb-5">Connect with experts</h3>
                <p className="font-semibold text-lg mb-5">Gain advice and guidance from our profitable betting experts for absolutely free!</p>
                <h4 className="text-3xl font-bold mt-16 mb-6">Take advantage of</h4>
                <ul className="flex flex-wrap justify-center">
                    <li className="w-48 m-5">
                        <FontAwesomeIcon icon={faDollarSign} size="2xl" />
                        <h4 className="text-2xl font-semibold my-2">Value Plays</h4>
                        <p>Get notified when a specific sportsbooks has inaccurate lines</p>
                    </li>
                    <li className="w-48 m-5">
                        <FontAwesomeIcon icon={faThumbsUp} size="2xl" />
                        <h4 className="text-2xl font-semibold my-2">Risk Free Plays</h4>
                        <p>Make guaranteed no-risk profit with arbitrage betting</p>
                    </li>
                    <li className="w-48 m-5">
                        <FontAwesomeIcon icon={faChartSimple} size="2xl" />
                        <h4 className="text-2xl font-semibold my-2">Analysis</h4>
                        <p>Learn about profitable betting strategies and models</p>
                    </li>
                    <li className="w-48 m-5">
                        <FontAwesomeIcon icon={faArrowTrendUp} size="2xl" />
                        <h4 className="text-2xl font-semibold my-2">Boosts and Promos</h4>
                        <p>Get the most out of sportsbook deposit bonuses and promotions</p>
                    </li>
                    <li className="w-48 m-5">
                        <FontAwesomeIcon icon={faPhone} size="2xl" />
                        <h4 className="text-2xl font-semibold my-2">Live Betting Calls</h4>
                        <p>Join group calls to discover more live betting opportunities</p>
                    </li>
                </ul>
            </div>
        </>
    )
}