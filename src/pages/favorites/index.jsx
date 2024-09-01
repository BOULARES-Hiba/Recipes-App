import { useContext } from "react";
import { GlobleContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
const Favorites = () => {
   const {favorites} = useContext(GlobleContext)
   return ( 
      <section className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gird-cols-6 gap-1 mt-4">
      {favorites && favorites.length > 0 ? (
      favorites.map((recipe) => <RecipeItem key={recipe.id} item={recipe} />)
      ) : (
        <div className="lg:text-4xl text-xl mt-10 ml-5 sm:ml-10 text-center text-black font-extrabold text-nowrap">
          You don't have any favorites now .
        </div>
      )}
    </section>
    );
}
 
export default Favorites;