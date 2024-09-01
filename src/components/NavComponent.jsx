import { NavLink } from "react-router-dom";
const NavComponent = () => {
   return ( 
      <>
         <header className="sticky top-0 left-0 container mx-auto">
            <nav className="flex items-center justify-between py-4 px-6">
               <NavLink to='/'>FoodRecipe</NavLink>
               <ul className="flex space-x-8 items-center">
                  <li><NavLink to='/'>home</NavLink></li>
                  <li><NavLink to='/details'>details</NavLink></li>
                  <li><NavLink to='/favorites'>favorites</NavLink ></li>
            </ul>

            </nav>

      </header>
      
      
      
      </>
    );
}
 
export default NavComponent;