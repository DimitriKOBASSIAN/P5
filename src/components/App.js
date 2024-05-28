
import '../styles/App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Remove before take offcd</div>,
    errorElement: <ErrorPage />,
  },
]);


function App() {
  return (
    <div className='App'>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
