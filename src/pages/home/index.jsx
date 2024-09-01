import { useContext } from "react";
import { GlobleContext } from "../../context";

const HomePage = () => {
   const { recipes, loading, err } = useContext(GlobleContext)
   
   if(loading) return<div className="text-3xl">Loading ... please wait !</div>
   if (err) return <div className="text-3xl">Error ! { err} try later</div>
   return ( 
      <section className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gird-cols-6">

         {recipes && recipes.map((recipe) =>
            <div key={recipe.id}>{recipe.title}</div>
         )}
      </section>
   )
   
   

};

export default HomePage;
