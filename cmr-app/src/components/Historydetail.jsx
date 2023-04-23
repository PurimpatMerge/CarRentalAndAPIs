
import React from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import slip from '../img/slip.jpg'
import { motion } from "framer-motion";

const Historydetail = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }} 
        className="box container w-fit mx-auto bg-white bg-opacity-70 shadow-lg my-5 h-fit overflow-hidden rounded-lg">
            <div className="my-5 mx-5">
                <div className="justify-between sm:flex">
                    <div className='  mb-10 sm:mb-0 sm:mr-10 sm:w-1/2'>
                        <h1 className='font-bold text-xl tracking-wide mt-5 mx-5'>ข้อมูลผู้เช่า</h1>
                        <Divider />
                        <table className='my-5 mx-5'>
                            <tr >
                                <td className='py-5 pr-5 '>
                                    <TextField id="standard-basic-read-only-input" value={"Phuwadech"} label="Firstname" variant="standard" />
                                </td>
                                <td>
                                    <TextField id="standard-basic-read-only-input" value={"Jantarapipat "} label="Lastname" variant="standard" />
                                </td>
                            </tr>
                            <tr>
                                <td className='py-5 pr-5'>
                                    <TextField id="standard-basic-read-only-input" value={"Phuwa@gmail.com"} label="Email" variant="standard" />
                                </td>
                                <td>
                                    <TextField id="standard-basic-read-only-input" value={"0811111111"} label="Phone Number" variant="standard" />
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
                                    <label >Honda City 2020</label>
                                    <label >กน92</label>
                                </div>
                                <div className='mb-2'>
                                    <LocationOnIcon className='mb-1 text-yellow-500' />
                                    <label >สถานที่รับรถ</label>
                                    <p className='ml-6'>ChiangMai, Airport</p>
                                    <p className='ml-6'>21/01/2023, 9:00 AM.</p>
                                </div>
                                <div className='mb-2'>
                                    <LocationOnIcon className='mb-1 text-red-500' />
                                    <label >สถานที่คืนรถ</label>
                                    <p className='ml-6'>ChiangMai, Airport</p>
                                    <p className='ml-6'>23/01/2023, 16:00 AM.</p>
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
                            <p className='mt-5'>ระยะเวลาเช่า 3 วัน</p>
                            <p className='mt-1'>ราคาทั้งหมด 3000 บาท</p>
                            <p className='mt-1'>ค่าปรับ 0 บาท</p>
                            <div className='mt-5 w-full'>
                                <TextField id="outlined-multiline-static" className='w-full' label="หมายเหตุ" multiline rows={8} value="รถปกติไม่มีการเฉี่ยวชน"/>
                                
                            </div>
                        </div>
                        <div className='mx-5 my-5'>
                            <h1 className='font-bold text-xl tracking-wide '>ผู้รับผิดชอบ</h1>
                            <Divider />
                            <p className='mt-5'>โอภาส สิงห์ขาว</p>
                        </div>
                    </div>

                </div>


            </div>
        </motion.div>
    )
}
export default Historydetail