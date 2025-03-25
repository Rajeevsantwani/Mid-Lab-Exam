import React, { useState } from 'react'
import './CountdownSwitch.css'

const CountdownSwitch = () => {

    const [state,setState] = useState(true);

    const [count,setCount] = useState(30);

    if(state)
    {


    }

    function handleCLick()
    {
        setInterval(()=>{
            if(count>=0)
            {
                setCount(count-1)
            }
        },1000);
    }

    function handleChange()
    {
        console.log("changed");
    }


  return (
    <div>
      <div className="container">
    {/* <!-- Header with Title and Theme Toggle --> */}
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle" onChange={handleChange}/>
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    {/* <!-- Timer and Progress Section --> */}
    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">{count}</div>
      <div className="btn-group">
        <button id="startButton" onClick={handleCLick}>Start Timer</button>
        <button className = "resetButton">Reset Timer</button>
        {/* <button key="startButton">Start Timer</button> */}
        {/* <button key="resetButton" style="display: none;">Reset Timer</button> */}
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>


    </div>
  )
}

export default CountdownSwitch
