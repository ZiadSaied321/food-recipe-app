
import React, { createContext , useState } from 'react'

const MyContext = createContext({})
const Context = ({ children }) => {

  const [params, setParams] = useState(null)
  const [favorites, setFavorites] = useState([])

  function checkFav(id) {
    const favItem = favorites.find((item) => item.recipe.recipe_id == id)
    if (favItem == undefined) {
      return false
    }
    return true
  }

  function removeFav(id) {
    setFavorites((prev) => prev.filter((item) => item.recipe.recipe_id != id))
  }

  return (
    <MyContext.Provider value={{ setParams, params, removeFav, checkFav, setFavorites, favorites }}>
      {children}
    </MyContext.Provider>
  )
}
export { MyContext }
export default Context