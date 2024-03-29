import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import fdHand from '../../images/fd_hand.png';
import paisa from '../../images/paisa.png';
import money from '../../images/money.png';
import Rates from './Rates';
import { getUserRates } from '../../api/fdApi';

const Home = () => {
    const ref = useRef(null);

    const [ normalRates, setNormalRates ] = useState(null);
    const [ studentRates, setStudentRates ] = useState(null);
    const [ seniorRates, setSeniorRates ] = useState(null);
    
    useEffect(() => {
        getUserRates({ user: "normal" }, setNormalRates);
        getUserRates({ user: "student" }, setStudentRates);
        getUserRates({ user: "senior" }, setSeniorRates);
    }, []);
    
    return (
        <div className='home-main'>
            <div className="section-main">
                <div className="title-text-images">
                    <div className="title-text-div">
                        <h1 className='welcome-title'>Welcome to FD Center. </h1>
                        <p className='welcome-text'>Here you can place your money in Fix Deposits safely</p>
                        <p className='welcome-text'>at good interests.</p>
                        <br />
                        <hr className='hr'/>
                        <p className='welcome-text-2'>Here you can Create Fixed Deposits at high 🔺 interest rates 📈</p>
                        <p className='welcome-text-2'>You can easily deposit cash 💵 and create an FD 🧾</p>
                        <p className='welcome-text-2'>As well as you can withdraw cash anytime 🏪</p>
                        <p className='welcome-text-2'>Manage FDs with ease 🫰🏼</p>
                        <button className='welcome-btn' onClick={() => {ref.current.scrollIntoView({ behavior: 'smooth' })}}>
                            Get Started
                        </button>
                    </div>
                    <div className="hero-images">
                        <img src={fdHand} className="fdHand-img" alt="FD" />
                        <img src={money} className="money-img" alt="FD" />
                        <img src={paisa} className="paisa-img" alt="FD" />
                    </div>
                </div>
            </div>
            <hr className='hr-sec'/>
            <div id="sectionTwo" ref={ref}>
                {/* Student Rates Table */}
                { studentRates && <Rates rates={studentRates} for={"student"}/>}
                {/* Public Rates Table */}
                { normalRates && <Rates rates={normalRates} for={"normal"}/>}
                {/* Senior Rates Table */}
                { seniorRates && <Rates rates={seniorRates} for={"senior"}/>}
            </div>
        </div>
    );
}

export default Home;