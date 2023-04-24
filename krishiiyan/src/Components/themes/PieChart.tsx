import React from 'react';
import { Chart as ChartJS, ArcElement} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
// .............................made with React-ChartJs-2 and chartjs .......................................
export default function Piegraph() {
    return (
        <div className=' '>
            <Pie data={data}  width={250} height={250}/>
        </div>
    );
}

