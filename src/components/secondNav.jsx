import { NavLink } from "react-router-dom";
const SecondNav = () => {
  return (
    <header className="sticky top-0 left-0 bg-white shadow-md">
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 sm:p-4 px-4 ">
        <NavLink to="/" className="text-xl font-bold text-pink-500">
          FoodRecipe
        </NavLink>
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

export default SecondNav;
