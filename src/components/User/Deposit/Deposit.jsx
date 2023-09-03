import React, { useState } from 'react';
import './deposit.css';
// import CardChipImage from '../../../images/credit-card.png';
// import CardRupayImage from '../../../images/Rupay.png';

const Deposit = () => {

  const [ amount, setAmount ] = useState('');
  const [ showAlert, setShowAlert ] = useState(false);

  const handleWithdraw = () => {
    if(amount<100 || amount>1000000){
      setShowAlert(true);
    }
    else{
      alert("Success");
    }
  }

  const handleChange = e => {
    setAmount(e.target.value);
  }

  return (
    <div className='deposit-main'>
      <h1 className='heading-main'> Deposit Cash </h1>
      <div className="box-card-details">
        {/* Card */}
        {/* <div className="card">
          <a href="https://icons8.com/icon/3559/chip-card"> </a>
          <div className="card-images">
            <img className='card-chip' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGUlEQVR4nO1ZzY9URRDvECBC8IzKwhEVJXpQuKjhIAmKf4/r18l4Q0DUQNgL8eMfEEzABJisEpjufV7MyGzViMO+qtmw4EVFvmT3merXPc7uyrz3usdlQ94v2WRnUl1Vv66P7qlWqkaNGkG4BLPPauAPNNIPBpkN0t8GOVvJP418T2yLDxr4/WS690xpAsmV3jYD/LUGml9px00RMaB5DfxVE2lsKAkN6Wsa6YZdCHxLIx/XnXTfRUi3NBrZWrXCaDSytWLbTNMb4ov45Ahdb0Lv1SEk+K4T/KaQ9UNAE2lMA510aXd3GRlJJx8JDfxJlmVr1CpFlmVrDPKRfmQGN1xqwkdiNZPwEB99ZAzyFwPdieYl/5amU6vVWq+Rppd3E/rTIJ9rAu1XI4JGfkt0aqSb0qWK5E2Ht9o6Ft/b/LSSFuty7vhSYUekPbSbAH0YS8IgfbRYL31fbh1POB/eUxrpgiXSSfeVNfxje+YpjTTum8MU0JuRkciLF3tvi+6ya8Vun7gBJvkQ0qWEjFN0VgXCAJ936Tpeea2kV17bqXKnZxZyTsjuudD+XnVt3xmkP0RHlUh4JEmyzt8AlM9LFQBPRFq3CoRB+k10JJevPhm23vkfQ0QjveNuAWdC1ltHgL4LTa1oIpeuXNvsi10DLRjg11UgprC3V3RYXUjjutt9IopI4CVuQaISSqLvDNC7dkMw3JcoIlMd2qNGBNFlRkGk0g5G1NWo9ZqaiKojUghTpxbXxZ7VXWsITF0j/AjWiAm5ayF91gR6IZaABn5RdJmHdddyF8d5A3Ss0e0+VpXAxTTdYIeAI5hqqpBwJr3exilIdxmkg376Jz9Zq5AREgZ50q29pZEO6PbMS/J9FV+iiAxCxkkGqZs7REfLrrMjUGubfq00nP6/iAiaOLvDzZgWkna6s1RNyG8ZoL9kI2JsG+9/zPBhiXOHXAP4vNA40FEneyDGZrJo+BAxDhpEXjM2vX4ukvVDP6mJGJtm8TjIPuRkMrqPUXqhfeNxt8s3i2RFRmRbrblNMTabQPtdak0OHZmGECkz4xKZURAxgyNT6RgPGmJXQQK0223IT4UOALfyLEhfDrVn8iH2bfuKdZm32y818Jcu106GPito4MOunX5c6IScP7nswYg3km+djhNLX4Kuu3w7UpWM7sw8J7sjD6byfyGRX9LnDdD9PAtmdwSQ+NSl1NyyUas8Y/npugE6JaErTcIdiBKVsg75VydZW5aMybuUjYQGvpNM9175T0FLxkcmv3pMSGeQiEnP9nJSpFITNp1sJKz86UGZIsjbi4xa+1cU4EOic7ABiD6x7brTxL+2aO6BJPpkkMbkOWu1Pk8bpBOVJvfynCVtzV7sgMnfAFbUceR77sCetGNV351q1KihquIfjfhn9b3iRikAAAAASUVORK5CYII=" alt='card-chip'></img>
            <img src={CardRupayImage} className='card-rupay' alt="" />
          </div>
          <pre className='number-of-card'>{cardData.cardNumber}</pre>
          <div className="card-lower-details">
            <pre className='name-on-card'>{cardData.cardName}</pre>
            <div className='card-dates'>
              <p className='valid-thorough-text'>Valid <br /> Thru</p>
              <pre className='validity-of-card'>{cardData.date1}/{cardData.date2}</pre>
            </div>
          </div>
        </div> */}
        <div className="details">
          {/* <h1>Card Details</h1> */}
          {/* Name on Card */}
          {/* <div className="card-name">
            <span>Name on Card</span>
            <input type="text" className='card-input-value' maxLength={"23"} value={cardData.cardName} onChange={handleChange} name='cardName' />
          </div> */}
          {/* Card Number */}
          {/* <div className="card-number">
            <span>Card Number</span>
            <input
              type="tel"
              className='card-input-value'
              inputMode='numeric'
              name='cardNumber'
              maxLength="16"
              minLength="16"
              value={cardData.cardNumber}
              onChange={handleChange}
              onInput={(e) => {
                // e.target.value = e.target.value.replace(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/);
                e.target.value.replace(/(\d{4}(?!\s))/g, "$1 ");
                // e.target.value = e.target.value.match(/(\d{4})/g).join(" ");
              }}
            />
          </div> */}
          <div className="card-date-cvv">
            {/* Card Valid Date */}
            <div className="card-date">
              {/* <span>Valid Through</span> */}
              <div className="date-inputs">
                {/* <input 
                  type="text" 
                  className='card-input-value-date-1' 
                  inputMode='numeric' 
                  name='date1' 
                  value={cardData.date1}
                  onChange={handleChange}
                  onInput={(e) =>  {
                    e.target.value = e.target.value.replace(/[^0-9]/g,'')
                  }}
                  maxLength='2'
                  minLength='2'
                /> */}
                {/* <select className='card-input-value-date-1' value={cardData.date1} onChange={handleChange} name="date1">
                  <option defaultValue="0">Select</option>
                  <option value="01">Jan</option>
                  <option value="02">Feb</option>
                  <option value="03">Mar</option>
                  <option value="04">Apr</option>
                  <option value="05">May</option>
                  <option value="06">Jun</option>
                  <option value="07">Jul</option>
                  <option value="08">Aug</option>
                  <option value="09">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select> */}
                {/* <input 
                  type="text" 
                  className='card-input-value-date-2' 
                  inputMode='numeric' 
                  name='date2' 
                  value={cardData.date2}
                  onChange={handleChange}
                  onInput={(e) =>  {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '')
                  }}
                  maxLength='2'
                  minLength='2'
                /> */}
                {/* <select className='card-input-value-date-2' value={cardData.date2} onChange={handleChange} name="date2">
                  <option defaultValue="0">Select</option>
                  <option value="23">2023</option>
                  <option value="24">2024</option>
                  <option value="25">2025</option>
                  <option value="26">2026</option>
                  <option value="27">2027</option>
                  <option value="28">2028</option>
                  <option value="29">2029</option>
                  <option value="30">2030</option>
                </select> */}
              </div>
            </div>
            {/* CVV */}
            {/* <div className="card-cvv">
              <span>CVV</span>
              <input
                type="text"
                className='card-input-value'
                inputMode='numeric'
                name='cardNumber'
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '')
                }}
                maxLength='3'
                minLength='3'
              />
            </div> */}
          </div>
          {/* Deposit Amount */}
          <div className="deposit-amount">
            <span>Amount In Rupee</span>
            <input
              type="number"
              className='card-input-value'
              inputMode='numeric'
              name='amount'
              value={amount}
              onChange={handleChange}
            />
          </div>
          { showAlert ? <span className='alert'>*Please enter between 100₹ to 10,00,000₹</span> : "" }
          <div className="deposit-btn-div">
            <button className='deposit-btn' onClick={handleWithdraw}>DEPOSIT CASH</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit