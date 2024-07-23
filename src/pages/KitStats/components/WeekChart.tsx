import React, { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { get, apiGraphUrl } from '../../../services/fetchApi';
import { useParams } from 'wouter';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const getDayName = (dateString: string) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const date = new Date(dateString);
    return days[date.getUTCDay()];
};

const createDataset = (data: { travel_date: string, travel_count: number }[], todayDate: string) => {
    if (data.length === 0) {
        return {
            labels: DAYS_OF_WEEK,
            datasets: [
                {
                    label: 'número de viajes',
                    data: new Array(DAYS_OF_WEEK.length).fill(0),
                    backgroundColor: 'rgba(82, 82, 82, 1)',
                    borderColor: 'rgba(82, 82, 82, 1)',
                    borderWidth: 1,
                    barThickness: 10,
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
                    label: 'número de viajes',
                    data: new Array(DAYS_OF_WEEK.length).fill(0),
                    backgroundColor: 'rgba(82, 82, 82, 1)',
                    borderColor: 'rgba(82, 82, 82, 1)',
                    borderWidth: 1,
                    barThickness: 10,
                }
            ]
        };
    }

    const dayIndex = (new Date(todayDate).getUTCDay() - new Date(lastDate).getUTCDay() + 7) % 7;

    const orderedDays = [...DAYS_OF_WEEK.slice(dayIndex + 1), ...DAYS_OF_WEEK.slice(0, dayIndex + 1)];

    const dataset = orderedDays.map(day => {
        const found = data.find(item => getDayName(item.travel_date) === day);
        return found ? found.travel_count : 0;
    });

    return {
        labels: orderedDays,
        datasets: [
            {
                label: 'número de viajes',
                data: dataset,
                backgroundColor: 'rgba(82, 82, 82, 1)',
                borderColor: 'rgba(82, 82, 82, 1)',
                borderWidth: 1,
                barThickness: 10,
            }
        ]
    };
};

const WeekChart: React.FC = () => {
    const todayDate = useMemo(() => new Date().toISOString().split('T')[0], []);
    const kitId = useParams()[0];
    const [jsonData, setJsonData] = useState<{ data: { travel_date: string, travel_count: number }[] }>({ data: [] });
    const data = useMemo(() => createDataset(jsonData.data, todayDate), [jsonData.data, todayDate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get(apiGraphUrl, 'graphics/travels-week/' + kitId);
                
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
                    text: 'días',
                    color: 'rgba(82, 82, 82, 1)',
                    font: {
                        size: 14,
                        family: 'Fugaz One'
                    }
                }
            },
            y: {
                ticks: {
                    color: 'rgba(82, 82, 82, 1)',
                    stepSize: 4
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                title: {
                    display: true,
                    text: 'número de viajes',
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
            <span>Viajes en la semana</span>
            <div className='yellow-container'>
                <Bar data={data} options={options} height={300} />
            </div>
        </>
    );
};

export default WeekChart;