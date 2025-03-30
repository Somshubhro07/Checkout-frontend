import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function CheckoutPage() {
  const navigate = useNavigate();

  const subtotal = 542.79; 
  const shipping = 10.00;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
      e.preventDefault();
      console.log("Placing order...");
      navigate('/orders'); 
  };

  return (
    <div className="w-full font-sans">
      <h1 className="text-4xl font-bold text-text-primary mb-8 md:mb-12">
        CHECKOUT
      </h1>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
              <section>
                 <h2 className="text-xl font-semibold text-text-primary mb-4">Shipping Address</h2>
                 <div className="p-4 border border-border-subtle rounded-md text-sm text-text-secondary">
                    <p className="font-medium text-text-primary">Ben Cline</p>
                    <p>123 Shipping Lane</p>
                    <p>Baker Street</p>
                    <p>India</p>
                    <button type="button" className="text-accent-blue text-xs mt-2 hover:underline">Change Address</button>
                 </div>
              </section>

               <section>
                 <h2 className="text-xl font-semibold text-text-primary mb-4">Payment Method</h2>
                 <div className="p-4 border border-border-subtle rounded-md text-sm">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center space-x-2">
                          <div className="w-8 h-5 bg-gray-600 rounded"></div>
                          <span className="text-text-primary">Visa ending in 3702</span>
                       </div>
                       <span className="text-text-secondary">Expires 12/23</span>
                    </div>
                    <button type="button" className="text-accent-blue text-xs mt-2 hover:underline">Change Payment</button>
                 </div>
              </section>
          </div>

           <div className="md:col-span-1">
               <div className="bg-sidebar p-6 rounded-lg shadow-sm sticky top-10">
                   <h2 className="text-xl font-semibold text-text-primary mb-6">Order Summary</h2>
                   <div className="space-y-3 text-sm mb-6">
                       <div className="flex justify-between text-text-secondary">
                           <span>Subtotal</span>
                           <span>₹{subtotal.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between text-text-secondary">
                           <span>Shipping</span>
                           <span>₹{shipping.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between text-text-secondary">
                           <span>Tax</span>
                           <span>₹0.00</span> 
                       </div>
                   </div>
                   <div className="flex justify-between text-text-primary font-semibold text-lg pt-4 border-t border-border-subtle mb-6">
                       <span>Total</span>
                       <span>₹{total.toFixed(2)}</span>
                   </div>
                   <button
                      type="submit"
                      className="w-full bg-text-primary text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Place Order
                    </button>
               </div>
           </div>
      </form>
    </div>
  );
}

export default CheckoutPage;