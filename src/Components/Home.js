import React, { useState } from 'react';
import '../App.css';


export default function Home(props) {

    const [days, setDays] = useState(1);
    const [hour, setHour] = useState(24);
    const [min, setMin] = useState(59);
    const [sec, setSec] = useState(59);

    const Reset = () => {
        setDays(0);
        setHour(0);
        setMin(0);
        setSec(0);
    }
    const Start = () => {
        console.log('Alex');
    }
    const HourPlus = () => {
        if (days >= 1) {
            setHour(hour + 2);
        }
    }


}
const HourMines = () => {
    if (hour >= 2) {
        setHour(hour - 2);
    }

}
const MinPlus = () => {
    setMin(min + 5);

}
const MinMines = () => {
    setMin(min - 5);
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

