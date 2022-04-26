import React from 'react'

export default function Timer(props){
    const [time,setTime] = React.useState('0')
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
            setTime(`${minutes ? (minutes+":") : ''} ${seconds<10 ? "0"+seconds : seconds}`)
        }, 1000)
    },[props.tenzies, true])
    return(
        <div className='timer'>
            <span>Time: </span>
            <span>{time}</span>
        </div>
    )
}