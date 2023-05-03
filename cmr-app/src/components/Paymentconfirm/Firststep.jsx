import React from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import lineicon from '../../img/line.png'
import { useLocation,useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { useTranslation } from 'react-i18next';
import { useState} from "react";
const Firststep = () => {

    const { id } = useParams();
    const { data } = useFetch(
        `http://localhost:8800/api/car/getCarById/${id}`
    );
    console.log(data);
    const location = useLocation();
    const { dataSearch } = location.state;
    console.log('datasearch=',dataSearch);
    const { t } = useTranslation();

    //getdatapersonal
    const [info, setInfo] = useState({});
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    // const personalInfo = info.push(...dataSearch)
    const personalInfo = {
        ...info,
        ...dataSearch,
        carid: data._id
    }

    //storage cookie
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));

    return (
        <div className="container mx-auto">
            <div className="justify-between sm:flex">
                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                    <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                    <table className='my-5 mx-5'>
                        <tr >
                            <td className='py-5 pr-5 '>
                                <TextField onChange={handleChange} id="cfname" label="Firstname" variant="standard" />
                            </td>
                            <td>
                                <TextField onChange={handleChange} id="clname" label="Lastname" variant="standard" />
                            </td>
                        </tr>
                        <tr>
                            <td className='py-5 pr-5'>
                                <TextField onChange={handleChange} id="cemail" label="Email" variant="standard" />
                            </td>
                            <td>
                                <TextField onChange={handleChange} id="cphone" label="Phone Number" variant="standard" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg sm:w-2/6'>
                    <div className='mx-5 my-5'>
                        <h1 className='font-bold text-xl tracking-wide'>{t('rentsummary')}</h1>
                        <Divider />
                        <div className='mt-5'>
                            <div className='mb-2'>
                                <DirectionsCarIcon className='mb-1 text-blue-600' />
                                <label >{data.model} {data.brand} {data.year}</label>
                            </div>
                            <div className='mb-2'>
                                <LocationOnIcon className='mb-1 text-yellow-500' />
                                <label >{t('pickuplocation')}</label>
                                <p className='ml-6'>{dataSearch.getCar}</p>
                                <p className='ml-6'>{dataSearch.getCarTime}</p>
                            </div>
                            <div className='mb-2'>
                                <LocationOnIcon className='mb-1 text-red-500' />
                                <label >{t('returnlocation')}</label>
                                <p className='ml-6'>{dataSearch.backCar}</p>
                                <p className='ml-6'>{dataSearch.backCarTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-between sm:flex mt-5">
                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                    <h1 className='font-bold text-xl tracking-wide text-red-700 my-5 mx-5'>{t('rentproblems')}</h1>
                    <p className='mt-5 mx-5 font-medium'>{t('pcontactus')}</p>
                    <div className="flex mb-5">
                        <div className="flex mx-5">
                            <PhoneInTalkIcon />
                            <p>088-8888888</p>
                        </div>
                        <div className="flex mr-5">
                            <MailOutlineIcon />
                            <p>CMR@outlook.com</p>
                        </div>
                        <div className="flex ">
                            <img src={lineicon} className="w-6 mb-5 object-scale-down" alt="lineicon" />
                            <p>@cmr</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg sm:w-2/6'>
                    <div className='mx-5 my-5'>
                        <h1 className='font-bold text-xl tracking-wide mb-5'>{t('pricedetail')}</h1>
                        <p>{t('rentperiod')} ต้องคำนวนวัน 3 {t('day')}</p>
                        <Divider />
                       <p className='mt-1'>{t('totalprice')} ต้องคำนวนเวลา  {t('thb')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firststep