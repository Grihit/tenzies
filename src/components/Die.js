import React from 'react'
import { nanoid } from 'nanoid';

export default function Die(props){
    const dieNum = []
    for(let i=0;i<props.value;++i)
        dieNum.push(i);

    const dieNumsElements = dieNum.map(()=>{
        return <span className='dot' key={nanoid()}></span>
    })
    return(
        <div 
            className={`die ${props.class}`} 
            onClick={props.click}
        >
            <div className={`die--face${props.value}`}>
                {dieNumsElements}
            </div>
            {/* <span className="die--text">{props.value}</span> */}
        </div>
    )
}