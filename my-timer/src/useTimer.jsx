import React, {useState, useEffect} from 'react'

const useTimer = (targetDate) => {
    const[countDownDate, setCountDownDate] = useState(targetDate)
    const[timeLeft, setTimeLeft] = useState({})

    const getTime = () => {
        const timeLeft = countDownDate - new Date().getTime()
        const seconds = Math.floor((timeLeft/1000) % 60)
        const minutes = Math.floor((timeLeft/1000/60) % 60)
        const hours = Math.floor((timeLeft/1000/60/60) % 24)
        const days = Math.floor(timeLeft/1000/60/60/24)
        return [days, hours, minutes, seconds]
    }

    useEffect(()=>{
        let intervalId = setInterval(()=>{
            let [days, hours, minutes, seconds] = getTime()
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            })
        }, 1000)

        return () =>{
            clearInterval(intervalId)
        }
    },[countDownDate])

    return timeLeft
}

export default useTimer