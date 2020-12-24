import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import data from '../../firebase/result';
export interface IAdmin {}
interface Props {}
interface IData {
  forename: string;
  surname: string;
  email: string;
  dob: string;
  gender: string;
  nominated: string;
}
interface State {
  result: Array<IData>;
}

export default class Main extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: [],
    };
  }
  componentDidMount() {
    data.get('data.json').then((res) => {
      let array = [];
      for (let key in res.data) {
        array.unshift({
          ...res.data[key],
          id: key,
        });
      }
      this.setState({ result: array });
    });
  }
  render() {
    return (
      <div className='admin-grey'>
        <div className='shape flex flex-col justify-between'>
          <div className='flex justify-center mt-5'>
            <img src={logo} alt='' className='w-3/5' />
          </div>
          <div className='admin-footer pt-10 text-td text-center pb-10'>
            Privacy | Terms | Help <br />© Copyright 2020
          </div>
        </div>
        <div className='rec'></div>
        <div className='bg-white admin-content'>
          <div className='pl-10 pt-4'>
            <div className='text-xl'>
              Customers that have registered for Pharmacy opt-in
            </div>
            <table className='w-full text-left mt-4'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Opt Status</th>
              </tr>

              {this.state.result.map((info) => {
                return (
                  <tr className='h-20'>
                    <td>
                      {info.forename} {info.surname}{' '}
                    </td>
                    <td> {info.email} </td>
                    <td> {info.gender} </td>
                    <td> {info.dob} </td>
                    <td> opted {info.nominated} </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
