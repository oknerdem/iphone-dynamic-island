import { motion } from 'framer-motion';
import CallAccept from '@/components/Call/CallAccept';
import CallDeny from '@/components/Call/CallDeny';

export default function CallControls({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <motion.section
      className='absolute top-0 right-3 flex gap-2 items-center justify-center h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.1 },
      }}
      transition={{ delay: 0.25, duration: 0.3 }}>
      <CallDeny setStatus={setStatus} />
      <CallAccept />
    </motion.section>
  );
}
