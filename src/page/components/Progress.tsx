import React from 'react';
import arrowUp from '../../assets/img/icons/arrow-up-solid.svg';

const Progress = () => {
  return (
    <div className='fixed grid bg-blue bottom-5 right-[10px] w-[60px] h-[60px] place-items-center rounded-full shadow-md cursor-pointer z-[2000] progress'>
      <span className=' bg-bgsecondary rounded-full grid place-items-center text-2xl text-[#ffff] progress-value'>
        <img src={arrowUp} alt='' />
      </span>
    </div>
  );
};

export default Progress;
