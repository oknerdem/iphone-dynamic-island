import { StatusType } from '@/types/type';

function ButtonStatus({
  setStatus,
  status,
  Icon,
}: {
  setStatus: React.Dispatch<React.SetStateAction<StatusType>>;
  status: StatusType;
  Icon: () => JSX.Element;
}) {
  return (
    <button
      className='bg-neutral-100 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-200 rounded-xl duration-150 w-14 py-1.5 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-950/40 dark:active:bg-neutral-950/80'
      onClick={() => setStatus(status)}>
      <Icon />
    </button>
  );
}

export default ButtonStatus;
