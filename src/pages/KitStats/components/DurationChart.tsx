import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import ArrowLeft from '../../../components/ArrowLeft';
import ArrowRight from '../../../components/ArrowRight';

export default function DurationChart() {

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
                label: 'minutos',
                data: [19, 38, 25, 13, 29, 43, 19],
                backgroundColor: 'rgba(247, 183, 49, 1)',
                borderColor: 'rgba(247, 183, 49, 1)',
                borderWidth: 1,
                barThickness: 10,
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
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'Fugaz One'
                    }
                },
                ticks: {
                    color: 'white'
                },
            },
            y: {
                ticks: {
                    color: 'white',
                    stepSize: 10
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.4)',
                },
                title: {
                    display: true,
                    text: 'minutos',
                    color: 'white',
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
            <span>Duración de viajes por día</span>
            <div className='slider'>
                <button className='arrow-button' onClick={prevWord}>
                    <ArrowLeft color='#FFFFFF' className='arrow' />
                </button>
                <span>{days[currentIndex]}</span>
                <button className='arrow-button' onClick={nextWord}>
                    <ArrowRight color='#FFFFFF' className='arrow' />
                </button>
            </div>
            <div className='black-container'>
                <Bar data={data} options={options} height={300} />
            </div>
        </>
    );
}