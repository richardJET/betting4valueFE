import { useEffect, useState } from 'react';
import { fetchData } from './api';

export default function PickTable() {

    const[plays, setPlays] = useState([]);

    useEffect(() => {
        async function fetchPlays() {
            try {
                const response = await fetchData();
                console.log(response.data)
                setPlays(response.data);
            } catch (error) {
                console.error('Error fetching plays:', error);
            }
        }

        fetchPlays();
    }, []);


    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-black">Soccer Plays</h1>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-black">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0">
                                        <a href="#" className="group inline-flex">
                                            League
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Match Start
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Home Team
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Away Team
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Home Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Draw Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Away Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Expected Home Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Expected Draw Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Expected Away Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Play
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="#" className="group inline-flex">
                                            Play Value (%)
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {plays.map((play) => (
                                    <tr key={play.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0 text-black">
                                            {play.league_name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{`${play.match_date} ${play.match_time}`}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.home_team}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.away_team}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.home_book_odds}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.draw_book_odds}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.away_book_odds}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.home_expected_odds}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.draw_expected_odds}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.away_expected_odds}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.play}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.play_value.toFixed(2)}</td>
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
