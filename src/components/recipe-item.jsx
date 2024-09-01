import { Link } from "react-router-dom";
const RecipeItem = ({ item }) => {
   return (  
      <div className="p-4 overflow-hidden rounded-lg border-2 ">
           <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full rounded-md" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <Link
          to={`/details/${item?.id}`}
          className="text-sm py-2 mt-5 px-4 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white text-nowrap"
        >
          Recipe Details
        </Link>
      </div>
      
      </div>
   );
}
 
export default RecipeItem;