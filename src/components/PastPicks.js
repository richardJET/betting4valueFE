import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from './api';
import Stats from './Stats';
import PicksTable from './PicksTable';

export default function PastPicks() {
    const[pastPicks, setPastPicks] = useState([]);
    const { sport } = useParams();

    useEffect(() => {
        async function fetchHistory() {
            try{
                let response;
                if (sport === 'cs') {
                    response = await api('/cs-history/');
                    setPastPicks(response.data);
                } else if (sport === 'football') {
                    response = await api('/football-history/');
                    setPastPicks(response.data);
                }
                else if (sport === 'intl_basketball') {
                    response = await api('/intl-basketball-history/');
                    setPastPicks(response.data);
                } else {
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
            <Stats />
            {pastPicks.length > 0 
            ? <PicksTable plays={pastPicks} sport={sport} /> 
            : <div className="text-center">Couldn't load pick history.</div>}
        </div>
    )
}