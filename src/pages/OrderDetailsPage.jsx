/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';

import OrderHistoryItem from '../components/OrderHistoryItem';

import bag1 from '../assets/images/product-bag1.png';
import thumb1 from '../assets/images/accessory-thumb1.png';
import thumb2 from '../assets/images/accessory-thumb2.png';
import thumb3 from '../assets/images/accessory-thumb3.png';
import bag2 from '../assets/images/product-bag2.png';

const mockOrders = [
    {
        id: '30004', date: 'May 1, 2018', status: 'Processing', total: 324.96,
        items: [
            { id: 'item1', name: 'Main Product', image: bag1 },
            { id: 'item2', name: 'Accessory 1', image: thumb1 },
            { id: 'item3', name: 'Accessory 2', image: thumb2 },
            { id: 'item4', name: 'Accessory 3', image: thumb3 },
        ], moreItemsCount: 12,
    },
    {
        id: '29784', date: 'May 28, 2018', status: 'Shipped via FedEx', total: 542.79,
        items: [ { id: 'item5', name: 'Second Product', image: bag2 } ],
        shippingInfo: 'Shipped via FedEx', moreItemsCount: 0,
    },
];

function OrderDetailsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full font-sans"
    >
      <h1 className="text-4xl font-bold text-text-primary mb-8 md:mb-12">
        YOUR ORDERS
      </h1>

      {mockOrders && mockOrders.length > 0 ? (
          <div className="space-y-8">
            {mockOrders.map((order, index) => (

              <motion.div
                 key={order.id}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                 <OrderHistoryItem order={order} />
              </motion.div>
            ))}
          </div>
      ) : (
          <p className="text-text-secondary">You have no orders.</p>
      )}
    </motion.div>
  );
}

export default OrderDetailsPage;