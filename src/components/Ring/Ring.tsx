import { motion } from 'framer-motion';
import { RingMIcon } from '../Icons';

function Ring() {
  return (
    <>
      <RingMIcon />
      <motion.div
        className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-neutral-100'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: -10 }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: { duration: 0.1, delay: 0 },
        }}
        transition={{ delay: 0.25, duration: 0.3 }}>
        Ring
      </motion.div>
    </>
  );
}

export default Ring;
