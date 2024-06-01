
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../styles/App.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import ErrorPage from "../routes/Error"
import Home from "../routes/Home"
import About from "../routes/About"


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route errorElement={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
