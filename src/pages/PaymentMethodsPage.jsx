/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import CreditCardDisplay from '../components/CreditCardDisplay'; 
import AddCardButton from '../components/AddCardButton'; 

const mockPaymentMethods = [
  { id: 'pm1', type: 'amex', last4: '1001', expiry: '01/24', name: 'RALLY INTERACTIVE', isDefault: true },
  { id: 'pm2', type: 'visa', last4: '3702', expiry: '12/23', name: 'BEN CLINE', isDefault: false },
  { id: 'pm3', type: 'mastercard', last4: '4279', expiry: '01/24', name: 'BEN CLINE', isDefault: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function PaymentMethodsPage() {
  return (
    <motion.div
       initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
       className="w-full font-sans"
    >
      <h1 className="text-4xl font-bold text-text-primary mb-8 md:mb-12">
        PAYMENT METHODS
      </h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {mockPaymentMethods.map((method) => (
          <CreditCardDisplay key={method.id} cardInfo={method} />
        ))}

        <motion.div variants={cardVariants}> 
             <AddCardButton />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default PaymentMethodsPage;