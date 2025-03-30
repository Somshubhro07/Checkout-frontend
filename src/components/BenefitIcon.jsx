/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaShippingFast, FaUndoAlt, FaStar } from 'react-icons/fa';

const icons = {
  shipping: FaShippingFast,
  returns: FaUndoAlt,
  default: FaStar,
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 }
};

function BenefitIcon({ iconKey, label }) {
  const IconComponent = icons[iconKey] || icons.default;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center text-center w-24 group cursor-pointer"
    >
      <div className="w-16 h-16 bg-card-dark rounded-lg flex items-center justify-center text-card-light-text mb-2 group-hover:bg-accent-gold transition-colors duration-200">
        <IconComponent size={28} />
      </div>
      <p className="text-xs text-text-secondary font-medium group-hover:text-text-primary transition-colors duration-200">{label}</p>
    </motion.div>
  );
}
export default BenefitIcon;