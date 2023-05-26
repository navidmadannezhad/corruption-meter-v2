'use client'

import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

interface Props{
    xData: any;
    yData: any;
    color: string;
}

const Chart = ({ xData, yData, color }: Props) => {
    ChartJS.register(...registerables);

    const chartData = {
        labels: yData,
        datasets: [
            {
                data: xData,
                borderColor: color,
                borderWidth: 1,
                tension: 0.5
            }
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        }
    }

    return(
        <Line data={chartData} options={options} />
    )
}

export default Chart;