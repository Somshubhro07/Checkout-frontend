/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const user = { name: 'Boundary Supply', status: 'MEMBER' };
const navLinks = {
    'Your Orders': '/orders',
    'Reward Status': '/reward-status',
    'Account Settings': '/account-settings',
    'Payment Methods': '/payment-methods',
    'Sign Out': '#',
};

const navContainerVariants = {
    hidden: { opacity: 0 }, 
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2, 
        }
    }
};

const navItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 }
};

function Sidebar({ currentPath }) {
    const navItems = Object.keys(navLinks);

    return (
        <div className="flex flex-col h-full text-text-secondary">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="mb-12 flex flex-col items-center"
            >
                <div className="w-24 h-24 rounded-full border border-border-subtle flex items-center justify-center bg-white mb-4 shadow-sm">
                    <span className="font-semibold text-text-primary text-lg">
                        {user.status}
                    </span>
                </div>
            </motion.div>

            <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col space-y-4"
            >
                {navItems.map((item) => {
                    const path = navLinks[item];
                    const isActive = currentPath === path;

                    if (item === 'Sign Out') {
                        return (
                            
                            <motion.div key={item} variants={navItemVariants}>
                                <motion.a
                                    whileHover={{ x: 3 }} 
                                    href="#"
                                    className="block text-sm font-medium px-3 py-1 rounded mt-8 text-accent-red hover:text-red-600"
                                    onClick={(e) => { e.preventDefault(); console.log("Signing out..."); }}
                                >
                                    {item}
                                </motion.a>
                            </motion.div>
                        );
                    }

                    return (
                      
                        <motion.div
                            key={item}
                            variants={navItemVariants}
                            whileHover={{ x: 3 }} 
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                         >
                            <Link
                                to={path}
                                className={`block text-sm font-medium px-3 py-1 rounded transition-colors duration-150 ${isActive
                                        ? 'text-text-primary font-semibold'
                                        : 'text-text-secondary hover:text-text-primary' 
                                    }`}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.nav>
        </div>
    
    );
}

export default Sidebar;