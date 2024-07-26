import { useState, useEffect, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, ChartOptions } from 'chart.js';
import { get, apiGraphUrl } from '../../../services/fetchApi';
import { useParams } from 'wouter';


ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface QuadrantData {
  NE: number;
  NO: number;
  SE: number;
  SO: number;
}

const COLORS = [
  'rgba(247, 183, 49, 1)',
  'rgba(249, 197, 90, 1)',
  'rgba(250, 212, 131, 1)',
  'rgba(252, 226, 173, 1)',
];

const CHART_OPTIONS: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'white',
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.parsed || 0;
          return `${label}: ${value.toFixed(1)}%`;
        },
      },
    },
  },
};

export default function QuadrantChart(): JSX.Element {
  const [quadrantData, setQuadrantData] = useState<QuadrantData | null>(null);
  const kitId = useParams()[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(apiGraphUrl, 'graphics/travels-quadrant/' + kitId);

        setQuadrantData(response.data);
      } catch (error) {
        console.error('Error fetching quadrant data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = useMemo(() => {
    if (!quadrantData) return null;

    const labels = Object.keys(quadrantData) as (keyof QuadrantData)[];
    const data = labels.map(key => quadrantData[key]);

    return {
      labels,
      datasets: [{
        label: 'Cuadrantes',
        data,
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1,
      }],
    };
  }, [quadrantData]);

  if (!chartData) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <span>Viajes por cuadrante</span>
      <div className='pie-container'>
        <Pie data={chartData} options={CHART_OPTIONS} />
      </div>
    </>
  );
}