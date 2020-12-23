import * as React from 'react';
import logo from '../../assets/img/logo.png';

export interface ICompleted {}

export default function Completed(props: ICompleted) {
  return (
    <div className='flex justify-center  flex-col items-center my-10 w-full'>
      <div className='complete flex justify-center     '>
        <div className='tick pr-10 px-10 text-white'> &#10003;</div>
      </div>
      <div className='flex flex-col items-center w-9/12 justify-center'>
        <img src={logo} className='w-1/4' alt='' />

        <div className='text-2xl  mt-10'>Registration Complete!</div>
        <div className='bg-sc   mt-10 h-14 text-white text-2xl text-center rounded-t-2xl rounded-b-2xl pt-3 w-1/4'>
          Homepage
        </div>
        <div className='text-td text-sm mt-10'>
          Click here to read our Privacy Policy
        </div>
      </div>
    </div>
  );
}
