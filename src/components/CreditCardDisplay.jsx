/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from "react-icons/io";

const getCardLogo = (type) => {
  const size = 28;
  if (type === 'visa') return <FaCcVisa size={size} className="text-blue-500" />;
  if (type === 'mastercard') return <FaCcMastercard size={size} className="text-red-600" />;
  if (type === 'amex') return <FaCcAmex size={size} className="text-blue-700" />;
  return null;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function CreditCardDisplay({ cardInfo }) {
  return (
    <motion.div
      variants={cardVariants} 
      layout
      whileHover={{ scale: 1.04, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} 
      transition={{ type: "spring", stiffness: 400, damping: 17 }} 
      className="bg-card-dark p-5 rounded-lg shadow-md text-card-light-text relative font-mono text-sm min-h-[160px] flex flex-col justify-between cursor-pointer" 
    >
      {cardInfo.isDefault && (
        <IoMdCheckmarkCircle size={20} className="absolute top-3 right-3 text-green-400 bg-card-dark rounded-full" />
      )}

      <div className="w-10 h-7 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 rounded mb-4 opacity-80"></div>

      <div className="flex justify-between items-center mb-4 tracking-widest text-base">
        <span>••••</span>
        <span>••••</span>
        <span>••••</span>
        <span className="font-semibold">{cardInfo.last4}</span>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs opacity-70 mb-1">Expires</p>
          <p className="text-sm">{cardInfo.expiry}</p>
          <p className="mt-1 uppercase text-xs tracking-wider font-semibold">{cardInfo.name}</p>
        </div>
        <div className="h-8 flex items-end">
          {getCardLogo(cardInfo.type)}
        </div>
      </div>
    </motion.div>
  );
}
export default CreditCardDisplay;