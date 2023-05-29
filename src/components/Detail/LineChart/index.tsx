'use client'

import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import useBreakPoint from "@hooks/useBreakPoint";

interface Props{
    xData: any;
    yData: any;
    color: string;
}

const LineChart = ({ xData, yData, color }: Props) => {
    ChartJS.register(...registerables);
    const isMobile = useBreakPoint(1278);

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
        maintainAspectRatio: !isMobile,
        plugins: {
            legend: {
                display: false,
            }
        }
    }

    return(
        <Chart type="line" data={chartData} options={options} height={150} />
    )
}

export default LineChart;