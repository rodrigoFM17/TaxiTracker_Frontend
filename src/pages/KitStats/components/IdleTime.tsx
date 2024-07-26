import { useEffect, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useParams } from 'wouter';
import {get, apiGraphUrl} from '../../../services/fetchApi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

type BackendResponse = {
  total_durations: {
    [date: string]: number; // Suponiendo que la duración es un número
  };
};


export default function IdleTime() {
  const kitId = useParams()[0];
  const [backendResponse, setBackendResponse] = useState<BackendResponse>({ total_durations: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(apiGraphUrl, 'graphics/activity-time/' + kitId);
        console.log(response);

        setBackendResponse(response.data);
      } catch (error) {
        console.error('Error fetching duration data:', error);
      }
    }

    fetchData();
  }, []);

  const { labels, dataPoints } = useMemo(() => {
    const sortedEntries = Object.entries(backendResponse.total_durations).sort(([a], [b]) => a.localeCompare(b));
    return sortedEntries.reduce(
      (acc, [dateStr, duration]) => {
        const date = new Date(dateStr);
        const dayOfWeek = daysOfWeek[date.getDay()];
        acc.labels.push(dayOfWeek);
        // Asegúrate de que `duration` sea un número. Puedes usar `Number(duration)` si es necesario.
        acc.dataPoints.push(Number(duration));
        return acc;
      },
      { labels: [] as string[], dataPoints: [] as number[] }
    );
  }, [backendResponse.total_durations]);  

  const data = {
    labels,
    datasets: [
      {
        label: 'Tiempo (min)',
        data: dataPoints,
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
          text: 'Días',
          color: 'rgba(82, 82, 82, 1)',
          font: { size: 14, family: 'Fugaz One' },
        },
      },
      y: {
        ticks: { color: 'rgba(82, 82, 82, 1)', stepSize: 30 },
        grid: { color: 'rgba(255, 255, 255, 0.4)' },
        title: {
          display: true,
          text: 'Tiempo',
          color: 'rgba(82, 82, 82, 1)',
          font: { size: 14, family: 'Fugaz One' },
        },
      },
    },
    layout: {
      padding: { top: 0, left: 0, right: 20, bottom: 0 },
    },
  };

  return (
      <>
          <span>Tiempo de actividad</span>
          <div className="yellow-container">
              <Bar data={data} options={options} height={300} />
          </div>
      </>
  );
}