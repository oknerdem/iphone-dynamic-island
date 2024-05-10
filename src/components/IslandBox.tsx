import { motion, useAnimation } from 'framer-motion';

function IslandBox({
  controls,
  children,
}: {
  controls: ReturnType<typeof useAnimation>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={controls}
      className='bg-black rounded-full w-40 h-9 mt-2 relative mx-auto'>
      {children}
    </motion.div>
  );
}

export default IslandBox;
