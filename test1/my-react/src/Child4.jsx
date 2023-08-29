import React, { useState, useEffect } from 'react'
const url = "https://jsonplaceholder.typicode.com/users/1"
const Child4 = () => {

    const [user, setUser] = useState({})
    const [cad, setCad] = useState(0)
    const [usd, setUsd] = useState(0)

    const fetchData = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            setTimeout(()=>{
                setUser(data)
            },0)
            
        }catch(err){
            console.log(err)
        }
       
    }

    useEffect(()=>{
        fetchData(url)
    },[])

    if(Object.keys(user).length === 0){
       return <h1>Loading....</h1>
    }

    const onChnageHandler = (e)=>{
        if(e.target.value === "") {
            console.log("aya")
            setCad(0)
            setUsd(0)
            return
        }
        if(e.target.name === 'usd'){
            setCad(parseInt(e.target.value) * 1.3)
            setUsd(parseInt(e.target.value))
        }else{
            setCad(parseInt(e.target.value))
            setUsd(parseInt(e.target.value)/1.3)
        }
    }

  return (
    <div>
        <h1>User Data</h1>
        <p>Name: {user.name}</p>
        <p>Website: {user.website}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <input type='text' name='cad' onChange={(e) => onChnageHandler(e)} placeholder='cad' value={cad}/>
        <input type='text' name='usd' onChange={(e) => onChnageHandler(e)} placeholder='usd' value={usd}/>
    </div>
  )
}

export default Child4