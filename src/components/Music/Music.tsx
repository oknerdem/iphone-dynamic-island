import { useState } from 'react';
import { motion } from 'framer-motion';
import MusicName from './MusicName';
import MusicTime from './MusicTime';
import MusicControls from './MusicControls';

function Music({
  isPlaying,
  setIsPlaying,
  time,
  timeInterval,
}: {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  time: number[];
  timeInterval: number;
}) {
  const [targetTime] = useState<number[]>([0, 3, 2, 0]);

  return (
    <motion.section
      className='absolute top-4 left-4 flex flex-col gap-2 items-start justify-center w-full -ml-4 px-3.5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.1 },
      }}
      transition={{ delay: 0.25, duration: 0.3 }}>
      <MusicName />
      <MusicTime
        time={time}
        targetTime={targetTime}
        timeInterval={timeInterval}
      />
      <MusicControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </motion.section>
  );
}

export default Music;
