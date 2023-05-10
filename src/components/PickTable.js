const plays = [
    { id: 1, league: 'La Liga', matchTime: '5:30PM', homeTeam: 'Valencia', awayTeam: 'Real Valladolid', oddsHome: '1.78', oddsDraw: '3.840', oddsAway: '4.86', expectedHome: '1.40', expectedDraw: '-0.67', expectedAway: '-0.52'},
    { id: 2, league: 'La Liga', matchTime: '8:00PM', homeTeam: 'Athletic Club Bilbao', awayTeam: 'Sevilla', oddsHome: '1.80', oddsDraw: '3.72', oddsAway: '4.85', expectedHome: '1.60', expectedDraw: '-0.69', expectedAway: '-0.64' },
]

export default function PickTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Soccer Plays</h1>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        <a href="#" className="group inline-flex">
                                            League
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Match Start
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Home Team
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Away Team
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Home Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Draw Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Away Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Expected Home Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Expected Draw Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <a href="#" className="group inline-flex">
                                            Expected Away Odds
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {plays.map((play) => (
                                    <tr key={play.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {play.league}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.matchTime}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.homeTeam}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.awayTeam}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 bg-green-400">{play.oddsHome}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.oddsDraw}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.oddsAway}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.expectedHome}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.expectedDraw}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{play.expectedAway}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
