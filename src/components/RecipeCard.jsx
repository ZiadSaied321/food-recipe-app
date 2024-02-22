import React from 'react'
import { NavLink } from 'react-router-dom';
const RecipeCard = (props) => {
    const {title, image_url, social_rank ,recipe_id , action} = props;
    return (
        <div className='max-w-80 px-2 py-2 flex flex-col items-center rounded-md bg-red-50'>
            <img className='h-40 rounded-md' src={image_url} alt={title} />
            <h2 className='font-bold'>{title}</h2>
        <div className='w-full flex justify-between'>
                {(action != undefined)?<button onClick={()=>action(recipe_id)} className='px-2 py-1 font-bold text-sm rounded-lg bg-red-300 text-slate-50'>Remove</button>:null}
                <NavLink to={`/details/${recipe_id}`}>
                <button className='px-2 py-1 font-bold text-sm rounded-lg bg-red-300 text-slate-50'>View Details</button>
                </NavLink>
                <h3 className='font-semibold'>rank <span className='text-blue-900 font-extrabold'>{`${Math.round(social_rank)}`}</span></h3>
                </div>
        </div>
    )
}

export default RecipeCard