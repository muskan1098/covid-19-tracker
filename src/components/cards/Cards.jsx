import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import {CircularProgress}  from '@material-ui/core';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return <CircularProgress  />
    }
    return(
        <div className="styles.container d-flex flex-md-row flex-sm-column">
            <div className="card border-bottom border-primary m-3">
                <div className="card-body">
                    <h4 className="card-title">Infected</h4>
                    <CountUp 
                    start= {0} 
                    end = {confirmed.value}
                    duration = {2.5}
                    separator = ","
                    />
                    <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                    <p className="card-text">No. of active cases</p>
                </div>
            </div>
            <div className="card border-success m-3">
                <div className="card-body">
                    <h4 className="card-title">Recovered</h4>
                    <CountUp 
                    start= {0} 
                    end = {recovered.value}
                    />
                    <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                    <p className="card-text">No. of recovered cases</p>
                </div>
            </div>
            <div className="card border-danger m-3">
                <div className="card-body">
                    <h4 className="card-title">Deaths</h4>
                    <CountUp 
                    start= {0} 
                    end = {deaths.value}
                    />
                    <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                    <p className="card-text">No. of deaths cases</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;