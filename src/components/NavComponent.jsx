import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobleContext } from "../context";

const NavComponent = () => {
  const { search, setSearch ,handleSubmit} = useContext(GlobleContext);
  return (
    <header className="sticky top-0 left-0 bg-white shadow-md">
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 sm:p-4 px-4 ">
        <NavLink to="/" className="text-xl font-bold text-pink-500">
          FoodRecipe
        </NavLink>
        <form onSubmit={handleSubmit} className="flex mt-4 sm:mt-0 sm:ml-8 items-center w-full sm:w-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes..."
            className="shadow-lg shadow-pink-100/50 flex-grow sm:flex-grow-0 border-2 outline-none rounded-full border-pink-300  py-2 pl-5 sm:w-64 w-full"
          />
          <button className="ml-2 py-2 px-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium">
            Search
          </button>
        </form>

        <ul className="flex flex-col sm:flex-row mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-8 items-center text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-500" : "text-gray-700 hover:text-pink-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "text-pink-500" : "text-gray-700 hover:text-pink-500"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavComponent;
