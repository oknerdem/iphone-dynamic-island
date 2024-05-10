import Caller from './Caller';
import CallControls from './CallControls';

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
