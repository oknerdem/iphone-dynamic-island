import { StatusType } from '@/types/type';
import { Status } from '@/data/Status';
import ButtonStatus from '@/components/StatusButton';

function StatusSelection({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
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
