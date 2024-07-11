import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function QuadrantChart() {

    const data = {
        labels: ['NE', 'SE', 'SO', 'NO'],
        datasets: [
            {
                label: 'cuadrantes',
                data: [40, 60, 40, 60],
                backgroundColor: [
                    'rgb(247, 183, 49, 1)',
                    'rgba(249, 197, 90, 1)',
                    'rgba(250, 212, 131, 1)',
                    'rgba(252, 226, 173, 1)',
                ],
                borderColor: [
                    'rgba(247, 183, 49, 1)',
                    'rgba(249, 197, 90, 1)',
                    'rgba(250, 212, 131, 1)',
                    'rgba(252, 226, 173, 1)',
                ],
                borderWidth: 1,
                rotation: 0
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white',
                },
            },
        },
    };

    return (
        <>
            <span>Viajes por cuadrante</span>
            <div className='pie-container'>
                <Pie data={data} options={options} />
            </div>
        </>
    );
};