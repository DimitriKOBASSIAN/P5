
import '../styles/App.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import Adhook from './Adhook';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../routes/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Remove before take off</div>,
    errorElement: <ErrorPage />,
  },
]);


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Adhook />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
