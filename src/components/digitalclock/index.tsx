import React from 'react'
import useTimer from '../hooks/useTimer'
import '../digitalclock/style.scss'

//Digital clock component to display the current time!
const DigitalClock = () => {
    //Custom Hook for date
    const date = useTimer();
  return (
    <div className="__digital__timer">
        {" "}
        {date.toLocaleTimeString("en-IT", { hour12: false })}
      </div>
  )
}

export default DigitalClock