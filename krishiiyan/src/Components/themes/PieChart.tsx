import React from 'react';
import { Chart as ChartJS, ArcElement} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [20, 25, 16, 15, 20],
            backgroundColor: ['#B87333', '#C2B280', '#2AAA8A', '#40E0D0', '#00FFFF'],
            borderColor: ['#B87333', '#C2B280', '#2AAA8A', '#40E0D0', '#00FFFF'],
            borderWidth: 1,
        },
    ],
};
// .............................made with React-ChartJs-2 and chartjs .......................................
export default function Piegraph() {
    return (
        <div className=' '>
            <Pie data={data}  width={250} height={250}/>
        </div>
    );
}

