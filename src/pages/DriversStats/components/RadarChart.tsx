import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Ticks, plugins } from 'chart.js';
import { color } from "chart.js/helpers";
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type props ={
  name: string
}



export default function RadarChart ({name}: props) {

  const data = {
    labels: ['aceleracion', 'inclinacion', 'valoracion', 'vel.angular', "desaceleracion", "vibracion"],
    datasets: [
      {
        label: name,
        data: [80, 90, 87, 92, 88, 95],
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