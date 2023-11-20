import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';

export default function PicksTable({ plays, sport }) {
    const [sortBy, setSortBy] = useState('play_value');
    const [sortOrder, setSortOrder] = useState('desc');

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            if (column === 'play_value'){
                setSortOrder('desc');
            } else{
                setSortOrder('asc');
            }
        }
    };

    const sortedPlays = [...plays].sort((a, b) => {
        if (sortBy) {
            if (a[sortBy] < b[sortBy]) {
                return sortOrder === 'asc' ? -1 : 1;
            }
            if (a[sortBy] > b[sortBy]) {
                return sortOrder === 'asc' ? 1 : -1;
            }
        }
        return 0;
    });
    
    return (            
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-black">
                            <thead>
                                <tr>
                                    {sport !== 'football' ?
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0 cursor-pointer" onClick={() => handleSort('league')}>
                                        <div className="group inline-flex">
                                            League
                                            {sortBy === 'league' ? sortOrder === 'asc' ? <ArrowUpIcon className="h-4 w-4 ml-1" aria-hidden="true" /> : <ArrowDownIcon className="h-4 w-4 ml-1" aria-hidden="true" />  : null}
                                        </div>
                                    </th>
                                    : null}
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black cursor-pointer" onClick={() => handleSort('start_time')}>
                                        <div className="group inline-flex">
                                            Match Start
                                            {sortBy === 'start_time' ? sortOrder === 'asc' ? <ArrowUpIcon className="h-4 w-4 mt-1 ml-1" aria-hidden="true" /> : <ArrowDownIcon className="h-4 w-4 mt-1 ml-1" aria-hidden="true" /> : null}
                                        </div>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <div className="group inline-flex">
                                            Home Team
                                        </div>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <div className="group inline-flex">
                                            Away Team
                                        </div>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <div className="group inline-flex">
                                            Play
                                        </div>
                                    </th>
                                    {plays[0].play_value ?
                                        <>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                                <div className="group inline-flex">
                                                    Minimum Odds
                                                </div>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                                <div className="group inline-flex">
                                                    Expected Odds
                                                </div>
                                            </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black cursor-pointer" onClick={() => handleSort('play_value')}> 
                                                <div className="group inline-flex">
                                                    Play Value (%)
                                                    {sortBy === 'play_value' ? sortOrder === 'asc' ? <ArrowUpIcon className="h-100 w-4 mt-1 ml-1" aria-hidden="true" /> : <ArrowDownIcon className="h-100 w-4 mt-1 ml-1" aria-hidden="true" /> : null}
                                                </div>
                                            </th>
                                        </>
                                        : plays[0].play_price ?
                                        <>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                                <div className="group inline-flex">
                                                    Play Price
                                                </div>
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                                <div className="group inline-flex">
                                                    Result
                                                </div>
                                            </th>
                                        </>
                                        : null}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {sortedPlays.map((play) => (
                                    <tr key={play.id}>
                                        {sport !== 'football'?
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0 text-black">
                                                {play.league}
                                            </td>
                                        : null}
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.start_time}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.home_team}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.away_team}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.play}</td>
                                        {play.play_value ? 
                                        <>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{parseFloat(play.minimum_odds).toFixed(2)}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{parseFloat(play.expected_odds).toFixed(2)}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{parseFloat(play.play_value).toFixed(2)}</td>
                                        </>
                                        : play.play_price ?
                                        <>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{parseFloat(play.play_price).toFixed(2)}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.result}</td>
                                        </>
                                        : null}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}
