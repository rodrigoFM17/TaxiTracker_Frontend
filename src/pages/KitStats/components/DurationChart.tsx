import { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'wouter';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import ArrowLeft from '../../../components/ArrowLeft';
import ArrowRight from '../../../components/ArrowRight';
import { get, apiGraphUrl } from '../../../services/fetchApi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DurationData {
    [key: string]: number[];
}

interface ApiResponse {
    status: string;
    message: string;
    data: DurationResponse;
}

interface DurationResponse {
    average_durations: {
        [date: string]: number[];
    };
}


const TIME_LABELS = [
    "00:00 - 2:59", "3:00 - 5:59", "6:00 - 8:59", "9:00 - 11:59",
    "12:00 - 14:59", "15:00 - 17:59", "18:00 - 20:59", "21:00 - 23:59",
];

const CHART_OPTIONS: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
        x: {
            title: {
                display: true,
                text: 'Horas',
                color: 'white',
                font: { size: 14, family: 'Fugaz One' }
            },
            ticks: { color: 'white' },
        },
        y: {
            title: {
                display: true,
                text: 'Minutos',
                color: 'white',
                font: { size: 14, family: 'Fugaz One' },
            },
            ticks: { color: 'white', stepSize: 10 },
            grid: { color: 'rgba(255, 255, 255, 0.4)' },
        },
    },
    layout: { padding: { right: 20 } },
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
};

export default function DurationChart(): JSX.Element {
    const [durationData, setDurationData] = useState<DurationData>({});
    const [days, setDays] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const kit_id = useParams()[0];
    const todayDate = useMemo(() => new Date().toISOString().split('T')[0], []);

    useEffect(() => {
        const fetchData = async () => {    
            const response = await get(apiGraphUrl, 'graphics/duration-travels/' + kit_id + '/' + todayDate);
    
            // Asegúrate de que la respuesta tenga el formato correcto
            const durationResponse: ApiResponse = response;
            const avgDurations = durationResponse.data.average_durations;
    
            console.log(avgDurations);
    
            const dates = Object.keys(avgDurations).sort((a, b) => a.localeCompare(b));
            
            setDays(dates);
            setDurationData(avgDurations);
    
            // Establecer el índice en la última fecha (la más reciente)
            setCurrentIndex(dates.length - 1);
        };
    
        fetchData();
    }, [kit_id, todayDate]);
    

    const changeDay = useCallback((direction: number) => {
        setCurrentIndex((prevIndex) => (prevIndex + direction + days.length) % days.length);
    }, [days.length]);

    const chartData = useMemo(() => ({
        labels: TIME_LABELS,
        datasets: [{
            label: "minutos",
            data: days.length > 0 ? durationData[days[currentIndex]] || [] : [],
            backgroundColor: "rgba(247, 183, 49, 1)",
            borderColor: "rgba(247, 183, 49, 1)",
            borderWidth: 1,
            barThickness: 10,
        }],
    }), [days, currentIndex, durationData]);

    return (
        <>
            <span>Duración promedio de viajes en el día</span>
            <div className='slider'>
                <button className='arrow-button' onClick={() => changeDay(-1)}>
                    <ArrowLeft color='#FFFFFF' className='arrow' />
                </button>
                <span>{days[currentIndex] ? formatDate(days[currentIndex]) : ''}</span>
                <button className='arrow-button' onClick={() => changeDay(1)}>
                    <ArrowRight color='#FFFFFF' className='arrow' />
                </button>
            </div>
            <div className='black-container'>
                <Bar data={chartData} options={CHART_OPTIONS} height={300} />
            </div>
        </>
    );
}