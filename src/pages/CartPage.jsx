import React from 'react';
import { Link } from 'react-router-dom'; 

const mockCartItems = [
  { id: 'item1', name: 'Main Product', image: '/placeholder-bag1.png', price: 324.96, quantity: 1 },
  { id: 'item5', name: 'Second Product', image: '/placeholder-bag2.png', price: 217.83, quantity: 1 },
];

function CartPage() {
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10.00; 
  const total = subtotal + shipping;

  return (
    <div className="w-full font-sans">
      <h1 className="text-4xl font-bold text-text-primary mb-8 md:mb-12">
        YOUR CART
      </h1>

      {mockCartItems.length === 0 ? (
        <p className="text-text-secondary">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {mockCartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-contain bg-gray-100" />
                <div>
                  <p className="font-medium text-text-primary">{item.name}</p>
                  <p className="text-sm text-text-secondary">Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold text-text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>

            </div>
          ))}
          <div className="pt-6 mt-6 border-t border-border-subtle">
            <div className="flex justify-between text-text-secondary text-sm mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-text-secondary text-sm mb-4">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-text-primary font-semibold text-lg mb-6">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="w-full block text-center bg-text-primary text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;