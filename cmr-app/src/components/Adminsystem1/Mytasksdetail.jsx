import { useParams } from 'react-router-dom';
import React from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
const Mytasksdetail = () => {
    const [info, setInfo] = useState({});
    const { id } = useParams();
    const { data } = useFetch(
        `http://localhost:8800/api/rent/getRentById/${id}`
    );
    const location = useLocation();
    const navigate = useNavigate();
    const { model, brand, year, lplate } = location.state;
    //   useEffect(() => {}, [data]);

    //Alert
    const [alertmsg, setAleartMsg] = useState('');
    const [alertcolor, setAleartColor] = useState('');
    const [openalert, setOpenAlert] = useState(false);

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };
    //loading btn
    const [loadingconfirm, setLoadingConfirm] = useState(false);

    const timer = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);


    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async () => {
        // const listPhoto = [];
        try {
            const getStatusRentdata = {
                id: data.carid,
                carRentStatus: "free" 
              };
            await axios.put( "http://localhost:8800/api/car/updateStatusRentCar",  getStatusRentdata);
            const getStatusUpdata = {
                id: data.carid,
                statusAble: "true" 
              };
            await axios.put( "http://localhost:8800/api/car/updateStatusCar",  getStatusUpdata );
            const res = await axios.put(`http://localhost:8800/api/rent/fineAndUpdateStatus/${id}`, info);
            if (res) {
                if (!loadingconfirm) {
                    setLoadingConfirm(true);
                    console.log(res, "Car rental has been successfully completed.");
                    setOpenAlert(true)
                    setAleartColor('success')
                    setAleartMsg('Car rental has been successfully completed.')
                    timer.current = window.setTimeout(() => {
                        setLoadingConfirm(false);
                        navigate("/Adminsystem1");
                    }, 2000);
                }

            }
        } catch (err) {
            console.log(err);
        }

    };

     //calculate date, price
     const getCarDate = new Date(data.getcartime);
     const backCarDate = new Date(data.returncartime);
     // Calculate the time difference in milliseconds
     const timeDiffMs = backCarDate - getCarDate;
     // Convert milliseconds to days
     const timeDiffDays = timeDiffMs / (1000 * 60 * 60 * 24);

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openalert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertcolor} sx={{ width: '100%' }}>
                    {alertmsg}
                </Alert>
            </Snackbar>
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
                                        <label >{brand} {model} {year}</label>
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
                                <img className='mt-5' src={data.photos} alt='slip' />
                            </div>

                        </div>
                        <div className='sm:w-1/2'>
                            <div className='mx-5 my-5'>
                                <h1 className='font-bold text-xl tracking-wide '>รายละเอียดราคา</h1>
                                <Divider />
                                <p className='mt-5'>ระยะเวลาเช่า {timeDiffDays} วัน</p>
                                <p className='mt-1'>ราคาทั้งหมด {data.totalprice} บาท</p>
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
                    <div className='flex justify-end'>
                        <Box sx={{ position: 'relative' }}>
                            <Button onClick={handleClick} variant="contained" disabled={loadingconfirm} >Confirm</Button>
                            {loadingconfirm && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: blue[500],
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px',
                                    }}
                                />
                            )}
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mytasksdetail

