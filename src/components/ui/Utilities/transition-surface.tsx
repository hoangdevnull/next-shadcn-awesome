import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import React from 'react';

import type { FCC } from '@/types';

interface Props {
  children: ReactNode;
  fadeIn?: 'right' | 'left';
}

const TransitionSurface: FCC<Props> = ({ children, fadeIn = 'right' }) => {
  return (
    <motion.div
      initial={{ x: fadeIn === 'right' ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: fadeIn === 'right' ? -100 : 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionSurface;
