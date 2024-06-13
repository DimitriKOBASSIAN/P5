import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Fiche from '../routes/Fiche';
import Error from '../routes/Error';
import Footer from './Footer';
import NavBar from './NavBar';
import '../styles/App.scss';

/* basic import for routes, managing errors is the URL is unknown */
function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/housing/:id" element={<Fiche />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;