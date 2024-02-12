import React from 'react';

const Rates = (props) => {
    
    const renderRates = props.rates.map((rate, id) => {
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