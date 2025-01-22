  import React from 'react'

const Shop = (props) => {
  return (
    <div className='chop'>
        <div>
            <img src={props.image} alt="" />
        </div>
        <h3>
            {props.title}
        </h3>
        <p>
            {props.desc}
        </p>
        <button> ${props.price}</button>
        <button onClick={props.btn}> Delete Products </button>
    </div>
  )
}

export default Shop
