/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InputField = ({ label, id, type = 'text', placeholder, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-xs font-medium text-text-secondary mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      className="w-full px-3 py-2 border border-border-subtle rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-accent-gold focus:border-accent-gold text-sm bg-card"
    />
  </div>
);

const Button = ({ type = 'button', children, variant = 'primary', onClick, disabled = false }) => {
    const baseStyle = "px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-gold disabled:opacity-50 disabled:cursor-not-allowed";
    const primaryStyle = "bg-text-primary text-white hover:bg-opacity-90 shadow-sm";
    const secondaryStyle = "bg-gray-200 text-text-primary hover:bg-gray-300 border border-gray-300";

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.03 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle}`}
        >
            {children}
        </motion.button>
    );
}

const ToggleSwitch = ({ id, label, initialChecked = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(initialChecked);

    const handleChange = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        if (onChange) {
            onChange(newState);
        }
    };

    return (
        <div className="flex items-center justify-between">
            <label htmlFor={id} className="text-sm text-text-primary cursor-pointer select-none mr-4"> 
                {label}
            </label>
            <motion.button 
                id={id}
                role="switch"
                aria-checked={isChecked}
                onClick={handleChange}
                className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-gold ${isChecked ? 'bg-accent-gold' : 'bg-gray-300'
                    }`}
            >
                <motion.span 
                    layout 
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                    className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${isChecked ? 'translate-x-6' : 'translate-x-1'
                        }`}
                />
            </motion.button>
        </div>
    );
};


function AccountSettingsPage() {

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log("Updating profile...");
  };

   const handlePasswordUpdate = (e) => {
    e.preventDefault();
    console.log("Updating password...");
  };

  return (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full font-sans space-y-12"
     >
      <h1 className="text-4xl font-bold text-text-primary">
        ACCOUNT SETTINGS
      </h1>

      <motion.section
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        className="bg-card p-6 rounded-lg shadow-sm border border-border-subtle"
       >
        <h2 className="text-xl font-semibold text-text-primary mb-6 border-b border-border-subtle pb-3">Profile Information</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-5 max-w-md">
          <InputField label="Full Name" id="fullName" placeholder="Enter your full name" required />
          <InputField label="Email Address" id="email" type="email" placeholder="your.email@example.com" required />
          <InputField label="Phone Number (Optional)" id="phone" type="tel" placeholder="Enter your phone number" />
          <div className="pt-2">
             <Button type="submit">Save Profile</Button>
          </div>
        </form>
      </motion.section>

      <motion.section
         initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
         className="bg-card p-6 rounded-lg shadow-sm border border-border-subtle"
       >
        <h2 className="text-xl font-semibold text-text-primary mb-6 border-b border-border-subtle pb-3">Change Password</h2>
         <form onSubmit={handlePasswordUpdate} className="space-y-5 max-w-md">
            <InputField label="Current Password" id="currentPassword" type="password" required />
            <InputField label="New Password" id="newPassword" type="password" required />
            <InputField label="Confirm New Password" id="confirmPassword" type="password" required />
            <div className="pt-2">
               <Button type="submit">Update Password</Button>
            </div>
         </form>
      </motion.section>

      <motion.section
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="bg-card p-6 rounded-lg shadow-sm border border-border-subtle"
      >
        <h2 className="text-xl font-semibold text-text-primary mb-6 border-b border-border-subtle pb-3">Notification Preferences</h2>
        <div className="space-y-5 max-w-md">
            <ToggleSwitch
                id="emailNotifications"
                label="Receive email notifications"
                initialChecked={true}
                onChange={(checked) => console.log("Email Pref:", checked)}
            />
             <ToggleSwitch
                id="smsNotifications"
                label="Receive SMS alerts"
                initialChecked={false}
                onChange={(checked) => console.log("SMS Pref:", checked)}
            />
            <div className="pt-2">
               <Button type="button" variant="secondary">Save Preferences</Button>
            </div>
        </div>
      </motion.section>

    </motion.div>
  );
}

export default AccountSettingsPage;