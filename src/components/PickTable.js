import { useEffect, useState, useRef } from 'react';
import { fetchData } from './api';

export default function PickTable() {

    const[plays, setPlays] = useState([]);
    const[info, setInfo] = useState(false);
    const modalRef = useRef();

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

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setInfo(false);
            }
        }

        function handleEscapeKey(event) {
            if (event.key === 'Escape') {
                setInfo(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="flex">
                    <h1 className="text-base font-semibold leading-6 text-black">Soccer Plays</h1>
                    <button className="mx-2" onClick={() => setInfo(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    </button>
                </div>
                {info && (
                    <div className='max-w-lg absolute left-40 top-0'>
                        <div ref={modalRef} className="bg-white border border-gray-200 p-2">
                            <p>
                                The soccer model uses advanced metrics to predict the outcome of soccer games and compares the results
                                to the latest betting lines. Before placing a bet ensure that your sportsbook's odds for the event are
                                greater than the minimum odds listed below.
                            </p>
                        </div>
                    </div>
                )}   
            </div>
              
            <div className="mt-4 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-black">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0">
                                        <a href="/#" className="group inline-flex">
                                            League
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
                                            Match Start
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
                                            Home Team
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
                                            Away Team
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
                                            Play
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
                                            Minimum Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
                                            Expected Odds
                                        </a>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                        <a href="/#" className="group inline-flex">
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
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.play}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.play === 'Home' ? (play.home_expected_odds * 1.2).toFixed(2) : play.play === 'Away' ? (play.away_expected_odds * 1.2).toFixed(2) : (play.draw_expected_odds * 1.2).toFixed(2)}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{play.play === 'Home' ? play.home_expected_odds : play.play === 'Away' ? play.away_expected_odds : play.draw_expected_odds}</td>
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
