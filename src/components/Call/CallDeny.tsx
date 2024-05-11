import { CallDenyIcon } from '@/components/Icons';

export default function CallDeny({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <button
      onClick={() => setStatus('idle')}
      className='bg-[#ed3340] hover:bg-opacity-80 rounded-full w-8 h-8 duration-200'>
      <CallDenyIcon />
    </button>
  );
}
