import { useState } from 'react';
import Island from '@/components/Island';
import StatusSelection from '@/components/StatusSelection';

function App() {
  const [status, setStatus] = useState('idle');

  return (
    <main className='min-h-screen h-full w-full p-8 flex flex-col items-start justify-start'>
      <section className='w-full flex flex-col gap-2 items-center justify-center'>
        <StatusSelection setStatus={setStatus} />
        <Island
          status={status}
          setStatus={setStatus}
        />
      </section>
    </main>
  );
}

export default App;
