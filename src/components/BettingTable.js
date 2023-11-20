import { useEffect, useState, useRef } from 'react';
import { api } from './api';
import { useParams } from 'react-router-dom';
import PicksTable from './PicksTable';
import Stats from './Stats';
import ErrorPage from './ErrorPage';
import { Link } from 'react-router-dom';

export default function BettingTable() {

    const [plays, setPlays] = useState([]);
    const [info, setInfo] = useState(false);
    const modalRef = useRef();
    const { sport } = useParams();

    useEffect(() => {
        async function fetchPlays() {
            try {
                let response;
                if (sport === 'cs') {
                    response = await api('/cs-data/');
                } else if (sport === 'football') {
                    response = await api('/nfl-data/');
                }
                else{
                    response = await api('/betting-data/');
                }

                console.log(response.data)
                setPlays(response.data);
            } catch (error) {
                console.error('Error fetching plays:', error);
            }
        }

        fetchPlays();
    }, [sport]);

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
        sport === 'cs' || sport === 'soccer' || sport === 'football' || sport === undefined ?
        <>
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-4">
                <Stats />
                <div className="mt-2 ml-2">
                    <Link to={sport === undefined ? 'soccer/history' : 'history'} className="text-sm font-semibold leading-7">
                        View pick history <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
            {plays.length > 0 ?
                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="sm:flex sm:items-center">
                        <div className="flex">
                                <h1 className="text-base font-semibold leading-6 text-black capitalize">{sport === undefined ? 'Soccer' : sport} Plays</h1>
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
                                    {sport === 'cs' ? <p>
                                        The CS model uses advanced metrics to predict the outcome of CS games and compares the results
                                        to the latest betting lines. Before placing a bet ensure that your sportsbook's odds for the event are
                                        greater than the minimum odds listed below.
                                    </p> 
                                    : sport === 'soccer' || sport === undefined ? <p>
                                        The soccer model uses advanced metrics to predict the outcome of soccer games and compares the results
                                        to the latest betting lines. Before placing a bet ensure that your sportsbook's odds for the event are
                                        greater than the minimum odds listed below.
                                    </p>
                                    : <p>
                                        The NFL model uses advanced metrics to predict the outcome of NFL games and compares the results
                                        to the latest betting lines. Before placing a bet ensure that your sportsbook's main line is equal to or less than the current spread or total.
                                    </p>}
                                </div>
                            </div>
                        )}
                    </div>

                    <PicksTable plays={plays} sport={sport} />
                </div>
            : <h3 className="text-center text-lg">No Plays for Today</h3>}
        </>
        : <ErrorPage />
    )
}