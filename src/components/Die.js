import React from 'react'

export default function Die(props){
    return(
        <div 
            className={`die ${props.class}`} 
            onClick={props.click}
        >
            <span className="die--text">{props.value}</span>
        </div>
    )
}