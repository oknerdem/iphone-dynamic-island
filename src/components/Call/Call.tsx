import Caller from '@/components/Call/Caller';
import CallControls from '@/components/Call/CallControls';

function Call({
  setStatus,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <Caller />
      <CallControls setStatus={setStatus} />
    </>
  );
}

export default Call;
