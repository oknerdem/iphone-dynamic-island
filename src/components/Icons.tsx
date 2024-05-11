import { motion } from 'framer-motion';

export const IdleIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='flex w-5 h-5 mx-auto dark:text-neutral-400 text-neutral-600 items-center justify-center'>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2' />
      <path d='M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
    </svg>
  );
};

export const RingIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='flex w-5 h-5 mx-auto dark:text-neutral-400 text-neutral-600 items-center justify-center'>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
      <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
      <path d='M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727' />
      <path d='M3 6.727a11.05 11.05 0 0 1 2.792 -3.727' />
    </svg>
  );
};

export const CallIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='flex w-5 h-5 mx-auto dark:text-neutral-400 text-neutral-600 items-center justify-center'>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
      <path d='M15 7a2 2 0 0 1 2 2' />
      <path d='M15 3a6 6 0 0 1 6 6' />
    </svg>
  );
};

export const MusicIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='flex w-5 h-5 mx-auto dark:text-neutral-400 text-neutral-600 items-center justify-center'>
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
      <path d='M9 17v-13h10v13' />
      <path d='M9 8h10' />
    </svg>
  );
};

export const PlayIcon = ({
  setIsPlaying,
  isPlaying,
}: {
  setIsPlaying: (value: boolean) => void;
  isPlaying: boolean;
}) => {
  return (
    <motion.svg
      className='cursor-pointer'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsPlaying(!isPlaying)}
      width='24'
      height='20'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_2345_128667)'>
        <path
          d='M4.63672 20.7305C5.10547 20.7305 5.50391 20.543 5.97266 20.2734L19.6367 12.375C20.6093 11.8008 20.9492 11.4258 20.9492 10.8047C20.9492 10.1836 20.6093 9.8086 19.6367 9.2461L5.97266 1.33594C5.50391 1.06641 5.10547 0.890625 4.63672 0.890625C3.76953 0.890625 3.23047 1.54688 3.23047 2.56641V19.043C3.23047 20.0625 3.76953 20.7305 4.63672 20.7305Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2345_128667'>
          <rect
            width='20.0508'
            height='19.8633'
            fill='white'
            transform='translate(0.898438 0.867188)'
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const PauseIcon = ({
  setIsPlaying,
  isPlaying,
}: {
  setIsPlaying: (value: boolean) => void;
  isPlaying: boolean;
}) => {
  return (
    <motion.svg
      className='cursor-pointer'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsPlaying(!isPlaying)}
      width='24'
      height='20'
      viewBox='0 0 16 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_2345_128725)'>
        <path
          d='M2.48437 19.7382H5.15625C6.17578 19.7382 6.71484 19.1992 6.71484 18.1679V2.20703C6.71484 1.14063 6.17578 0.648438 5.15625 0.648438H2.48437C1.46484 0.648438 0.925781 1.1875 0.925781 2.20703V18.1679C0.925781 19.1992 1.46484 19.7382 2.48437 19.7382ZM11.0039 19.7382H13.6641C14.6953 19.7382 15.2227 19.1992 15.2227 18.1679V2.20703C15.2227 1.14063 14.6953 0.648438 13.6641 0.648438H11.0039C9.97266 0.648438 9.43359 1.1875 9.43359 2.20703V18.1679C9.43359 19.1992 9.97266 19.7382 11.0039 19.7382Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2345_128725'>
          <rect
            width='14.6484'
            height='19.0898'
            fill='white'
            transform='translate(0.925781 0.648438)'
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export const BackwardIcon = () => {
  return (
    <svg
      className='cursor-pointer'
      width='24'
      height='20'
      viewBox='0 0 37 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_2345_128794)'>
        <path
          d='M15.2071 19.3086C16.1211 19.3086 16.8946 18.6055 16.8946 17.3047V2.90234C16.8946 1.60156 16.1211 0.898438 15.2071 0.898438C14.7266 0.898438 14.3399 1.05078 13.8594 1.33203L1.91797 8.36328C1.08594 8.85547 0.734375 9.42969 0.734375 10.0977C0.734375 10.7773 1.08594 11.3516 1.91797 11.8438L13.8594 18.875C14.3282 19.1562 14.7266 19.3086 15.2071 19.3086ZM31.3086 19.3086C32.2227 19.3086 32.9961 18.6055 32.9961 17.3047V2.90234C32.9961 1.60156 32.2227 0.898438 31.3086 0.898438C30.8282 0.898438 30.4414 1.05078 29.961 1.33203L18.0196 8.36328C17.1875 8.85547 16.836 9.42969 16.836 10.0977C16.836 10.7773 17.1875 11.3516 18.0196 11.8438L29.961 18.875C30.4297 19.1562 30.8282 19.3086 31.3086 19.3086Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2345_128794'>
          <rect
            width='35.2969'
            height='18.4336'
            fill='white'
            transform='translate(0.734375 0.875)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const ForwardIcon = () => {
  return (
    <svg
      className='cursor-pointer'
      width='24'
      height='20'
      viewBox='0 0 35 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_2345_128811)'>
        <path
          d='M4.30859 18.9141C4.78906 18.9141 5.1875 18.7617 5.65625 18.4805L17.5976 11.4493C18.4296 10.9571 18.7929 10.3828 18.7929 9.70313C18.7929 9.03516 18.4296 8.46094 17.5976 7.96875L5.65625 0.9375C5.17578 0.65625 4.78906 0.503906 4.30859 0.503906C3.39453 0.503906 2.62109 1.20703 2.62109 2.50781V16.9102C2.62109 18.211 3.39453 18.9141 4.30859 18.9141ZM20.4101 18.9141C20.8906 18.9141 21.289 18.7617 21.7578 18.4805L33.7109 11.4493C34.5312 10.9571 34.8945 10.3828 34.8945 9.70313C34.8945 9.03516 34.5312 8.46094 33.7109 7.96875L21.7578 0.9375C21.289 0.65625 20.8906 0.503906 20.4101 0.503906C19.4961 0.503906 18.7226 1.20703 18.7226 2.50781V16.9102C18.7226 18.211 19.4961 18.9141 20.4101 18.9141Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2345_128811'>
          <rect
            width='34.6172'
            height='18.4336'
            fill='white'
            transform='translate(0.277344 0.480469)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CallAcceptIcon = () => {
  return (
    <svg
      width='28'
      height='25'
      viewBox='0 0 28 25'
      fill='none'
      className='flex w-full h-full items-center justify-center p-1'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_2345_132721)'>
        <path
          d='M8.74219 18.0078C12.1289 21.3946 16.2539 24.0078 19.6172 24.0078C21.1289 24.0078 22.4531 23.4805 23.5195 22.3086C24.1406 21.6172 24.5273 20.8086 24.5273 20.0118C24.5273 19.4258 24.3047 18.8633 23.7422 18.4649L20.1562 15.9102C19.6054 15.5352 19.1484 15.3477 18.7265 15.3477C18.1875 15.3477 17.7187 15.6524 17.1797 16.1797L16.3476 17C16.2187 17.1289 16.0547 17.1875 15.9023 17.1875C15.7148 17.1875 15.5507 17.1172 15.4218 17.0586C14.707 16.6719 13.4648 15.6055 12.3047 14.4571C11.1562 13.3086 10.0898 12.0664 9.71484 11.3399C9.64453 11.211 9.58594 11.0469 9.58594 10.8711C9.58594 10.7188 9.63281 10.5664 9.76172 10.4375L10.582 9.58203C11.1093 9.04297 11.414 8.57422 11.414 8.03516C11.414 7.61328 11.2265 7.15625 10.8398 6.60547L8.32031 3.05469C7.91015 2.49219 7.33594 2.24609 6.69141 2.24609C5.92969 2.24609 5.12109 2.59766 4.44141 3.26563C3.30469 4.35547 2.80078 5.70313 2.80078 7.19141C2.80078 10.5547 5.36719 14.6328 8.74219 18.0078Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2345_132721'>
          <rect
            width='26.8945'
            height='23.8242'
            fill='white'
            transform='translate(0.644531 0.792969)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CallDenyIcon = () => {
  return (
    <svg
      width='29'
      height='12'
      viewBox='0 0 29 12'
      fill='none'
      className='flex w-full h-full items-center justify-center p-1'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_2345_132773)'>
        <path
          d='M14.51 0.792969C9.43579 0.792969 4.66625 1.85938 2.28735 4.23828C1.20922 5.31641 0.670161 6.61719 0.740473 8.1875C0.787348 9.13672 1.08032 9.98047 1.6311 10.5312C2.04125 10.9532 2.61547 11.1875 3.28344 11.0821L7.63109 10.3437C8.28734 10.2383 8.74438 10.0391 9.03734 9.73438C9.42406 9.35938 9.54125 8.79688 9.54125 8.05859V6.875C9.54125 6.6875 9.62328 6.54688 9.74047 6.42969C9.85767 6.28906 10.0334 6.23047 10.1623 6.19531C10.9592 6.00781 12.5764 5.83203 14.51 5.83203C16.4436 5.83203 18.0491 5.97266 18.8577 6.20703C18.9749 6.24219 19.1389 6.3125 19.2678 6.42969C19.3733 6.54688 19.4436 6.67578 19.4553 6.86328L19.4671 8.05859C19.4788 8.79688 19.596 9.35938 19.971 9.73438C20.2757 10.0391 20.7327 10.2383 21.3889 10.3437L25.678 11.0703C26.3694 11.1875 26.9553 10.9414 27.4124 10.4961C27.9632 9.95703 28.2678 9.13672 28.2913 8.17578C28.3264 6.59375 27.7171 5.29297 26.6624 4.23828C24.2835 1.85938 19.5842 0.792969 14.51 0.792969Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_2345_132773'>
          <rect
            width='27.9028'
            height='10.3477'
            fill='white'
            transform='translate(0.734375 0.792969)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const RingMIcon = () => {
  return (
    <motion.svg
      className='absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: -8 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.1, delay: 0 },
      }}
      transition={{ delay: 0.25, duration: 0.3 }}>
      <path
        d='M1.17969 13.3125H13.5625C14.2969 13.3125 14.7422 12.9375 14.7422 12.3672C14.7422 11.5859 13.9453 10.8828 13.2734 10.1875C12.7578 9.64844 12.6172 8.53906 12.5547 7.64062C12.5 4.64062 11.7031 2.57812 9.625 1.82812C9.32812 0.804688 8.52344 0 7.36719 0C6.21875 0 5.40625 0.804688 5.11719 1.82812C3.03906 2.57812 2.24219 4.64062 2.1875 7.64062C2.125 8.53906 1.98438 9.64844 1.46875 10.1875C0.789062 10.8828 0 11.5859 0 12.3672C0 12.9375 0.4375 13.3125 1.17969 13.3125ZM7.36719 16.4453C8.69531 16.4453 9.66406 15.4766 9.76562 14.3828H4.97656C5.07812 15.4766 6.04688 16.4453 7.36719 16.4453Z'
        fill='white'></path>
    </motion.svg>
  );
};
