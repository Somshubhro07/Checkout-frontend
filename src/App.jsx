import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// --- FIX: Import ALL page components used in Routes ---
import OrderDetailsPage from './pages/OrderDetailsPage';
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import RewardStatusPage from './pages/RewardStatusPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
// -----------------------------------------------------

function App() {
    const location = useLocation();

    const yourName = "Somshubhro Guha"; 
    const yourEmail = "guha.somshubhro@gmail.com"; 
    const yourGithub = "https://github.com/Somshubhro07/";
    const yourLinkedin = "https://www.linkedin.com/in/somshubhro-guha-46b892272/";

    return (
        <div className="flex flex-col items-center min-h-screen bg-background p-4 md:p-8 font-sans">
            <div className="flex w-full max-w-6xl bg-card shadow-lg rounded-lg overflow-hidden mb-8">
                <div className="w-1/4 bg-sidebar p-6 hidden md:block">
          
                    <Sidebar key={location.pathname} currentPath={location.pathname} />
                </div>
                <div className="w-full md:w-3/4 p-6 md:p-10 bg-card">
                    
                    <Routes>
                        <Route path="/" element={<OrderDetailsPage />} />
                        <Route path="/orders" element={<OrderDetailsPage />} />
                        <Route path="/payment-methods" element={<PaymentMethodsPage />} />
                        <Route path="/account-settings" element={<AccountSettingsPage />} />
                        <Route path="/reward-status" element={<RewardStatusPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                    </Routes>
                </div>
            </div>
            <Footer
                name={yourName}
                email={yourEmail}
                githubUrl={yourGithub}
                linkedinUrl={yourLinkedin}
            />
        </div>
    );
}

export default App;