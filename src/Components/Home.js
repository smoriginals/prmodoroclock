import React, { useState, useRef } from 'react';
import '../App.css';

export default function Home(props) {

    //Ref to store interval ID so we can clear it later

    const counts = useRef(null);

    //state veriables for days,hours,mins,secs

    const [days, setDays] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(59);

    //Start Countdown timer

    function Testing(secs) {

        //clear existing interval if any

        if (counts.current) {
            clearInterval(counts.current);
        }

        const now = Date.now();
        const then = now + secs * 1000; //Target end time in milisecs

        //Show initial Time

        Timeleft(secs)

        //Update timer every sec

        counts.current = setInterval(() => {
            const secLeft = Math.round((then - Date.now()) / 1000);

            //Stop timer when time is up

            if (secLeft < 0) {
                clearInterval(counts.current);
                return;
            }
            Timeleft(secLeft);

        }, 1000)

    }
    //Convert sec,days,hours, and mins.
    function Timeleft(seconds) {
        const days = Math.floor(seconds / 86400);
        const hrs = Math.floor(seconds / 3600);
        const min = Math.floor((seconds % 3600) / 60);
        const secRem = seconds % 60;

        const display = `${min}:${secRem < 10 ? '0' : ''}${secRem}`;

        //State Handle

        setDays(days);
        setHour(hrs);
        setMin(min);
        setSec(secRem);
    }
    //Start Time Handleing

    const Start = () => {

        const totalsec = hour * 3600 + min * 60 + sec;
        if (totalsec <= 0) {
            alert('Please Enter the Positive No');
            return;
        }
        Testing(totalsec);

    }

    //Handle Reset

    const Reset = () => {
        clearInterval(counts.current);
        setDays(0);
        setHour(0);
        setMin(0);
        setSec(0);
    }

    //Increase Days

    const HourPlus = () => {
        setHour(hour + 1);
    }

    //Decrease Hours

    const HourMines = () => {
        setHour(prev => Math.max(prev - 1, 0));
    }

    //Increase Minutes

    const MinPlus = () => {
        setMin(min + 5);

    }

    //Decrease Minutes

    const MinMines = () => {
        setMin(prev => Math.max(prev - 5, 0));
    }

    return (
        <>
            <div className='bgc d-flex justify-content-center align-items-center flex-wrap'>
                <div className='circle d-flex justify-content-center align-items-center flex-wrap'>
                    <h1>{days}:</h1>
                    <h1>{hour}:</h1>
                    <h1>{min}:</h1>
                    <h1>{sec}</h1>
                </div>
                <div className='container'>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-1">
                        <button className="btn btn-success" type="button"><i className="fa-solid fa-chevron-up" onClick={HourPlus} ></i></button>
                        <button className="btn btn-danger" type="button"><i className="fa-solid fa-chevron-down" onClick={HourMines}></i></button>
                        <button className="btn btn-success" type="button"><i className="fa-solid fa-chevron-up" onClick={MinPlus}></i></button>
                        <button className="btn btn-danger" type="button"><i className="fa-solid fa-chevron-down" onClick={MinMines}></i></button>
                        <div className="d-grid">
                            <button className="btn btn-info  m-1 bb" type="button" onClick={Start}>Start</button>
                            <button className="btn btn-warning m-1 bb" type="button" onClick={Reset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

