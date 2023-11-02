

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import RootLayout from "./component/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route
          path="/"
          element={<Home/>}
        >
        </Route>
        <Route
          path="/about"
          element={<About/>}
        >
        </Route>
      </Route>
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
