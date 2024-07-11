import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import ArrowLeft from '../../../components/ArrowLeft';
import ArrowRight from '../../../components/ArrowRight';

export default function CalifChart() {

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextWord = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % days.length);
    };
    const prevWord = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + days.length) % days.length);
    };

    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                label: 'calificación',
                data: [90, 75, 80, 90, 70, 65, 90],
                fill: false,
                backgroundColor: 'rgba(82, 82, 82, 1)',
                borderColor: 'rgba(82, 82, 82, 1)',
                tension: 0,
            },
        ],
    };

    const options = {
        responsive: true,

        scales: {
            x: {
                title: {
                    display: true,
                    text: 'viajes',
                    color: 'rgba(82, 82, 82, 1)',
                    font: {
                        size: 14,
                        family: 'Fugaz One'
                    }
                }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    color: 'rgba(82, 82, 82, 1)',
                    stepSize: 20,
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                title: {
                    display: true,
                    text: 'calificación',
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
    };

    return (
        <>
            <span>Calificación por viajes</span>
            <div className='slider'>
                <button className='arrow-button' onClick={prevWord}>
                    <ArrowLeft color='#FFFFFF' className='arrow' />
                </button>
                <span>{days[currentIndex]}</span>
                <button className='arrow-button' onClick={nextWord}>
                    <ArrowRight color='#FFFFFF' className='arrow' />
                </button>
            </div>
            <div className="yellow-container">
                <Line data={data} options={options} height={300} />
            </div>
        </>
    );
};