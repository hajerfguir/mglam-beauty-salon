import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiscountBanner from './components/DiscountBanner';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Booking from './pages/Booking/Booking';
import Confirmation from './pages/Confirmation/Confirmation';
import Location from './pages/Location/Location';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Team from './pages/Team/Team'; 
import ClientInfo from './pages/ClientInfo/ClientInfo';


/* Scrolls to section when navigating */
const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const section = document.getElementById(location.hash.replace("#", ""));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
};

function App() {
    return (
        <Router>
            <ScrollToSection />

            {/* Fixed Navbar & Discount Banner */}
            <div className="fixed-header">
                <DiscountBanner />
                <Navbar />
            </div>

            {/* Page Content with Padding (Prevents Overlapping) */}
            <div className="page-content">
                <div id="home"><Home /></div>
                <div id="services"><Services /></div>
                <div id="team"><Team /></div>
                <div id="location"><Location /></div>
                <div id="contact"><Contact /></div>
                <div id="booking"><Booking /></div>

                {/* Other Routes (Separate Pages) */}
                <Routes>
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
