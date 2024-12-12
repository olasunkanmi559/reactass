import React from 'react'
import './App.css'
const Place = (person) => {
    return (
        <div className='overrall'>
            <div>
                <img src={person.photo} alt="" />
            </div>
            <p>{person.course}</p>
            <p>{person.capital}</p>
            <p>{person.age}</p>
            <p>{person.class}</p>
            <p>{person.speech}</p>
        </div>
    )
}

export default Place