import { createContext, useState } from "react";
import axios from "axios";
export const GlobleContext = createContext(null)

export default function GlobalState({children}) {
   const [search, setSearch] = useState('') 
   const [loading, setLoading] = useState(null)
   const [err, setErr] = useState(null)
   const [recipes ,setRecipes] = useState([])
   const [recipe, setRecipe] = useState(null)
   const [favorites ,setFavorites] = useState(JSON.parse(localStorage.getItem('list')) || []);
  async function handleSubmit(event) {
      event.preventDefault();
         try {
            setLoading(true)
            setErr(null)
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
            if (response.data?.data?.recipes) {
               setRecipes(response.data.data.recipes)
               setSearch('')
     
            }
         }
         catch (e){
            setErr(e.message)
         }
         finally {
            setLoading(false)
         }
   }
   
   function changeFavorites(recipe) {
      const copy = [...favorites]
      const index = favorites.findIndex(item => item.id === recipe.id)
      if (index !== -1) {
           copy.splice(index,1)
        }
      else {
         copy.push(recipe)
      }
      setFavorites(copy)
      localStorage.setItem('list', JSON.stringify(copy)); 
   }
   
   return (
      <GlobleContext.Provider value={{search, setSearch ,handleSubmit , loading, err , recipes ,recipe, setRecipe , favorites ,changeFavorites}}>
         {children}
      </GlobleContext.Provider>
   )

}