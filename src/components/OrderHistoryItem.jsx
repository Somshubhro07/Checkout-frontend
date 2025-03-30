/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import placeholderGeneric from '../assets/images/placeholder-image.png'; 
const ProductImage = ({ src, alt, className }) => (
    <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={src || placeholderGeneric}
        alt={alt}
        className={`object-contain ${className}`}
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderGeneric; }}
    />
);


const itemDetailVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
};

function OrderHistoryItem({ order }) {

    const safeOrder = order || {};
    const safeItems = safeOrder.items || [];
    const mainItem = safeItems[0] || {};
    const otherItems = safeItems.slice(1);

    return (
        <div className="border-b border-border-subtle pb-8 last:border-b-0">

            <motion.div 
                initial="hidden" animate="visible" transition={{ staggerChildren: 0.05 }}
                className="flex justify-between items-center mb-4 text-sm">
                <motion.div variants={itemDetailVariants} className="text-left">
                    <p className="font-semibold text-text-primary">{safeOrder.date || 'N/A'}</p>
                    <p className="text-text-secondary">{safeOrder.status || 'N/A'}</p>
                </motion.div>
                <motion.div variants={itemDetailVariants} className="text-right space-x-4">

                    {safeOrder.status === 'Processing' && <a href="#" className="text-xs text-accent-blue hover:underline">Cancel/Modify</a>}
                    {safeOrder.status?.includes('Shipped') && <a href="#" className="text-xs text-accent-blue hover:underline">Track Order</a>}
                    <a href="#" className="text-xs text-accent-blue hover:underline">Order Details</a>
                    <a href="#" className="text-xs text-accent-blue hover:underline">Request Return</a>
                </motion.div>
            </motion.div>

            <div className="flex items-start space-x-6">
                <ProductImage
                    src={mainItem.image}
                    alt={mainItem.name || 'Product Image'}
                    className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded"
                />

                <motion.div 
                    initial="hidden" animate="visible" transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
                    className="flex-grow">
                    <motion.div variants={itemDetailVariants} className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-xs text-text-secondary">Order #</p>
                            <p className="font-medium text-text-primary">{safeOrder.id || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-xs text-text-secondary text-right">Order Total</p>
                            <p className="font-semibold text-lg text-text-primary text-right">₹{(safeOrder.total ?? 0).toFixed(2)}</p>
                        </div>
                    </motion.div>

                    {(otherItems.length > 0 || (safeOrder.moreItemsCount ?? 0) > 0) && (
                        <motion.div variants={itemDetailVariants}>
                            <p className="text-xs text-text-secondary mb-2">Also in this order:</p>
                            <div className="flex space-x-2 items-center">
                                {otherItems.map((item, index) => (
                                    <motion.div 
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + index * 0.05 }}
                                     >
                                        <ProductImage src={item.image} alt={item.name || 'Thumbnail'} className="w-10 h-10 bg-gray-100 rounded" />
                                    </motion.div>
                                ))}
                                {(safeOrder.moreItemsCount ?? 0) > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + otherItems.length * 0.05 }}
                                        className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs text-text-secondary">
                                        +{safeOrder.moreItemsCount} more
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                    {safeOrder.shippingInfo && (
                        <motion.p variants={itemDetailVariants} className="text-sm text-text-secondary mt-4">{safeOrder.shippingInfo}</motion.p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
export default OrderHistoryItem;