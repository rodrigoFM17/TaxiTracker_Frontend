import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend} from 'chart.js';
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type props ={
  name: string,
  driverData: any
}

export default function RadarChart ({name, driverData}: props) {
  const statsData = driverData.detailed_scores;

  const graphData = [statsData.acceleration, statsData.inclination_angle, statsData.g_force_x, statsData.g_force_y, statsData.angular_velocity, statsData.deceleration, statsData.vibrations];

  const data = {
    labels: ['Aceleración', 'Inclinación', 'Fuerza G en X', 'Fuerza G en Y', 'Vel.angular', "Desaceleración", "Vibración"],
    datasets: [
      {
        label: name,
        // data: [80, 90, 87, 92, 88, 95],
        data: graphData,
        backgroundColor: 'rgba(247, 183, 49, 0.5)',
        borderColor: 'rgba(247, 183, 49)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "black"
        },
        grid: {
          color: "black"
        },
        suggestedMin: 0,
        suggestedMax: 20,
        Ticks: {
          color: 'red',
        },
        pointLabels: {
          color: "white",
        }
      },
    },
    plugins: {
      legend:{
        labels:{
          color: "white"
        }
      }
    }
  };

    return <Radar data={data} options={options} />
} 