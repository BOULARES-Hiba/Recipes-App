import { createContext, useState } from "react";
import axios from "axios";
export const GlobleContext = createContext(null)

export default function GlobalState({children}) {
   const [search, setSearch] = useState('') 
   const [loading, setLoading] = useState(null)
   const [err, setErr] = useState(null)
   const [recipes ,setRecipes] = useState([])
   const[recipe, setRecipe] = useState(null)
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
   return (
      <GlobleContext.Provider value={{search, setSearch ,handleSubmit , loading, err , recipes ,recipe, setRecipe}}>
         {children}
      </GlobleContext.Provider>
   )

}