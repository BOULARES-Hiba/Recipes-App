import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";
import NavBar from "./layouts/navBar";
import GlobalState from "./context";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    )
  );
  return (
    <>
      <GlobalState>
        <RouterProvider router={router} />
      </GlobalState>
    </>
  );
}

export default App;
