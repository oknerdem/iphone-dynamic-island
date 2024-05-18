import { StatusType } from '@/types/type';
import { Status } from '@/data/Status';
import ButtonStatus from '@/components/StatusButton';

function StatusSelection({
  setStatus,
  currentStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  currentStatus: StatusType;
}) {
  return (
    <section className='grid grid-cols-4 gap-2 text-sm'>
      {Status.map((status) => (
        <ButtonStatus
          key={status.id}
          currentStatus={currentStatus}
          status={status.title}
          Icon={status.icon}
          setStatus={setStatus}
        />
      ))}
    </section>
  );
}

export default StatusSelection;
