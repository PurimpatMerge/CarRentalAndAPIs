import React from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import qrcode from '../img/qrcode.jpg'
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
const Thirdstep = () => {
    const { t } = useTranslation();
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };


    return (
        <div className="container mx-auto">
            <div className="justify-between sm:flex">
                <div className='mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg h-fit mb-10 '>
                        <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                        <table className='my-5 mx-5'>
                            <tr >
                                <td className='py-5 pr-5 '>
                                    <TextField id="standard-basic-read-only-input" value={"Phuwadech"} label="Firstname" variant="standard" />
                                </td>
                                <td>
                                    <TextField id="standard-basic-read-only-input" value={"Jantarapipat"} label="Lastname" variant="standard" />
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
                    <div className='sm:flex justify-between'>
                        <div className='bg-white bg-opacity-60 rounded-lg grow sm:mr-5 border shadow-lg  '>
                            <div className='mx-5 my-5'>
                                <h1 className='font-bold text-xl tracking-wide'>{t('rentsummary')}</h1>
                                <Divider />
                                <div className='mt-5'>
                                    <div className='mb-2'>
                                        <DirectionsCarIcon className='mb-1 text-blue-600' />
                                        <label >Honda City 2023</label>
                                    </div>
                                    <div className='mb-2'>
                                        <LocationOnIcon className='mb-1 text-yellow-500' />
                                        <label >{t('pickuplocation')}</label>
                                        <p className='ml-6'>ChiangMai, Airport, 10/09/2023, 9:00 AM.</p>
                                    </div>
                                    <div className='mb-2'>
                                        <LocationOnIcon className='mb-1 text-red-500' />
                                        <label >{t('returnlocation')}</label>
                                        <p className='ml-6'>ChiangMai, Airport , 13/09/2023, 16:00 AM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-60 sm:mt-0 mt-5 rounded-lg border shadow-lg sm:w-2/6'>
                            <div className='mx-5 my-5'>
                                <h1 className='font-bold text-xl tracking-wide '>{t('pricedetail')}</h1>
                                <Divider />
                                <p className='mt-5'>{t('rentperiod')} 3 {t('day')}</p>
                                <p className='mt-1'>{t('totalprice')} 3000 {t('thb')}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg sm:w-2/6'>
                    <div className='mx-5     my-5 '>
                        <h1 className='font-bold text-xl tracking-wide'>{t('step3')}</h1>
                        <div className='flex justify-center'>
                            <img src={qrcode} className="w-3/4 " alt='qrcode' />
                        </div>
                    </div>
                </div>



            </div>


            <div className="justify-between sm:flex mt-5">

                <div className=' mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                    <div className='mx-5 flex my-5'>
                        <form>
                            <label class="block">
                                <span class="sr-only">Choose File</span>
                                <input type="file" id="file" accept="image/*" onChange={onImageChange} class="text-sm text-gray-500 file:duration-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-opacity-60 file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:scale-105" />
                                <p className='text-red-600'>{t('slip')}</p>
                            </label>
                        </form>
                        {imageURLs.map((imageSrc) => (
                            <img className="sm:w-48 w-20 h-20 sm:h-48 rounded-lg" src={imageSrc} alt="profileimg" />
                        ))}
                    </div>

                </div>





            </div>
        </div>
    )
}

export default Thirdstep