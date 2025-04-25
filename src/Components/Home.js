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
        setHour(hour + 2);
    }


    const HourMines = () => {
        setHour(hour - 2);
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

}



//import React, { useState, useEffect, useRef } from 'react';

//export default function Home() {
//    const [days, setDays] = useState(0);
//    const [hour, setHour] = useState(0);
//    const [min, setMin] = useState(0);
//    const [sec, setSec] = useState(10); // short for testing
//    const intervalRef = useRef(null); // to store interval ID

//    const tick = () => {
//        setSec(prev => {
//            if (prev > 0) return prev - 1;
//            else {
//                // handle minute change
//                if (min > 0 || hour > 0 || days > 0) {
//                    if (min > 0) {
//                        setMin(m => m - 1);
//                        return 59;
//                    } else if (hour > 0) {
//                        setHour(h => h - 1);
//                        setMin(59);
//                        return 59;
//                    } else if (days > 0) {
//                        setDays(d => d - 1);
//                        setHour(23);
//                        setMin(59);
//                        return 59;
//                    }
//                } else {
//                    clearInterval(intervalRef.current);
//                    return 0;
//                }
//            }
//        });
//    };

//    const Start = () => {
//        if (intervalRef.current) return; // avoid double interval
//        intervalRef.current = setInterval(tick, 1000);
//    };

//    const Reset = () => {
//        clearInterval(intervalRef.current);
//        intervalRef.current = null;
//        setDays(0);
//        setHour(0);
//        setMin(0);
//        setSec(0);
//    };

//    const HourPlus = () => setHour(h => h + 1);
//    const HourMines = () => setHour(h => Math.max(h - 1, 0));
//    const MinPlus = () => setMin(m => m + 5);
//    const MinMines = () => setMin(m => Math.max(m - 5, 0));

//    // Cleanup interval on component unmount
//    useEffect(() => {
//        return () => clearInterval(intervalRef.current);
//    }, []);

//    return (
//        <>
//            <div className='bgc d-flex justify-content-center align-items-center flex-wrap'>
//                <div className='circle d-flex justify-content-center align-items-center flex-wrap'>
//                    <h1>{days}:</h1>
//                    <h1>{hour.toString().padStart(2, '0')}:</h1>
//                    <h1>{min.toString().padStart(2, '0')}:</h1>
//                    <h1>{sec.toString().padStart(2, '0')}</h1>
//                </div>
//                <div className='container'>
//                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-1">
//                        <button className="btn btn-success" type="button"><i className="fa-solid fa-chevron-up" onClick={HourPlus}></i></button>
//                        <button className="btn btn-danger" type="button"><i className="fa-solid fa-chevron-down" onClick={HourMines}></i></button>
//                        <button className="btn btn-success" type="button"><i className="fa-solid fa-chevron-up" onClick={MinPlus}></i></button>
//                        <button className="btn btn-danger" type="button"><i className="fa-solid fa-chevron-down" onClick={MinMines}></i></button>
//                        <div className="d-grid">
//                            <button className="btn btn-info m-1 bb" type="button" onClick={Start}>Start</button>
//                            <button className="btn btn-warning m-1 bb" type="button" onClick={Reset}>Reset</button>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </>
//    );
//}
