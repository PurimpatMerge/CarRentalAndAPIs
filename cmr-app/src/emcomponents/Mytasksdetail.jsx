import { useParams } from 'react-router-dom';
import React from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import slip from '../img/slip.jpg'
import Button from '@mui/material/Button';
import useFetch from "../hooks/useFetch";
import { useEffect , useState} from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const Mytasksdetail = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams();
    const { data, loading, error } = useFetch(
        `http://localhost:8800/api/rent/getRentById/${id}`
    );
    const location = useLocation();
    const { model, brand, year, lplate } = location.state;
    //   useEffect(() => {}, [data]);

    

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async () => {
        // const listPhoto = [];
        try {
            const res = await axios.put(`http://localhost:8800/api/rent/fineAndUpdateStatus/${id}`,info);
            if (res) {
                console.log(res, "add User Succesful!");
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
                            <img className='mt-5' src={slip} alt='slip' />
                        </div>

                    </div>
                    <div className='sm:w-1/2'>
                        <div className='mx-5 my-5'>
                            <h1 className='font-bold text-xl tracking-wide '>รายละเอียดราคา</h1>
                            <Divider />
                            <p className='mt-5'>ระยะเวลาเช่า คำนวนวัรน วัน</p>
                            <p className='mt-1'>ราคาทั้งหมด ราคา บาท</p>
                        </div>
                        <div className='mx-5 my-5'>
                            <h1 className='font-bold text-xl tracking-wide '>ส่วนของพนักงาน</h1>
                            <Divider />
                            <TextField id="fine" onChange={handleChange} label="ค่าปรับ" variant="standard" />
                            <div className='mt-5 w-full'>
                                <TextField onChange={handleChange} id="finedetail" className='w-full' label="หมายเหตุ" multiline rows={8} defaultValue=" " />

                            </div>

                        </div>
                    </div>

                </div>

                <Button onClick={handleClick} variant="contained" className='float-right bottom-5'>Confirm</Button>

            </div>
        </div>
    )
}
export default Mytasksdetail

