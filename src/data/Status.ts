import { IdleIcon, RingIcon, CallIcon, MusicIcon } from '@/components/Icons';
import { StatusType } from '@/types/type';

export const Status: {
  id: string;
  title: StatusType;
  icon: () => JSX.Element;
}[] = [
  {
    id: 'idle',
    title: 'idle',
    icon: IdleIcon,
  },
  {
    id: 'ring',
    title: 'ring',
    icon: RingIcon,
  },
  {
    id: 'call',
    title: 'call',
    icon: CallIcon,
  },
  {
    id: 'music',
    title: 'music',
    icon: MusicIcon,
  },
];
