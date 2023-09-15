import React from 'react'

const Card = ({ bottle, handleAdd }) => {
    let { name, img, price, quantity, ratings, seller } = bottle;
    return (
        <div className='flex flex-col items-center justify-center space-y-2 border border-purple-500 rounded-md py-2'>
            <h4 className='font-semibold'>{name}</h4>
            <img className='w-1/2' src={img} alt="" />
            <p>Price : {price}$</p>
            <p>Quantity : {quantity}</p>
            <p>Ratings : {ratings}</p>
            <button className='px-3 py-1 shadow-md shadow-gray-500 rounded-md' onClick={() => handleAdd(bottle)}>Add</button>
        </div>
    )
}

export default Card
