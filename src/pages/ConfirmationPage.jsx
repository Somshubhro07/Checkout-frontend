import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmationPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Mock order number

  return (
    <div className="text-center card max-w-lg mx-auto">
      {/* You could add a success icon here */}
      <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

      <h2 className="text-2xl font-semibold text-text-main mb-3">Thank You For Your Order!</h2>
      <p className="text-text-muted mb-4">
        Your order has been placed successfully. Your order number is:
      </p>
      <p className="text-xl font-bold text-accent mb-6">{orderNumber}</p>
      <p className="text-text-muted mb-6">
        You will receive an email confirmation shortly with your order details and tracking information (once shipped).
      </p>
      <div className="space-x-4">
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
         {/* Optional: Link to 'Your Orders' page if implemented */}
         {/* <Link to="/orders" className="btn btn-secondary">View Orders</Link> */}
      </div>
    </div>
  );
}

export default ConfirmationPage;