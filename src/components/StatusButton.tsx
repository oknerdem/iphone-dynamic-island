import { StatusType } from '@/types/type';

function ButtonStatus({
  setStatus,
  status,
  Icon,
  currentStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  status: StatusType;
  Icon: React.FC;
  currentStatus: StatusType;
}) {
  return currentStatus === status ? (
    <button
      className='bg-neutral-100 text-neutral-900 rounded-lg duration-150 px-3 py-1.5 dark:bg-neutral-950 dark:text-neutral-100'
      onClick={() => setStatus(status)}>
      <Icon />
    </button>
  ) : (
    <button
      className='text-neutral-500 hover:bg-neutral-200 rounded-lg duration-150 px-3 py-1.5 dark:text-neutral-600 dark:hover:bg-neutral-950/40'
      onClick={() => setStatus(status)}>
      <Icon />
    </button>
  );
}

export default ButtonStatus;
