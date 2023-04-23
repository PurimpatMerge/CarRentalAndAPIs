
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import hondacity from '../img/Hondacity.png'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import Document from './Document';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PinDropIcon from '@mui/icons-material/PinDrop';
import cardoor from '../img/cardoor.png'
import engine from '../img/engine.png'
import gear from '../img/gear.png'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import { useLocation } from 'react-router-dom';



const Rentconfirmcontent = () => {
    const location = useLocation();
    const lang = location.pathname.split("/")[2];
    const { t} = useTranslation();
  console.log(lang);

    const car = [
        { title: "Honda City", img: hondacity, year: "2023", seat: "4", door: "4", engine: "988", gear: "auto", price: "1000" },
    ]

    return (
        <div className="container mx-auto">
            {car.map((car, index) => (
                <div className="border rounded-lg  mx-4 bg-white bg-opacity-60 shadow-lg">
                    <div className="lg:flex  ">
                        <div className="w-2/4 mx-4 my-4">
                            <img src={car.img} alt="hondacity" className="" />
                        </div>
                        <div className="flex-col mx-4 my-4">
                            <div className="my-1">
                                <p className="sm:text-2xl">{car.title} {car.year}</p>
                            </div>
                            <div className="flex my-4">
                                <div className="flex">
                                    <AirlineSeatReclineNormalIcon />
                                    <p>{car.seat}</p>
                                </div>
                                <div className="flex ml-1">
                                    <img src={cardoor} alt="cardoor" className='w-6 h-6' />
                                    <p className="ml-1">{car.door}</p>
                                </div>
                                <div className="flex ml-1">
                                    <img src={engine} alt="engine" className=' w-6 h-6' />
                                    <p className="ml-1 text-xs mt-1 lg:mt-0 lg:text-base">{car.engine} cc.</p>
                                </div>
                                <div className="flex ml-1">
                                    <img src={gear} alt="gear" className='h-5 w-5 mb-1' />
                                    <p className="ml-1 text-xs mt-1 lg:mt-0 sm:text-base">{car.gear}</p>
                                </div>
                            </div>

                            <Divider />
                            <Document/>
                            <div>
                                <p className="ml-6 mt-10 font-semibold">{t('condition')}</p>
                                <div className="flex">
                                    <ErrorOutlineIcon className="text-amber-300" />
                                    <p >{t('conditiondetail1')}</p>
                                </div>
                                <div className="flex">
                                    <ErrorOutlineIcon className="text-amber-300" />
                                    <p >{t('conditiondetail2')}</p>
                                </div>
                                <div className="flex">
                                    <ErrorOutlineIcon className="text-amber-300" />
                                    <p >{t('conditiondetail3')}</p>
                                </div>

                            </div>
                            <div className="flex mt-4">
                                <PinDropIcon className="text-red-600" />
                                <p>Central Festival ChiangMai</p>
                            </div>



                        </div>
                    </div>
                    <Divider />
                    <div className="flex justify-between">
                        <div className="flex-col">
                            <div className="flex mx-4 mt-4">
                                <CheckCircleOutlineIcon className="text-sky-600" />
                                <p className="text-sky-600">{t('freeservice')}</p>
                            </div>
                            <div className="mx-10 mb-4">
                                <p className="text-sky-400 text-sm">{t('service')}</p>

                            </div>

                        </div>
                        <div className="flex-col mx-4 my-4 w-full text-end">
                            <p>{t('priceperday')}</p>
                            <p>{car.price} THB</p>
                            
                            <Link to={`/Paymentconfirm/${lang}`}><Button className=" duration-300" variant="contained">{t('rent')}</Button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Rentconfirmcontent