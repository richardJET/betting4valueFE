import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from './api';
import PicksTable from './PicksTable';

export default function PastPicks() {
    const[pastPicks, setPastPicks] = useState([]);
    const { sport } = useParams();

    useEffect(() => {
        async function fetchHistory() {
            try{
                let response;
                if (sport === 'csgo') {
                    response = await api('/csgo-history/');
                    setPastPicks(response.data);
                } else if (sport === 'football') {
                    response = await api('/football-history/');
                    setPastPicks(response.data);
                }
                else {
                    response = await api('/soccer-history/');
                    setPastPicks(response.data);
                }
            }
            catch (error) {
                console.error('Error fetching past picks:', error);
            }
        }
        fetchHistory();
    }, [sport]);

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold my-8">Past {sport} picks</h1>
            {pastPicks.length > 0 ? <PicksTable plays={pastPicks} sport={sport} /> : <div className="text-center">Couldn't load pick history.</div>}
        </div>
    )
}