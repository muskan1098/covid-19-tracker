import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
 

const Charts = ({ data, country}) => {
    // states
    const [dailyData, setDailyData] = useState([]);

    // useEffect
    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        setDailyData(await fetchDailyData());
    }

    const lineChart = (
        dailyData.length ? (
            <Line 
            data={{
                labels: dailyData.map(({ date } ) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                } ],
            }}/>): null
        )

        const barChar = (
            data.confirmed
            ? (
                <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor:['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)'],
                    data:[data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend: {display:false},
                    title: { display:true, text:`current state in ${country}`},
                }}/>
            ): null
        );
    

    return(
    <div className="container">
        {country ? barChar:lineChart}
    </div>
    )
}

export default Charts;