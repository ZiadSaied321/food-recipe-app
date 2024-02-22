import React from 'react'
import { useContext } from 'react'
import { MyContext } from "../../context/Context"
import RecipeCard from '../../components/RecipeCard'
import useFetch from '../../api/useFetch'
import LoadingData from '../../components/LoadingData'

const Home = () => {
  const {params} = useContext(MyContext)
  const { loading, error, data } = useFetch(`https://forkify-api.herokuapp.com/api/search?q=${params||'pizza'}`)
  return (
    (loading)?<LoadingData/>:
    <div className='max-w-max mx-auto mt-4 grid sm:grid-cols-2 gap-2 lg:grid-cols-3'>
      {
        (!loading && data.count)?data.recipes.map((recipe) => {
          return <RecipeCard key={recipe.recipe_id} {...recipe} />
        }):null}
    </div>
  )
}

export default Home