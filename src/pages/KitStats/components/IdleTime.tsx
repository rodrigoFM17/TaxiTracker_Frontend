import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function IdleTime() {

    const data = {
        labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        datasets: [
            {
                label: 'tiempo',
                data: [7, 15, 10, 5, 11, 17, 7],
                backgroundColor: 'rgba(82, 82, 82, 1)',
                borderColor: 'rgba(82, 82, 82, 1)',
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
                    text: 'tiempo',
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
            <span>Tiempo inactivo</span>
            <div className='yellow-container'>
                <Bar data={data} options={options} height={300} />
            </div>
        </>
    );
} 