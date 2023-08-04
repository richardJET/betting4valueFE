import { useEffect, useState, useRef } from 'react';
import { csgoData } from './csgoData';
import { bettingData } from './bettingData';
import { useParams } from 'react-router-dom';
import CsgoTable from './CsgoTable';
import SoccerTable from './SoccerTable';
import Stats from './Stats';
import ErrorPage from './ErrorPage';

export default function BettingTable() {

    const [plays, setPlays] = useState([]);
    const [info, setInfo] = useState(false);
    const modalRef = useRef();
    const { sport } = useParams();

    useEffect(() => {
        async function fetchPlays() {
            try {
                let response;
                if (sport === 'csgo') {
                    response = await csgoData();
                } else {
                    response = await bettingData();
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
        sport === 'csgo' || sport === 'soccer' || sport === '' ?
        <>
            <Stats />
            {plays.length > 0 ?
                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="sm:flex sm:items-center">
                        <div className="flex">
                            <h1 className="text-base font-semibold leading-6 text-black">{sport === 'csgo' ? 'CS:GO plays' : 'Soccer Plays'}</h1>
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
                                    {sport === 'csgo' ? <p>
                                        The CS:GO model uses advanced metrics to predict the outcome of CS:GO games and compares the results
                                        to the latest betting lines. Before placing a bet ensure that your sportsbook's odds for the event are
                                        greater than the minimum odds listed below.
                                    </p> 
                                    : <p>
                                        The soccer model uses advanced metrics to predict the outcome of soccer games and compares the results
                                        to the latest betting lines. Before placing a bet ensure that your sportsbook's odds for the event are
                                        greater than the minimum odds listed below.
                                    </p>}   
                                </div>
                            </div>
                        )}
                    </div>

                    {sport === 'csgo' ? <CsgoTable plays={plays} /> : <SoccerTable plays={plays} />}
                </div>
            : <h3 className="text-center text-lg">No Plays for Today</h3>}
        </>
        : <ErrorPage />
    )
}