import React, { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { get, apiGraphUrl } from '../../../services/fetchApi';
import { useParams } from 'wouter';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const getDayName = (dateString: string) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const date = new Date(dateString);
    return days[date.getUTCDay()];
};

const createDataset = (data: { travel_date: string, average_star_value: string }[], todayDate: string) => {
    if (data.length === 0) {
        return {
            labels: DAYS_OF_WEEK,
            datasets: [
                {
                    label: 'Calificación promedio',
                    data: new Array(DAYS_OF_WEEK.length).fill(0),
                    fill: false,
                    backgroundColor: 'rgba(82, 82, 82, 1)',
                    borderColor: 'rgba(82, 82, 82, 1)',
                    tension: 0.1,
                }
            ]
        };
    }

    const lastDate = data[data.length - 1]?.travel_date;
    if (!lastDate) {
        return {
            labels: DAYS_OF_WEEK,
            datasets: [
                {
                    label: 'Calificación promedio',
                    data: new Array(DAYS_OF_WEEK.length).fill(0),
                    fill: false,
                    backgroundColor: 'rgba(82, 82, 82, 1)',
                    borderColor: 'rgba(82, 82, 82, 1)',
                    tension: 0.1,
                }
            ]
        };
    }

    const dayIndex = (new Date(todayDate).getUTCDay() - new Date(lastDate).getUTCDay() + 7) % 7;

    const orderedDays = [...DAYS_OF_WEEK.slice(dayIndex + 1), ...DAYS_OF_WEEK.slice(0, dayIndex + 1)];

    const dataset = orderedDays.map(day => {
        const found = data.find(item => getDayName(item.travel_date) === day);
        return found ? parseFloat(found.average_star_value) : 0;
    });

    return {
        labels: orderedDays,
        datasets: [
            {
                label: 'Calificación promedio',
                data: dataset,
                fill: false,
                backgroundColor: 'rgba(82, 82, 82, 1)',
                borderColor: 'rgba(82, 82, 82, 1)',
                tension: 0.1,
            }
        ]
    };
};

const CalifChart: React.FC = () => {
    const todayDate = useMemo(() => new Date().toISOString().split('T')[0], []);
    const kitId = useParams()[0];
    const [jsonData, setJsonData] = useState<{ data: { travel_date: string, average_star_value: string }[] }>({ data: [] });
    const data = useMemo(() => createDataset(jsonData.data, todayDate), [jsonData.data, todayDate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get(apiGraphUrl, 'graphics/ratings-week/' + kitId);
                setJsonData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [kitId, todayDate]);

    const options = useMemo(() => ({
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Día de la semana',
                    color: 'rgba(82, 82, 82, 1)',
                    font: {
                        size: 14,
                        family: 'Fugaz One'
                    }
                }
            },
            y: {
                min: 0,
                max: 5,
                ticks: {
                    color: 'rgba(82, 82, 82, 1)',
                    stepSize: 1
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                title: {
                    display: true,
                    text: 'Calificación',
                    color: 'rgba(82, 82, 82, 1)',
                    font: {
                        size: 14,
                        family: 'Fugaz One'
                    },
                },
            },
        },
        layout: {
            padding: {
                top: 0,
                left: 0,
                right: 20,
                bottom: 0,
            },
        },
    }), []);

    return (
        <>
            <span>Calificación Promedio por Día</span>
            <div className='yellow-container'>
                <Line data={data} options={options} height={300} />
            </div>
        </>
    );
};

export default CalifChart;