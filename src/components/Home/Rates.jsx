import React from 'react';

const Rates = (props) => {

    const rates = [
        {
            interestRate: 4.5,
            months: 3,
            for: "student"
        },
        {
            interestRate: 4,
            months: 3,
            for: "normal"
        },
        {
            interestRate: 4.6,
            months: 3,
            for: "senior"
        },
        {
            interestRate: 5,
            months: 6,
            for: "student"
        },
        {
            interestRate: 4.7,
            months: 6,
            for: "normal"
        },
        {
            interestRate: 5,
            months: 6,
            for: "senior"
        },
        {
            interestRate: 5.5,
            months: 9,
            for: "student"
        },
        {
            interestRate: 5.2,
            months: 9,
            for: "normal"
        },
        {
            interestRate: 5.6,
            months: 9,
            for: "senior"
        },
        {
            interestRate: 6,
            months: 12,
            for: "student"
        },
        {
            interestRate: 5.9,
            months: 12,
            for: "normal"
        },
        {
            interestRate: 6.2,
            months: 12,
            for: "senior"
        },
    ];
    
    const renderRates = rates.map((rate, id) => {
        if(rate.for === props.for){
            return(
                <tr key={id}>
                    <td className='duration'>{rate.months} Months</td>
                    <td>{rate.interestRate}</td>
                </tr>
            );
        }
        return null;
    });
    
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>{props.for} {props.for === "senior" ? "Citizens" : ""}</th>
                </tr>
                <tr>
                    <th>Duration</th>
                    <th>Intereset</th>
                </tr>
                {renderRates}
            </thead>
            <tbody></tbody>
        </table>
    );
}

export default Rates;