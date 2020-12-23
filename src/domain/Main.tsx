import * as React from 'react';

import logo from '../assets/img/logo.png';
export interface IMain {}

export default function Main(props: IMain) {
  return (
    <div className='bg flex justify-center my-10 flex justify-center  '>
      <div className='w-9/12 box-minh bg-white my-10 rounded-3xl  '>
        <div className='w-full flex-col flex items-center justify-center mt-10   '>
          <img src={logo} className='w-2/5' alt='' />
          <div className='text-sc'>Connect with email </div>
          <div className='mt-3  text-xl flex-col flex items-center justify-center  '>
            <div className='mb-4 w-7/12'>
              <input type='text' placeholder='Forename' className='w-full' />
              <hr className='bb-hr' />
            </div>
            <div className='mb-4 w-7/12'>
              <input type='text' placeholder='Surname' className='w-full' />
              <hr className='bb-hr ' />
            </div>
            <div className='mb-4 w-7/12'>
              <input
                type='text'
                placeholder='Date of Birth:   DD/MM/YYYY '
                className='w-full'
              />
              <hr className='bb-hr ' />
            </div>
            <div className='mb-4 w-7/12'>
              <input type='text' placeholder='Gender' className='w-full' />
              <hr className='bb-hr ' />
            </div>
            <div className='mb-4 w-7/12'>
              <input type='text' placeholder='Email' className='w-full' />
              <hr className='bb-hr ' />
            </div>

            <div className='w-7/12  text-td text-xl'>
              Do you wish for us to be your nominated Pharmacy?
            </div>
            <div className='flex flex-row  justify-start my-10 w-7/12'>
              <input type='radio' name='pharmacy' className='mt-2 mr-3' />
              <div className='text-td'>Yes</div>
              <input type='radio' name='pharmacy' className='mt-2 mx-3' />
              <div className='text-td'>No</div>
            </div>

            <div className='bg-fr w-2/3 rounded-t-2xl rounded-b-2xl text-center text-white h-12 text-2xl pt-2 mt-4'>
              Save
            </div>
            <div className='text-td text-sm mt-10'>
              Click here to read our Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
