import React from "react";
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import hondacity from '../img/Hondacity.png'
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import Document1 from "./Document1";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import cardoor from '../img/cardoor.png'
import engine from '../img/engine.png'
import gear from '../img/gear.png'
import { Pagination } from '@mui/material';
import { Link } from "react-router-dom";
import Document from "./Document";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Carlist = () => {

    const location = useLocation();
    const lang = location.pathname.split("/")[2];
    const { t } = useTranslation();
    const car = [
        { title: "Honda City", img: hondacity, year: "2023", seat: "4", door: "4", engine: "988", gear: "auto", price: "1000" ,type: "eco" },
        { title: "Honda City", img: hondacity, year: "2023", seat: "4", door: "4", engine: "988", gear: "auto", price: "1000" ,type: "eco" },
        { title: "Honda City", img: hondacity, year: "2023", seat: "4", door: "4", engine: "988", gear: "auto", price: "1000" ,type: "eco" },
        { title: "Honda City", img: hondacity, year: "2023", seat: "4", door: "4", engine: "988", gear: "auto", price: "1000" ,type: "eco" },
        
    ]


    

    return (
        <div className="container mx-auto mt-2">

            <div className="grid gap-10 lg:grid-cols-2">
                {car.map((car) => (
                    <div className="border rounded-lg bg-white bg-opacity-60 shadow-lg">
                        
                        <div className="flex ">
                            <div className="w-1/3 mx-4 my-4">
                                <img src={car.img} alt="hondacity" className="" />
                            </div>
                            <div className="flex-col mx-4 my-4">
                                <div className="my-1">
                                    <p  className="sm:text-2xl">{car.title} {car.year}</p>
                                </div>
                                <div className="flex my-4">
                                    <div className="flex">
                                        <AirlineSeatReclineNormalIcon />
                                        <p>{car.seat}</p>
                                    </div>
                                    <div className="flex ml-1">
                                        <img src={cardoor} alt="cardoor" className='object-scale-down w-6 mb-6' />
                                        <p className="ml-1">{car.door}</p>
                                    </div>
                                    <div className="flex ml-1">
                                        <img src={engine} alt="engine" className='object-scale-down w-6 mb-6' />
                                        <p className="ml-1 mt-1 text-xs">{car.engine} cc.</p>
                                    </div>
                                    <div className="flex ">
                                        <img src={gear} alt="gear" className='object-scale-down w-5 mb-6' />
                                        <p className="ml-1">{car.gear}</p>
                                    </div>
                                    <div className="flex ml-1">
                                        <DirectionsCarIcon/>
                                        <p className="ml-1">{car.type}</p>
                                    </div>
                                </div>
                                <Divider />
                                <Document/>
                                <Document1/>
                                

                            </div>
                        </div>
                        <Divider />
                        <div className="flex justify-between">
                            <div className="flex-col">
                                <div className="flex mx-4 mt-4">
                                    <CheckCircleOutlineIcon className="text-sky-600" />
                                    <p className="text-blue-800">{t('freeservice')}</p>
                                </div>
                                <div className="mx-10 mb-4">
                                <p className="text-blue-700 text-sm">{t('service')}</p>
                                </div>

                            </div>
                            <div className="flex-col w-full mx-4 my-4 text-end ">
                                <p>{t('priceperday')}</p>
                                <p>{car.price} THB</p>
                                
                                <Link to={`/Rentconfirm/${lang}`}><Button className=" duration-300" variant="contained">{t('reservebtn')}</Button></Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="mt-10 flex ">
                <div className="mx-auto">
                    <Pagination count={10} variant="outlined" color="primary" />
                </div>

            </div>
        </div>


    )
}

export default Carlist