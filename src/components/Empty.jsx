import React from 'react'
import EmptySvg from '../assets/Empty.svg'
const Empty = (props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={EmptySvg} alt="empty illustration" />
            <h1 className='font-bold text-2xl text-blue-900'>{props.message}</h1>
        </div>
    )
}

export default Empty