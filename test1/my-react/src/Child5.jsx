import React, { useEffect, useState } from 'react'

const Child5 = () => {
    const [tipObj, setTipObj] = useState({
        bill: 50,
        tipper: 18,
        noofpeople: 1,
        totalTip: 0,
        tipperperson: 0
    })
 
    useEffect(()=>{
        const{ bill, tipper, noofpeople} = tipObj;
        const tip = (bill * tipper)/100
       setTipObj((prevState) => ({
        ...prevState,
        totalTip: tip,
        tipperperson: tip/noofpeople
       }))
    }, [tipObj.bill, tipObj.tipper, tipObj.noofpeople])

    const onChangeHandler = (e)=>{
        const{ name, value} = e.target;
       setTipObj((prevState) => ({
        ...prevState,
        [name]: value
       }))
    }
  
  const {bill, tipper, noofpeople, totalTip, tipperperson} = tipObj
  return (
    <div className='form'>
        <label htmlFor='bill'>Label</label>
        <input
        onChange={(e) => onChangeHandler(e)} 
        type='number' name="bill" value={bill}></input>
        <label htmlFor='tipper'>Tip Percentage</label>
        <input 
        onChange={(e) => onChangeHandler(e)} 
        type='number' name="tipper" value={tipper}></input>
        <label htmlFor='noofpeople'>Number of people</label>
        <input 
        onChange={(e) => onChangeHandler(e)} 
        type='number' name="noofpeople" value={noofpeople}></input>
        <label>Total tip:</label>
        <div>{totalTip.toFixed(2)}</div>
        <label>Tip Per Person:</label>
        <div>{tipperperson.toFixed(2)}</div>
    </div>
  )
}

export default Child5