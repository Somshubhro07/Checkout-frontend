/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import StatDisplay from '../components/StatDisplay';
import BenefitIcon from '../components/BenefitIcon';

const rewardData = {
  currentTier: 'VIP',
  nextTier: 'Gold',
  lifetimeSpend: 678.42,       
  toNextTier: 321.68,       
  orders: 3,
  referrals: 7,
  requiredSpendForNext: 1000, 
  benefits: [
    { id: 'b1', icon: 'shipping', label: 'Free Shipping' },
    { id: 'b2', icon: 'returns', label: 'Extended Returns' },
  ],
};

const listContainerVariants = {};

function RewardStatusPage() {

  const currentSpend = rewardData?.lifetimeSpend ?? 0;
  const requiredSpend = rewardData?.requiredSpendForNext ?? 1; 
  const progressPercent = (currentSpend / requiredSpend) * 100;

  return (
    <motion.div
       initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
       className="w-full font-sans"
    >
      <h1 className="text-4xl font-bold text-text-primary mb-10 md:mb-16">
        REWARD STATUS
      </h1>

      <motion.div
          variants={listContainerVariants} initial="hidden" animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
      >

         <StatDisplay label="Current Status" value={rewardData?.currentTier ?? 'N/A'} />
         <StatDisplay label="Lifetime Spend" value={`$${currentSpend.toFixed(2)}`} />
         <StatDisplay label="Next Tier" value={rewardData?.nextTier ?? 'N/A'} highlight={`$${(rewardData?.toNextTier ?? 0).toFixed(2)} To ${rewardData?.nextTier ?? ''} Status`} />
      </motion.div>

      <motion.div
          variants={listContainerVariants} initial="hidden" animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
         <StatDisplay label="Orders" value={String(rewardData?.orders ?? 0).padStart(3, '0')} />
         <StatDisplay label="Referrals" value={String(rewardData?.referrals ?? 0).padStart(3, '0')} />

         <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-1"
          >
             <p className="text-xs text-text-secondary mb-1 font-medium">Progress toward {rewardData?.nextTier ?? ''} Status</p>
             <div className="w-full bg-progress-bg rounded-full h-2.5 mb-1 overflow-hidden">
                 <motion.div
                    className="bg-progress-fill h-2.5 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${Math.min(progressPercent, 100)}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                 />
             </div>

             <p className="text-xs text-text-secondary text-right">${currentSpend.toFixed(2)} / ${requiredSpend.toFixed(0)}</p>
         </motion.div>
      </motion.div>

      <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      >
          <h2 className="text-lg font-semibold text-text-primary mb-4">Benefits</h2>
          <motion.div
              variants={listContainerVariants} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
          >
              {(rewardData?.benefits ?? []).map(benefit => ( 
                  <BenefitIcon key={benefit.id} iconKey={benefit.icon} label={benefit.label} />
              ))}
          </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default RewardStatusPage;