import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
    return (
        <Router>
            {/* Navbar & Discount Banner are always present */}
            <DiscountBanner />
            <Navbar />

            {/* Home & Services on the same page with smooth scrolling */}
            <div id="home">
                <Home />
            </div>
            <div id="services">
                <Services />
            </div>

            {/* Other routes */}
            <Routes>
                <Route path="/booking" element={<Booking />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/location" element={<Location />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/team" element={<Team />} /> 
                <Route path="/client-info" element={<ClientInfo />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
