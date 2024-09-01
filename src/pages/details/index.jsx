import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobleContext } from "../../context";

const Details = () => {
   const { id } = useParams();
   const [loading, setLoading] = useState(null);
   const [err, setErr] = useState(null);
   const { recipe, setRecipe } = useContext(GlobleContext);

   async function detaileRecipe() {
      try {
         setLoading(true);
         setErr(null);
         const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
         if (response.data?.data) {
            setRecipe(response.data?.data);
         }
      } catch (e) {
         setErr(e.message);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      detaileRecipe();
   }, [id]);

   return (
      <>
         <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mt-10 border-2 border-pink-300/50 rounded-lg p-4 shadow-lg shadow-pink-100/50">
            <div className="flex items-center justify-center">
               <img 
                  src={recipe?.recipe?.image_url} 
                  alt={recipe?.recipe?.title} 
                  className="w-full h-auto rounded-xl object-cover hover:scale-105 duration-300"
               />
            </div>
            <div className="flex flex-col gap-2">
               <span className="text-sm text-cyan-700 font-medium">
                  {recipe?.recipe?.publisher}
               </span>
               <h3 className="font-bold text-lg sm:text-2xl truncate text-black">
                  {recipe?.recipe?.title}
               </h3>
               <div className=" flex flex-col">
                  <div>
                  <button className="py-2 px-4 rounded-lg text-sm uppercase font-medium mt-2  shadow-md bg-pink-400 text-white text-nowrap">add to favorites</button>
                  </div>
                 
                  <span className="text-2xl font-semibold text-black">
                     Ingredients:
                  </span>
                  <ul className="flex flex-col gap-1 sm:gap-3 mt-2">
                     {recipe?.recipe?.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex gap-2  sm:items-center ">
                           <span className="text-lg sm:text-xl font-semibold  text-black">
                              {ingredient.quantity} {ingredient.unit}
                           </span>
                           
                           <span className="text-lg sm:text-xl text-black">
                              {ingredient.description}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default Details;
