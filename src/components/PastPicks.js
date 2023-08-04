import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { soccerHistory } from "./soccerHistory";
import SoccerTable from "./SoccerTable";

export default function PastPicks() {
    const[soccerPicks, setSoccerPicks] = useState([]);
    const { sport } = useParams();

    useEffect(() => {
        async function fetchSoccerHistory() {
            try{
                const response = await soccerHistory();
                setSoccerPicks(response.data);
            }
            catch (error) {
                console.error('Error fetching past picks:', error);
            }
        }
        fetchSoccerHistory();
    }, []);

    return (
        soccerPicks.length > 0 && sport === 'soccer' ?
        <SoccerTable plays={soccerPicks} />
        : <h2> Coming Soon </h2>
    )
}