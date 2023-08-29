import React,{useEffect, useState} from 'react'
import useTimer from './useTimer'

const CountDownTimer = ({targetDate}) => {
    const val = useTimer(targetDate)

    const formatDate = (val) => {
      if(Object.keys(val).length === 0) {
        return "00:00:00"
      }
      let {days, hours, minutes, seconds} = val
      if(days < 10){
        days = `0${days}`
      }
      if(hours < 10){
        hours = `0${hours}`
      }
      if(minutes < 10){
        minutes= `0${minutes}`
      }
      if(seconds < 10){
        seconds = `0${seconds}`
      }
      return `${days}:${hours}:${minutes}:${seconds}`
    }

  return (
    <div>{formatDate(val)}</div>
  )
}

export default CountDownTimer