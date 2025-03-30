import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummaryPage({ cartItems, shippingInfo, paymentInfo }) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shippingCost = shippingInfo?.shippingMethod === 'express' ? 15.00 : 5.00;
  const tax = (subtotal + shippingCost) * 0.08; 
  const total = subtotal + shippingCost + tax;

  const handlePlaceOrder = () => {
    console.log('Placing Order:', {
      items: cartItems,
      shipping: shippingInfo,
      payment: paymentInfo,
      total: total.toFixed(2)
    });

    navigate('/confirmation');
  };

  const renderInfo = (data) => data ? `${data}` : <span className="text-red-500 italic">Not Provided</span>;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-text-main mb-6">Order Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="md:col-span-2 space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-4">Items in Cart</h3>
            {cartItems.length > 0 ? cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-start py-2 border-b border-border-color last:border-b-0">
                <div className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded flex-shrink-0"/>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-text-muted">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            )) : <p className="text-text-muted">No items in cart.</p>}
          </div>

          <div className="card">
             <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
             {shippingInfo ? (
                <div className="text-sm space-y-1 text-text-muted">
                   <p><strong>Name:</strong> {renderInfo(shippingInfo.fullName)}</p>
                   <p><strong>Address:</strong> {renderInfo(shippingInfo.address1)}, {shippingInfo.address2 ? `${shippingInfo.address2},` : ''} {renderInfo(shippingInfo.city)}, {renderInfo(shippingInfo.state)} {renderInfo(shippingInfo.zip)}, {renderInfo(shippingInfo.country)}</p>
                   <p><strong>Method:</strong> {renderInfo(shippingInfo.shippingMethod)} (${shippingCost.toFixed(2)})</p>
                </div>
             ) : <p className="text-red-500 italic">Shipping info missing.</p>}
          </div>

           <div className="card">
             <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
             {paymentInfo ? (
                 <div className="text-sm space-y-1 text-text-muted">
                     <p><strong>Method:</strong> {renderInfo(paymentInfo.method)}</p>
                     {paymentInfo.details?.type && <p><strong>Details:</strong> {paymentInfo.details.type} {paymentInfo.details.last4 ? `ending in ${paymentInfo.details.last4}` : ''}</p>}
                </div>
             ) : <p className="text-red-500 italic">Payment info missing.</p>}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="card space-y-4 sticky top-8"> 
             <h3 className="text-lg font-semibold mb-4">Total Cost</h3>
              <div className="flex justify-between">
                <span className="text-text-muted">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
               <div className="flex justify-between">
                <span className="text-text-muted">Shipping</span>
                <span>₹{shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Tax (8%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-4 pt-4 border-t border-border-color">
                <span>Grand Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="btn btn-primary w-full mt-6"
                disabled={!shippingInfo || !paymentInfo || cartItems.length === 0}
               >
                Place Your Order
              </button>
               <button
                onClick={() => navigate('/payment')}
                className="btn btn-secondary w-full mt-2 text-sm"
               >
                Back to Payment
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryPage;