function MusicName() {
  return (
    <section className='flex w-full gap-1.5'>
      <img
        src='https://f4.bcbits.com/img/a3554257801_5.jpg'
        className='bg-neutral-600 rounded-lg w-11 h-11 duration-200 hover:bg-neutral-700 mr-1 object-cover'
      />
      <section className='text-sm flex flex-col items-start justify-center h-11 leading-tight w-full'>
        <div className='text-neutral-200'>Helena</div>
        <div className='text-neutral-500'>The Misfits</div>
      </section>
    </section>
  );
}

export default MusicName;
