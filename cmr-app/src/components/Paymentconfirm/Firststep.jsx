import React  from 'react';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import lineicon from '../../img/line.png'
import { useLocation, useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useCallback } from "react";
import FormHelperText from "@mui/material/FormHelperText";
const Firststep = () => {

    const { id } = useParams();
    const { data } = useFetch(
        `http://localhost:8800/api/car/getCarById/${id}`
    );
    // console.log(data);
    const location = useLocation();
    const { dataSearch } = location.state;
    // console.log('datasearch=',dataSearch);
    const { t } = useTranslation();

    //validation firstname
    const [firstname, setFirstname] = useState('mockdata');
    const [firstnameError, setFirstnameError] = useState('');
    const [firstnameErrorInput, setFirstnameErrorInput] = useState(false);
    //validation lastname
    const [lastname, setLastname] = useState('mockdata');
    const [lastnameError, setLastnameError] = useState('');
    const [lastnameErrorInput, setLastnameErrorInput] = useState(false);
    //validation Phone
    const [phone, setPhone] = useState('1234567890');
    const [phoneError, setPhoneError] = useState('');
    const [phoneErrorInput, setPhoneErrorInput] = useState(false);
    //validation Email
    const [email, setEmail] = useState('a@b.c');
    const [emailError, setEmailError] = useState('');
    const [emailErrorInput, setEmailErrorInput] = useState(false);

    //validation firstname
    const validateFirstname = useCallback(() => {
        const regex = /^[a-zA-Zก-ฮเแไใโะึืุูิีฺำฯะั่้็๋์ุูไฟฤๆฏฎษศซฅฉฐญฑฆฒธฦฎฅฤ๊ฮฬฦฺฯๅ฿ฌฎฐธๆ๏๛า]+$/u;
        if (!firstname) {
            setFirstnameError('Please enter a name');
            setFirstnameErrorInput(true);
        } else if (!regex.test(firstname)) {
            setFirstnameError('Name can only contain letters a-z or ก-ฮ (Thai characters)');
            setFirstnameErrorInput(true);
        } else {
            setFirstnameError('');
            setFirstnameErrorInput(false);
        }
    }, [firstname]);

    //validation lastname
    const validateLastname = useCallback(() => {
        const regex = /^[a-zA-Zก-ฮเแไใโะึืุูิีฺำฯะั่้็๋์ุูไฟฤๆฏฎษศซฅฉฐญฑฆฒธฦฎฅฤ๊ฮฬฦฺฯๅ฿ฌฎฐธๆ๏๛า]+$/u;
        if (!lastname) {
            setLastnameError('Please enter a Lastname');
            setLastnameErrorInput(true);
        } else if (!regex.test(lastname)) {
            setLastnameError('Lastname can only contain letters a-z or ก-ฮ (Thai characters)');
            setLastnameErrorInput(true);
        } else {
            setLastnameError('');
            setLastnameErrorInput(false);
        }
    }, [lastname]);

    //validation Phone
    const validatePhone = useCallback(() => {

        if (!phone) {
            setPhoneError('Please enter a Phone number');
            setPhoneErrorInput(true);
        } else if (!/^\d+$/.test(phone)) {
            setPhoneError('Phone can only contain 0-9 (Number)');
            setPhoneErrorInput(true);
        } else if (phone.length !== 10) {
            setPhoneError('Phone must be exactly 10 digits long');
            setPhoneErrorInput(true);
        } else {
            setPhoneError('');
            setPhoneErrorInput(false);
        }
    }, [phone]);

      //validation email
  const validateEmail = useCallback(() => {
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/i; // Fixed regex pattern

    if (!email) {
      setEmailError('Please enter an email address');
      setEmailErrorInput(true);
    } else if (!regex.test(email)) {
      setEmailError('Please enter a valid data.email address');
      setEmailErrorInput(true);
    } else {
      setEmailError('');
      setEmailErrorInput(false);
    }

  }, [email]);

    //getdatapersonal
    const [info, setInfo] = useState({});

    // const handleChange = (e) => {
    //     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // };

    //setInfo Firstname
    const handleChangeFirstname = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setFirstname(e.target.value);
    };
    //setInfo Lastname
    const handleChangeLastname = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setLastname(e.target.value);
    };
    //setInfo Phone
    const handleChangePhone = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setPhone(e.target.value);
    };
    //setInfo Email
    const handleChangeEmail = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setEmail(e.target.value);
    };

     //useEffect Validation
  useEffect(() => {
    validateFirstname();
    validateLastname();
    validatePhone();
    validateEmail();
  }, [ validateFirstname, validateLastname, validatePhone, validateEmail ]);

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
                                <TextField error={firstnameErrorInput} onChange={handleChangeFirstname} id="cfname" label="Firstname" variant="standard" />
                                <FormHelperText error>{firstnameError}</FormHelperText>
                            </td>
                            <td>
                                <TextField error={lastnameErrorInput} onChange={handleChangeLastname} id="clname" label="Lastname" variant="standard" />
                                <FormHelperText error>{lastnameError}</FormHelperText>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-5 pr-5'>
                                <TextField error={emailErrorInput} onChange={handleChangeEmail} id="cemail" label="Email" variant="standard" />
                                <FormHelperText error>{emailError}</FormHelperText>
                            </td>
                            <td>
                                <TextField error={phoneErrorInput} onChange={handleChangePhone} id="cphone" label="Phone Number" variant="standard" inputProps={{ maxLength: 10 }} />
                                <FormHelperText error>{phoneError}</FormHelperText>
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