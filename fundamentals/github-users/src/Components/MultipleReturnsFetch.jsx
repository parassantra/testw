import React, { useEffect, useState } from 'react'
const url = 'https://reqres.in/api/users/2';

const MultipleReturnsFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUserDetails = async() =>{
            try{
                const data = await fetch(url)
                const res = await data.json()
                if(data.status !==200){
                    setError(true)
                    setIsLoading(false)
                    return
                }
                setUser(res)
            }catch(err){
                setError(true)
            }
            setIsLoading(false)
        }

        fetchUserDetails()
    }, [])

    if(isLoading){
        return "Loading ...."
    }

    if(error){
        return "An Error occured ...."
    }
    return (
        <div className='single-user'>
            <img src={user?.data?.avatar} alt='user-pic'/>
            <div className="single-user-info">
                <h3>{user?.data?.first_name}</h3>
                <h5>Email at {user?.data?.email}</h5>
                <p>{user?.support?.text}</p>
            </div>
        </div>
    )
}

export default MultipleReturnsFetch