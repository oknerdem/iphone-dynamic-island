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
      layout
      animate={controls}
      style={{ borderRadius: 30 }}
      className='bg-black rounded-full w-36 h-8 mt-3 relative mx-auto'>
      {children}
    </motion.div>
  );
}

export default IslandBox;
