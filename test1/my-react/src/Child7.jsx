import React, { useEffect, useState } from 'react'

const NUMBER_LENGTH = 13

const Child7 = () => {
   const [phone, setPhone] = useState("")

   const onChangeHandler = (e) =>{
    let phone = fomatPhone(e.target.value)
    setPhone(phone)
   }

   const fomatPhone = (val) => {
    const rawString = val.replace(/\D/g, '')
    let output=''
    console.log(rawString)  
    
    if(rawString.length > 0){
        output += "("
        output += rawString.substring(0,3)  
    }
    if(rawString.length > 3){
        output += ")"
        output += rawString.substring(3,6)  
    }
    if(rawString.length > 6){
        output += "-"
        output += rawString.substring(6,10)  
    }
    return output
   }

   const onSubmitHandler = (e) =>{
    setPhone("")
   }

   return(
    <div className='phone-container'>
        <input 
        type="text" 
        name="phone" 
        placeholder='(555)555-5555' 
        onChange={(e) => onChangeHandler(e)} 
        value={phone}/>
        <button 
        type="submit"
        disabled={phone.length < NUMBER_LENGTH}
        onClick={onSubmitHandler}
        >Submit</button>
    </div>
   )
}

export default Child7