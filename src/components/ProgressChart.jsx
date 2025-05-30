// src/components/ProgressChart.jsx
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.fecha),
    datasets: [
      {
        label: 'Progreso (%)',
        data: data.map(d => d.progreso),
        borderColor: '#4CAF50',
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ProgressChart;
