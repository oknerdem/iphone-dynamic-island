import { useState } from 'react';
import { StatusType } from '@/types/type';
import Island from '@/components/Island';
import StatusSelection from '@/components/StatusSelection';

function Home() {
  const [status, setStatus] = useState<StatusType>('idle');

  return (
    <section className='w-full flex flex-col gap-2 items-center justify-center'>
      <StatusSelection
        setStatus={setStatus}
        currentStatus={status}
      />
      <Island
        status={status}
        setStatus={setStatus}
      />
    </section>
  );
}

export default Home;
