import React from 'react'
import { MyContext } from '../../context/Context'
import { useContext } from 'react'
import RecipeCard from '../../components/RecipeCard'
import Empty from '../../components/Empty'
const Favorites = () => {
  const { favorites, removeFav } = useContext(MyContext)
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4'>{(favorites.length > 0) ? favorites.map((item) => <RecipeCard key={item.recipe.recipe_id} {...item.recipe} action = {removeFav} />) : null}</div>
      {(favorites.length == 0)?<Empty message="Add Your Favorite Recipe"/>:null}
    </div>
  )
}
export default Favorites