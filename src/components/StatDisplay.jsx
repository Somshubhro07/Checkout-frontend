/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion'; 

function isNumeric(value) {

    if (typeof value === 'number') return true;
    if (typeof value === 'string') {
        const cleanedValue = value.replace(/[$,]/g, ''); 
        return !isNaN(parseFloat(cleanedValue)) && isFinite(cleanedValue);
    }
    return false;
}

function StatDisplay({ label, value, highlight }) {
  const valueRef = useRef(null);
  const numericValue = typeof value === 'number' ? value : parseFloat(value.replace(/[$,]/g, ''));
  const isValueNumeric = isNumeric(value);

  useEffect(() => {
    const node = valueRef.current;
    if (node && isValueNumeric) {
      const controls = animate(0, numericValue, {
        duration: 1.5, 
        ease: "easeOut",
        onUpdate(latest) {
            if (typeof value === 'string' && value.startsWith('$')) {
                 node.textContent = `$${latest.toFixed(2)}`;
            } else if (String(value).padStart) { 
                 node.textContent = String(Math.round(latest)).padStart(3, '0');
            }
             else {
                 node.textContent = Math.round(latest); 
            }
        }
      });

      return () => controls.stop();
    } else if (node) {

        node.textContent = value;
    }
  }, [value, numericValue, isValueNumeric]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-b border-border-subtle pb-3"
    >
      <p className="text-xs text-text-secondary mb-1 font-medium">{label}</p>
      <p ref={valueRef} className="text-2xl font-semibold text-text-primary">
         {isValueNumeric ? (typeof value === 'string' && value.startsWith('$') ? '$0.00' : '0') : value}
      </p>
      {highlight && (
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-xs text-accent-gold font-medium mt-1"
        >
          {highlight}
        </motion.p>
      )}
    </motion.div>
  );
}
export default StatDisplay;