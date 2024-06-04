import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import '../styles/App.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import ErrorPage from "../routes/Error"
import Home from "../routes/Home"
import About from "../routes/About"
import Fiche from "../routes/Fiche"


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Fiche />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;