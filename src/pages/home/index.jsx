import { useContext } from "react";
import { GlobleContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

const HomePage = () => {
  const { recipes, loading, err } = useContext(GlobleContext);

  if (loading) return <div className="text-3xl">Loading ... please wait !</div>;
  if (err) return <div className="text-3xl">Error ! {err} try later</div>;
  return (
    <section className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gird-cols-6 gap-1 mt-4">
      {recipes &&  recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} item={recipe} />)
      ) : (
        <div className="lg:text-4xl text-xl mt-10 ml-5 sm:ml-10 text-center text-black font-extrabold text-nowrap">
          Search a recipe or an ingredient
        </div>
      )}
    </section>
  );
};

export default HomePage;
