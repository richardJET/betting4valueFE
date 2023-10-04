import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from './api';
import SoccerTable from "./SoccerTable";
import CsgoTable from "./CsgoTable";

export default function PastPicks() {
    const[soccerPicks, setSoccerPicks] = useState([]);
    const[csgoPicks, setCsgoPicks] = useState([]);
    const { sport } = useParams();

    useEffect(() => {
        async function fetchHistory() {
            try{
                let response;
                if (sport === 'csgo') {
                    response = await api('/csgo-history/');
                    setCsgoPicks(response.data);
                } else {
                    response = await api('/soccer-history/');
                    setSoccerPicks(response.data);
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
            {soccerPicks.length > 0 && sport === 'soccer' ?
            <SoccerTable plays={soccerPicks} />
            : csgoPicks.length > 0 ? <CsgoTable plays={csgoPicks} /> : <div className="text-center">Couldn't load pick history.</div>}
        </div>
    )
}