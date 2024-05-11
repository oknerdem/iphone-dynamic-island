import { useEffect, useState } from 'react';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { StatusType } from '@/types/type';
import IslandBox from '@/components/IslandBox';
import Music from '@/components/Music/Music';
import Call from '@/components/Call/Call';
import Ring from '@/components/Ring/Ring';
import useTimer from '@/hooks/use-timer';

function Island({
  status,
  setStatus,
}: {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, timeInterval] = useTimer(isPlaying);
  const controls = useAnimation();

  useEffect(() => {
    if (!isPlaying) {
      setIsPlaying(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    const controlStyles: Record<string, Record<string, number>> = {
      idle: { paddingBottom: 0, width: 130, height: 35 },
      ring: { paddingBottom: 0, width: 185, height: 35 },
      call: { paddingBottom: 60, width: 260, height: 40 },
      music: { paddingBottom: 125, width: 260, height: 40 },
      default: { paddingBottom: 0, width: 130, height: 35 },
    };
    controls.start(controlStyles[status] || controlStyles.default);
  }, [status, controls]);

  return (
    <IslandBox controls={controls}>
      <AnimatePresence>
        {status === 'ring' && <Ring />}
        {status === 'call' && <Call setStatus={setStatus} />}
        {status === 'music' && (
          <Music
            time={time}
            timeInterval={timeInterval}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )}
      </AnimatePresence>
    </IslandBox>
  );
}

export default Island;
