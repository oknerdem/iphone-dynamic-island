import ButtonStatus from '@/components/StatusButton';
import { Status } from '@/data/Status';

function StatusSelection({
  setStatus,
}: {
  setStatus: (status: string) => void;
}) {
  return (
    <section className='grid grid-cols-4 gap-2'>
      {Status.map((status) => (
        <ButtonStatus
          key={status.id}
          status={status.title}
          Icon={status.icon}
          setStatus={setStatus}
        />
      ))}
    </section>
  );
}

export default StatusSelection;
