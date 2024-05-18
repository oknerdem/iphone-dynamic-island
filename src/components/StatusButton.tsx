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
      className='bg-neutral-200 text-neutral-900 rounded-none last:rounded-r-lg first:rounded-l-lg duration-150 px-3 py-1.5 dark:bg-neutral-700 dark:text-neutral-100'
      onClick={() => setStatus(status)}>
      <Icon />
    </button>
  ) : (
    <button
      className='text-neutral-500 hover:bg-neutral-300 rounded-none last:rounded-r-lg first:rounded-l-lg duration-150 px-3 py-1.5 dark:text-neutral-600 dark:hover:bg-neutral-700/60'
      onClick={() => setStatus(status)}>
      <Icon />
    </button>
  );
}

export default ButtonStatus;
