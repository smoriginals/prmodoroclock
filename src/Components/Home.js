import React from 'react';
import '../App.css';


export default function Home() {
    return (
        <>
            <div className='container-fluid d-flex justify-content-center mt-2'>
                <h1>PRMODORO CLOCK</h1>
            </div>
            <div className='container-fluid d-flex justify-content-center mt-2'>

                <div className="navbar d-flex">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="H" />
                            <input className="form-control me-2" type="search" placeholder="H" />
                            <input className="form-control me-2" type="search" placeholder="M" />
                            <input className="form-control me-2" type="search" placeholder="M" />
                            <input className="form-control me-2" type="search" placeholder="S" />
                            <input className="form-control me-2" type="search" placeholder="S" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-center mt-2'>
                <button type="button" className="btn btn-danger">Reset</button>
                <button type="button" className="btn btn-primary">Start</button>

            </div>
        </>
    )
}