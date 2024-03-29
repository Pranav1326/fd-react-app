import React from 'react';
import './currentrates.css';
import { deleteRate } from '../../../api/fdApi';

const CurrentRates = (props) => {
    
    const handleDelete = (rateId) => {
        const data = {
            userId: props.user._id,
            rateId: rateId
        }
        deleteRate(data, props.setRatesUpdated);
    }
    
    const renderRates = props.rates && props.rates.sort((x, y) => x.months-y.months).map(rate => {
        if(rate.for === props.for){
            return(
                <tr key={rate._id}>
                    <td className='duration'>{rate.months} Months</td>
                    <td>{rate.interestRate}</td>
                    <td>{rate.createdBy.admin.split(".")[1]}</td>
                    <td className='edit-btn-box'><button onClick={() => handleDelete(rate._id)}>Delete</button></td>
                    {/* <tr className='actions'>
                        <td className='edit-btn-box'><button>Edit</button></td>
                    </tr> */}
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