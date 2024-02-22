import { useParams } from 'react-router-dom'
import useFetch from '../../api/useFetch'
import { MyContext } from '../../context/Context'
import { useContext } from 'react'
import LoadingData from '../../components/LoadingData'
const Details = () => {
  const params = useParams()

  const { data, loading, error } = useFetch(`https://forkify-api.herokuapp.com/api/get?rId=${params.id}`)

  return (
    <>
      {
        (data?.recipe && !loading) ? <DetailsCard {...data} /> : <LoadingData/>
      }
    </>
  )
}



export const DetailsCard = (props) => {
  const { setFavorites, checkFav, removeFav } = useContext(MyContext)
  const { publisher, ingredients, image_url, social_rank, title, recipe_id } = props.recipe;

  const clickHandler = () => {
    if (checkFav(recipe_id)) {
      removeFav(recipe_id)
    }
    else{
      setFavorites((prev)=>{
        return [...prev,props]
      })
    }
  }
  return (
    <div className='px-2 my-2 flex-col max-w-[600px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-center gap-4 items-center'>
        <img src={image_url} className='w-48' alt='random image' />
        <div className='flex flex-col'>
          <h1 className='font-semibold text-blue-500'>{publisher}</h1>
          <h2 className='semibold text-xl'>{title}</h2>
          <h2 className='bg-blue-500 max-w-min text-sm text-white rounded-md p-0.5 mt-2'>
            #Rank
            <span className='font-bold mx-1'>{Math.round(social_rank)}</span>
          </h2>
          <button onClick={()=>clickHandler()} className='px-2 mt-4 py-1 font-bold rounded-lg bg-red-300 text-slate-50'>{checkFav(recipe_id) ? 'Remove Favorite' : 'Add Favorite'}</button>
        </div>
      </div>
      {/* ingredients */}
      {...ingredients.map((item) => {
        return <h3 className='rounded-lg bg-slate-200 drop-shadow-md my-2 text-blue-950 font-semibold py-2 px-1'>{item}</h3>
      })}
    </div>
  )
}


export default Details