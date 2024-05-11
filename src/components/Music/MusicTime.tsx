function MusicTime({
  time,
  targetTime,
  timeInterval,
}: {
  time: number[];
  targetTime: number[];
  timeInterval: number;
}) {
  return (
    <section className='text-neutral-300 text-xs flex justify-between items-center w-full gap-2'>
      <div className='font-mono'>
        {time[0]}
        {time[1]}:{time[2]}
        {time[3]}
      </div>
      <input
        type='range'
        min={0}
        max={200}
        value={timeInterval}
        readOnly
        className='border w-full accent-[#a060a9] appearance-none rounded-full h-1 bg-neutral-100 border-none'
      />
      <div className='font-mono'>
        {targetTime[0]}
        {targetTime[1]}:{targetTime[2]}
        {targetTime[3]}
      </div>
    </section>
  );
}

export default MusicTime;
