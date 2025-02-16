import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscountBanner from './components/DiscountBanner';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Booking from './pages/Booking/Booking';
import Confirmation from './pages/Confirmation/Confirmation';
import Login from './pages/Login/Login';
import ClientInfo from './pages/ClientInfo/ClientInfo';
import './App.css';


const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.getElementById(location.hash.replace("#", ""));
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); 
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return null;
};


function App() {
    return (
        <Router>
            <ScrollToSection />
            
            <div className="fixed-header">
                <DiscountBanner />
                <Navbar />
            </div>
            <div className="page-content">
                <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/booking" element={<Booking />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/client-info" element={<ClientInfo />} />
                </Routes>
            </div>


            <Footer />
        </Router>
    );
}

export default App;