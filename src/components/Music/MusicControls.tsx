import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from '../Icons';

function MusicControls({
  isPlaying,
  setIsPlaying,
}: {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}) {
  return (
    <section className='w-full items-center justify-center flex gap-3'>
      <BackwardIcon />
      {isPlaying ? (
        <PauseIcon
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      ) : (
        <PlayIcon
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      )}
      <ForwardIcon />
    </section>
  );
}

export default MusicControls;
