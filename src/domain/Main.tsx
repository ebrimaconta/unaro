import React, { Component } from 'react';

import logo from '../assets/img/logo.png';
import data from '../firebase/result';

interface Props {}
interface State {
  forename: string;
  surname: string;
  dob: string;
  gender: string;
  email: string;
  nominated: string;
}

export default class Main extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      forename: '',
      surname: '',
      dob: '',
      gender: 'Male',
      email: '',
      nominated: 'out',
    };
    this.postHandler = this.postHandler.bind(this);
  }

  postHandler(e: any) {
    e.preventDefault();
    const Data = {
      forename: this.state.forename,
      surname: this.state.surname,
      dob: this.state.dob,
      gender: this.state.gender,
      email: this.state.email,
      nominated: this.state.nominated,
    };

    data.post('/data.json', Data).then((res) => {
      console.log(res.data);
      /* window.location.href = '/completed'; */
    });
  }
  render() {
    return (
      <div className='flex justify-center'>
        <div className='bg flex justify-center my-10   '>
          <div className='w-9/12 box-minh bg-white my-10 rounded-3xl  '>
            <div className='w-full flex-col flex items-center justify-center mt-10   '>
              <img src={logo} className='w-4/6 -ml-8' alt='' />
              <div className='text-sc'>Connect with email </div>
              <form onSubmit={this.postHandler}>
                <div className='mt-3  text-xl flex-col flex items-center justify-center  '>
                  <div className='mb-4  w-48 lg:w-72'>
                    <input
                      required
                      type='text'
                      placeholder='Forename'
                      className='w-full'
                      value={this.state.forename}
                      onChange={(e) => {
                        this.setState({ forename: e.target.value });
                      }}
                    />
                    <hr className='bb-hr' />
                  </div>
                  <div className='mb-4 w-48 lg:w-72 '>
                    <input
                      required
                      type='text'
                      placeholder='Surname'
                      value={this.state.surname}
                      onChange={(e) => {
                        this.setState({ surname: e.target.value });
                      }}
                      className='w-full'
                    />
                    <hr className='bb-hr ' />
                  </div>
                  <div className='mb-4 w-48 lg:w-72  text-td '>
                    <div className='flex justify-between  flex-col lg:flex-row '>
                      <div className=''>Date of Birth:</div>
                      <input
                        required
                        type='date'
                        placeholder='DD/MM/YYYY'
                        value={this.state.dob}
                        onChange={(e) => {
                          this.setState({ dob: e.target.value });
                        }}
                        className='dob-input'
                      />
                    </div>
                    <hr className='bb-hr ' />
                  </div>
                  <div className='mb-4 w-48 lg:w-72   text-td '>
                    <div className='flex flex-col  lg:flex-row justify-between'>
                      <div className=''>Gender</div>
                      <select
                        required
                        name=''
                        id=''
                        value={this.state.gender}
                        onChange={(e) => {
                          this.setState({ gender: e.target.value });
                        }}
                      >
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                      </select>
                    </div>
                    <hr className='bb-hr ' />
                  </div>
                  <div className='mb-4 w-48 lg:w-72 '>
                    <input
                      required
                      type='email'
                      placeholder='Email'
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                      className='w-full'
                    />
                    <hr className='bb-hr ' />
                  </div>

                  <div className='  text-td text-xl w-3/4 ml-14'>
                    Do you wish for us to be your nominated Pharmacy?
                  </div>
                  <div className='flex flex-row w-3/5 justify-start my-10 '>
                    <input
                      required
                      type='radio'
                      name='pharmacy'
                      value='in'
                      onChange={(e) => {
                        this.setState({ nominated: e.target.value });
                      }}
                      className='mt-2 mr-3'
                    />
                    <div className='text-td'>Yes</div>
                    <input
                      required
                      type='radio'
                      name='pharmacy'
                      value='out'
                      checked
                      onChange={(e) => {
                        this.setState({ nominated: e.target.value });
                      }}
                      className='mt-2 mx-3'
                    />
                    <div className='text-td'>No</div>
                  </div>

                  <button className='bg-fr w-2/3 rounded-t-2xl rounded-b-2xl text-center text-white h-12 text-2xl   mt-4'>
                    Save
                  </button>

                  <div className='text-td text-sm mt-10'>
                    Click here to read our{' '}
                    <span className='blue'> Privacy Policy</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
