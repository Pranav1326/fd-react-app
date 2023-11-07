import React from 'react';
import './currentrates.css';

const CurrentRates = (props) => {

    const rates = [
        {
            interestRate: 4.5,
            months: 3,
            for: "student",
            createdBy: "Pranav"
        },
        {
            interestRate: 4,
            months: 3,
            for: "normal",
            createdBy: "Pranav"
        },
        {
            interestRate: 4.6,
            months: 3,
            for: "senior",
            createdBy: "Pranav"
        },
        {
            interestRate: 5,
            months: 6,
            for: "student",
            createdBy: "Pranav"
        },
        {
            interestRate: 4.7,
            months: 6,
            for: "normal",
            createdBy: "Pranav"
        },
        {
            interestRate: 5,
            months: 6,
            for: "senior",
            createdBy: "Pranav"
        },
        {
            interestRate: 5.5,
            months: 9,
            for: "student",
            createdBy: "Pranav"
        },
        {
            interestRate: 5.2,
            months: 9,
            for: "normal",
            createdBy: "Pranav"
        },
        {
            interestRate: 5.6,
            months: 9,
            for: "senior",
            createdBy: "Pranav"
        },
        {
            interestRate: 6,
            months: 12,
            for: "student",
            createdBy: "Pranav"
        },
        {
            interestRate: 5.9,
            months: 12,
            for: "normal",
            createdBy: "Pranav"
        },
        {
            interestRate: 6.2,
            months: 12,
            for: "senior",
            createdBy: "Pranav"
        },
    ];

    const renderRates = rates.map((rate, id) => {
        if(rate.for === props.for){
            return(
                <tr key={id}>
                    <td className='duration'>{rate.months} Months</td>
                    <td>{rate.interestRate}</td>
                    <td>{rate.createdBy}</td>
                    <tr className='actions'>
                        <td className='edit-btn-box'><button>Edit</button></td>
                        <td className='edit-btn-box'><button>Delete</button></td>
                    </tr>
                </tr>
            );
        }
        return null;
    });
    
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={4}>{props.for} {props.for === "senior" ? "Citizens" : ""}</th>
                </tr>
                <tr>
                    <th>Duration</th>
                    <th>Intereset</th>
                    <th>Created By Admin</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderRates}
            </tbody>
        </table>
    );
}

export default CurrentRates;