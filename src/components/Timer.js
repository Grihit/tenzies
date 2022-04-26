import React from 'react'

export default function Timer(props){
    const [time,setTime] = React.useState('00')
    React.useEffect(()=>{
        let interval = null;
        let seconds = 0;
        let minutes = 0;
        interval = setInterval(()=> {
            seconds = seconds + 1;
            if(seconds>59){
                minutes=minutes + 1;
                seconds=1;
            }
            setTime(`${minutes ? (minutes+":") : ''}${seconds<10 ? "0"+seconds : seconds}`)
        }, 1000)
    if(props.tenzies){
        localStorage.setItem("current", time)
        const least = localStorage.getItem("least")
        let leastNum = least
        if(least!==null){
            const leastArr = least.split(":")
            if(leastArr.length===2){
                leastNum = leastArr[0] + leastArr[1]
            }
        }
        let timeNum = time
        const timeArr = time.split(":")
        if(timeArr.length===2){
            timeNum = timeArr[0] + timeArr[1]
        }
        leastNum = parseInt(leastNum)
        timeNum = parseInt(timeNum)
        if(leastNum>timeNum || least===null){
            localStorage.setItem("least", time)
        }
        clearInterval(interval)
    }
    return () => {
        clearInterval(interval);
      };
    },[props.tenzies])
    return(
        <>
        {!props.tenzies && <div className='timer'>
            <span>Time: </span>
            <span>{time}</span>
        </div>}
        </>
    )
}