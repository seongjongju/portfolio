import React from 'react';
import styles from 'src/assets/styled/about.module.css';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StackChart = ({
    dataArray,
    backgroundColorArray,
    text,
    icon
}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        events: [],
        plugins: {
            legend: {
                position: "top",
            },
            tooltip: {
                enabled: false 
            }
        },
        cutout: '70%'
    };

    const data = {
        //labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: dataArray,
                backgroundColor: backgroundColorArray,
                borderWidth: 0,
            },
        ],
    };
    
    return (
        <div className={styles.stack_wrap}>
            <div className={styles.stack_item}>
                <figure className={styles.icon_box}>
                    <img src={icon} alt={text} className={styles.icon}/>
                </figure>
                <p className={styles.stack_text}>{text}</p>
            </div>
            <Doughnut 
                data={data} options={options}
            />
        </div>
    );
};

export default StackChart;