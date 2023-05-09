import { useParams } from 'react-router-dom';
import React, { useEffect, useState }from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import slip from '../../img/slip.jpg'
import Button from '@mui/material/Button';
import useFetch from "../../hooks/useFetch";
import { useLocation } from 'react-router-dom';
import axios from "axios";
const Historydetail = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `http://localhost:8800/api/rent/getRentById/${id}`
    );
    const location = useLocation();
    const { model, brand, year, lplate } = location.state;
    //   useEffect(() => {}, [data]);
    
    const [user, setUser] = useState('null');

    useEffect(() => {
        const timerId = setTimeout(() => {
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }, 500);
    
        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timerId);
    
      }, []);

      

    const handleClick = async () => {
        // const listPhoto = [];
        try {
            const res = await axios.put(`http://localhost:8800/api/rent/distributionAndUpdateStatus/${id}`);
            if (res) {
                console.log(res, "Confirmed");
            }
        } catch (err) {
            console.log(err);
        }

    };
    
    const handleClickReject = async () => {
        // const listPhoto = [];
        try {
            const res = await axios.put(`http://localhost:8800/api/rent/distributionAndUpdateStatusRejected/${id}/${user.fname}`);
            if (res) {
                console.log(res, "Rejected");
            }
        } catch (err) {
            console.log(err);
        }

    };

    return (
        <div className="container w-fit mx-auto bg-white bg-opacity-70 my-5 h-fit overflow-hidden rounded-lg">
            <div className="my-5 mx-5">
                <div className="justify-between sm:flex">
                    <div className='  mb-10 sm:mb-0 sm:mr-10 sm:w-1/2'>
                        <h1 className='font-bold text-xl tracking-wide mt-5 mx-5'>ข้อมูลผู้เช่า</h1>
                        <Divider />
                        <table className='my-5 mx-5'>
                            <tr >
                                <td className='py-5 pr-5 '>
                                    <label >Firstname</label>
                                    <TextField InputProps={{ readOnly: true, }} value={data.cusfname} variant="standard" />
                                </td>
                                <td>
                                    <label >Lastname</label>
                                    <TextField InputProps={{ readOnly: true, }} value={data.cuslname} variant="standard" />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-5 pr-5'>
                                    <label >Email</label>
                                    <TextField InputProps={{ readOnly: true, }} value={data.cusemail} variant="standard" />
                                </td>
                                <td>
                                    <label >Phone Number</label>
                                    <TextField InputProps={{ readOnly: true, }} value={data.cusphone} variant="standard" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='sm:w-1/2'>
                        <div className='mx-5 my-5'>
                            <h1 className='font-bold text-xl tracking-wide'>สรุปการจอง</h1>
                            <Divider />
                            <div className='mt-5'>
                                <div className='mb-2'>
                                    <DirectionsCarIcon className='mb-1 text-blue-600' />
                                    <label >{model}{brand}{year}</label>
                                    <label > {lplate}</label>
                                </div>
                                <div className='mb-2'>
                                    <LocationOnIcon className='mb-1 text-yellow-500' />
                                    <label >สถานที่รับรถ</label>
                                    <p className='ml-6'>{data.getcar}</p>
                                    <p className='ml-6'>{data.getcartime}</p>
                                </div>
                                <div className='mb-2'>
                                    <LocationOnIcon className='mb-1 text-red-500' />
                                    <label >สถานที่คืนรถ</label>
                                    <p className='ml-6'>{data.returncar}</p>
                                    <p className='ml-6'>{data.returncartime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-between sm:flex">
                    <div className='  mb-10 sm:mb-0 sm:mr-10 sm:w-1/2'>
                        <div className='mx-5 my-5'>
                            <h1 className='font-bold text-xl tracking-wide '>ข้อมูลการโอนเงิน</h1>
                            <Divider />
                            <img className='mt-5 h-96' src={slip} alt='slip' />
                        </div>
                    </div>
                    <div className='sm:w-1/2'>
                        <div className='mx-5 my-5'>
                            <h1 className='font-bold text-xl tracking-wide '>รายละเอียดราคา</h1>
                            <Divider />
                            <p className='mt-5'>ระยะเวลาเช่า คำนวนวัรน วัน</p>
                            <p className='mt-1'>ราคาทั้งหมด ราคา บาท</p>
                        </div>
                    </div>
                </div>
                <div className='float-right mb-5'>
                    <Button onClick={handleClick} variant="contained" className='mx-5' >Confirm</Button>
                    <Button onClick={handleClickReject} color="error" variant="outlined" >Reject</Button>
                </div>



            </div>
        </div>
    )
}
export default Historydetail