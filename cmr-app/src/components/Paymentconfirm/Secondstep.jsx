import React from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';
const Secondstep = () => {
    //cookie
    const savedDataSearch = localStorage.getItem('personalInfo');
    const dataSearch = savedDataSearch ? JSON.parse(savedDataSearch) : null;
    console.log(dataSearch);

    //getcatbyid
    const { id } = useParams();
    const { data} = useFetch(
        `http://localhost:8800/api/car/getCarById/${id}`
    );
    console.log(data);

    const { t } = useTranslation();
    return (
        <div className="container mx-auto">
            <div className="justify-between sm:flex">
                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                    <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                    <table className='my-5 mx-5'>
                        <tr >
                            <td className='py-5 pr-5 '>
                                <TextField id="standard-basic-read-only-input" InputProps={{readOnly: true,}} value={dataSearch.cfname} label="Firstname" variant="standard" />
                            </td>
                            <td>
                                <TextField id="standard-basic-read-only-input" InputProps={{readOnly: true,}} value={dataSearch.clname} label="Lastname" variant="standard" />
                            </td>
                        </tr>
                        <tr>
                            <td className='py-5 pr-5'>
                                <TextField id="standard-basic-read-only-input" InputProps={{readOnly: true,}} value={dataSearch.cemail} label="Email" variant="standard" />
                            </td>
                            <td>
                                <TextField id="standard-basic-read-only-input" InputProps={{readOnly: true,}} value={dataSearch.cphone} label="Phone Number" variant="standard" />
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
                                <label >{data.model}{data.brand}{data.year}</label>
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
                    <h1 className='font-bold text-xl tracking-wide text-red-700 my-5 mx-5'>{t('termsandconditions')}</h1>
                    <div className='mx-5 mb-5'>
                        <TextField
                            className='w-full'
                            id="standard-basic-read-only-input"
                            multiline
                            rows={10}
                            value={`${t('termsandconditionscontent')}`}
                            variant="filled"
                        />
                        <Checkbox /> <label>{t('accept')}</label>
                    </div>
                </div>
                <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  h-36 sm:w-2/6'>
                    <div className='mx-5 my-5'>
                        <h1 className='font-bold text-xl tracking-wide mb-5'>{t('pricedetail')}</h1>
                        <p>{t('rentperiod')} คำนวนวัน {t('day')}</p>
                        <Divider />
                        <p className='mt-1'>{t('totalprice')} คำนวนราคา {t('thb')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondstep