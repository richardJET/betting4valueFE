import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from './api';

export default function Stats() {
    const { sport } = useParams();
    const [stats, setStats] = useState([
        { name: 'Past Week', stat: '0 - 0', roi: '0.00%' },
        { name: 'Past Month', stat: '0 - 0', roi: '0.00%' },
        { name: 'Past Year', stat: '0 - 0', roi: '0.00%' },
    ]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchStats() {
            try {
                let response;
                if (sport === 'cs') {
                    response = await api('/cs-history/');
                } 
                else if (sport === 'football') {
                    response = await api('/football-history/');
                }
                else {
                    response = await api('/soccer-history/');
                }
                setHistory(response.data);
            } catch (error) {
                console.error('Error fetching plays:', error);
            }
        }
        fetchStats();
    }, [sport]);

    useEffect(() => {
        setStats([
            { name: 'Past Week', stat: calculateStats(7, history)[0] + ' - ' + calculateStats(7, history)[1], roi: (calculateStats(7, history)[3] / calculateStats(7, history)[2] * 100).toFixed(2)},
            { name: 'Past Month', stat: calculateStats(30, history)[0] + ' - ' + calculateStats(30, history)[1], roi: (calculateStats(30, history)[3] / calculateStats(30, history)[2] * 100).toFixed(2)},
            { name: 'Past Year', stat: calculateStats(365, history)[0] + ' - ' + calculateStats(365, history)[1], roi: (calculateStats(365, history)[3] / calculateStats(365, history)[2] * 100).toFixed(2)},
        ]);
    }
    , [history]);

    function calculateStats(days, data) {
        const currentDate = new Date();
        const pastDate = new Date(); 
        pastDate.setDate(currentDate.getDate() - days);
        let startTime;
        
        let wins = 0;
        let losses = 0;
        let wagered = 0;
        let profit = 0;
        data.forEach((item) => {
            if (item.start_time){
                startTime = new Date(item.start_time);
            } else {
                const matchDateTimeString = `${item.match_date}T${item.match_time}`;
                startTime = new Date(matchDateTimeString);
            }
            if (startTime >= pastDate) {
                if(item.result === 'Won') {
                    profit += 100;
                    wagered += 100 / ((item.play_price) - 1);
                    wins++;
                }
                if(item.result === 'Lost') {
                    profit -= 100 / ((item.play_price) - 1);
                    wagered += 100 / ((item.play_price) -1);
                    losses++;
                }
            }
        })
 
        return [wins, losses, wagered, profit];
    }

    return (
        <>
            <dl className="grid grid-cols-3 lg:gap-5 gap-1">
                {stats.map((item) => (
                    <div key={item.name} className="lg:flex justify-between overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <div>
                            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                            <dd className="mt-1 lg:text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                        </div>
                        {!isNaN(item.roi) && (
                            <div className="lg:flex items-end">
                                <dt className="lg:mx-4 mt-2 truncate text-sm font-medium text-gray-500">ROI</dt>
                                <dd className={item.roi > 0 ? 'text-green text-sm' : 'text-red text-sm'}>{item.roi + '%'}</dd>
                            </div>
                        )};
                    </div>
                ))}
            </dl>
        </>
    )
}