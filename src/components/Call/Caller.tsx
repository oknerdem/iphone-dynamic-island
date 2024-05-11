import { motion } from 'framer-motion';

export default function Caller() {
  return (
    <motion.section
      className='absolute top-0 left-3 flex gap-1 items-center justify-center h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.1 },
      }}
      transition={{ delay: 0.25, duration: 0.3 }}>
      <img
        src='./alya.jpg'
        className='bg-neutral-600 rounded-full w-10 h-10 duration-200 hover:bg-neutral-700 mr-1 object-cover'
      />
      <section className='text-xs flex flex-col'>
        <div className='text-neutral-600'>iPhone</div>
        <div className='text-neutral-200 font-medium'>Alya Vural</div>
      </section>
    </motion.section>
  );
}
