import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
//first
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
import { useState, useCallback, useEffect } from "react";
import FormHelperText from "@mui/material/FormHelperText";
//second
import { Checkbox } from '@mui/material';
//Third
import qrcode from '../../img/qrcode.jpg'
import axios from "axios";
import { Image } from 'antd';
//progress btn
import CircularProgress from '@mui/material/CircularProgress';
import { blue } from '@mui/material/colors';
import { useRef } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
//alert
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const steps = ['Personal information', 'Rent confirmation', 'Payment'];


const Paymentsteper = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    //progress btn
    const [loading, setLoading] = useState(false);
    const timer = useRef();

    //alert
    const [alert, setOpenAlert] = useState(false);
    const [msgalert, setmsgAlert] = useState('');

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps();
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };


    //first step************************************************************************************************************************
    const { id } = useParams();
    const { data } = useFetch(
        `http://localhost:8800/api/car/getCarById/${id}`
    );
    // console.log(data);
    const location = useLocation();
    const { dataSearch } = location.state;
    // console.log('datasearch=',dataSearch);
    const { t } = useTranslation();



    //calculate date, price
    const getCarDate = new Date(dataSearch.getCarTime);
    const backCarDate = new Date(dataSearch.backCarTime);
    // Calculate the time difference in milliseconds
    const timeDiffMs = backCarDate - getCarDate;
    // Convert milliseconds to days
    const timeDiffDays = timeDiffMs / (1000 * 60 * 60 * 24);
    const price = parseInt(data.price);
    // Calculate the price based on the number of days
    const totalPrice = price * timeDiffDays;


    //set Starter Validate
    const [starter1, setStarter1] = useState(true);
    const [starter2, setStarter2] = useState(true);
    const [starter3, setStarter3] = useState(true);
    const [starter4, setStarter4] = useState(true);
    //validation firstname
    const [firstname, setFirstname] = useState('mockdata');
    const [firstnameError, setFirstnameError] = useState('');
    const [firstnameErrorInput, setFirstnameErrorInput] = useState(true);
    //validation lastname
    const [lastname, setLastname] = useState('mockdata');
    const [lastnameError, setLastnameError] = useState('');
    const [lastnameErrorInput, setLastnameErrorInput] = useState(true);
    //validation Phone
    const [phone, setPhone] = useState('1234567890');
    const [phoneError, setPhoneError] = useState('');
    const [phoneErrorInput, setPhoneErrorInput] = useState(true);
    //validation Email
    const [email, setEmail] = useState('a@b.c');
    const [emailError, setEmailError] = useState('');
    const [emailErrorInput, setEmailErrorInput] = useState(true);

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


    //setInfo Firstname
    const handleChangeFirstname = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setFirstname(e.target.value);
        setStarter1(false);
    };
    //setInfo Lastname
    const handleChangeLastname = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setLastname(e.target.value);
        setStarter2(false);
    };
    //setInfo Phone
    const handleChangePhone = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setPhone(e.target.value);
        setStarter3(false);
    };
    //setInfo Email
    const handleChangeEmail = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setEmail(e.target.value);
        setStarter4(false);
    };

    //useEffect Validation
    useEffect(() => {
        validateFirstname();
        validateLastname();
        validatePhone();
        validateEmail();
    }, [validateFirstname, validateLastname, validatePhone, validateEmail]);

    // const personalInfo = info.push(...dataSearch)
    const personalInfo = {
        ...info,
        ...dataSearch,
        carid: data._id
    }

    //storage cookie
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));

    //validate btn
    const [next1btn, setNext1btn] = useState(true);

    useEffect(() => {
        if (starter1 === true || starter2 === true || starter3 === true || starter4 === true) {
            setNext1btn(true);
        }
        else if (firstnameErrorInput === true || lastnameErrorInput === true || phoneErrorInput === true || emailErrorInput === true) {
            setNext1btn(true);
        }
        else if (firstnameErrorInput === false && lastnameErrorInput === false && phoneErrorInput === false && emailErrorInput === false) {
            setNext1btn(false);
        }

    }, [firstnameErrorInput, lastnameErrorInput, phoneErrorInput, emailErrorInput, next1btn, starter1, starter2, starter3, starter4]);


    //second********************************************************************************************************
    //cookie
    const savedDataSearch = localStorage.getItem('personalInfo');
    const dataSearchsecond = savedDataSearch ? JSON.parse(savedDataSearch) : null;




    //checked?
    const [checked, setChecked] = useState(false);


    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    //Third ********************************************************************************************************** 
    const [imageURLs, setImageURLs] = useState([]);
    const [stepbtnThird, setstepbtnThird] = useState(false);
    //img
    const [images, setImages] = useState("");
    const onImageChange = (e) => {
        setImages([...e.target.files]);
        setstepbtnThird(true);
    };


    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const sendRentCar = async (e) => {
        setLoading(true);
        const list = await Promise.all(
            Object.values(images).map(async (file) => {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "cz1o5kxe");
                const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmtdxulw2/image/upload", data);
                const { url } = uploadRes.data;
                return url;
                //   listPhoto.push(uploadRes.data.url)
            })
        );

        const getStatusUpdata = {
            id: dataSearchsecond.carid,
            statusAble: "false" 
          };
        await axios.put( "http://localhost:8800/api/car/updateStatusCar",  getStatusUpdata );
        const getStatusRentdata = {
            id: dataSearchsecond.carid,
            carRentStatus: "rented" 
          };
        await axios.put( "http://localhost:8800/api/car/updateStatusRentCar",  getStatusRentdata);

        const infoRentDetail = {
            cusfname: dataSearchsecond.cfname,
            cuslname: dataSearchsecond.clname,
            cusemail: dataSearchsecond.cemail,
            cusphone: dataSearchsecond.cphone,
            getcar: dataSearchsecond.getCar,
            getcartime: dataSearchsecond.getCarTime,
            returncar: dataSearchsecond.backCar,
            returncartime: dataSearchsecond.backCarTime,
            totalprice: totalPrice,
            carid: data._id,
            photos: list

        }
        const res = await axios.post("http://localhost:8800/api/rent/addrent", infoRentDetail);
        if (res) {
            if (!loading) {
                setLoading(true);
                timer.current = window.setTimeout(() => {
                    setLoading(false);
                    handleComplete();
                    setOpenAlert(true)
                    setmsgAlert('Car rental successful! Enjoy your ride!')
                }, 2000);
            }

        }else{
            setOpenAlert(true)
            setmsgAlert('Car rental failed. Please try again.!')
        }
    };
    //alert
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <>
            {activeStep === 3 &&
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={alert} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert onClose={handleCloseAlert} severity={'success'} sx={{ width: '100%' }}>
                    {msgalert}
                    </Alert>
                </Snackbar>
            }
            {loading &&
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            }
            <div className='container mx-auto mt-10'>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" disabled={activeStep === 3} onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    <React.Fragment>
                        {/* ******************************************************************************first step*************************************************************** */}
                        {activeStep === 0 && (
                            <div className="container mx-auto mt-5">
                                <div className="justify-between sm:flex">
                                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                                        <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                                        <table className='my-5 mx-5'>
                                            <tr >
                                                <td className='py-5 pr-5 '>
                                                    <TextField required error={firstnameErrorInput} onChange={handleChangeFirstname} id="cfname" label="Firstname" variant="standard" />
                                                    <FormHelperText error>{firstnameError}</FormHelperText>
                                                </td>
                                                <td>
                                                    <TextField required error={lastnameErrorInput} onChange={handleChangeLastname} id="clname" label="Lastname" variant="standard" />
                                                    <FormHelperText error>{lastnameError}</FormHelperText>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='py-5 pr-5'>
                                                    <TextField required error={emailErrorInput} onChange={handleChangeEmail} id="cemail" label="Email" variant="standard" />
                                                    <FormHelperText error>{emailError}</FormHelperText>
                                                </td>
                                                <td>
                                                    <TextField required inputProps={{ maxLength: 10 }} error={phoneErrorInput} onChange={handleChangePhone} id="cphone" label="Phone Number" variant="standard" />
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
                                            <p>{t('rentperiod')} {timeDiffDays} {t('day')}</p>
                                            <Divider />
                                            <p className='mt-1'>{t('totalprice')} {totalPrice}  {t('thb')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* *****************************************************************************Second step*************************************************************** */}
                        {activeStep === 1 && (
                            <div className="container mx-auto mt-5">
                                <div className="justify-between sm:flex">
                                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                                        <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                                        <table className='my-5 mx-5'>
                                            <tr >
                                                <td className='py-5 pr-5 '>
                                                    <FormHelperText>Firstname</FormHelperText>
                                                    <TextField id="standard-basic-read-only-input" InputProps={{ readOnly: true, }} value={dataSearchsecond.cfname} variant="standard" />
                                                </td>
                                                <td>
                                                    <FormHelperText>Lastname</FormHelperText>
                                                    <TextField id="standard-basic-read-only-input" InputProps={{ readOnly: true, }} value={dataSearchsecond.clname} variant="standard" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='py-5 pr-5'>
                                                    <FormHelperText>Email</FormHelperText>
                                                    <TextField id="standard-basic-read-only-input" InputProps={{ readOnly: true, }} value={dataSearchsecond.cemail} variant="standard" />
                                                </td>
                                                <td>
                                                    <FormHelperText>Phone Number</FormHelperText>
                                                    <TextField id="standard-basic-read-only-input" InputProps={{ readOnly: true, }} value={dataSearchsecond.cphone} variant="standard" />
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
                                                    <p className='ml-6'>{dataSearchsecond.getCar}</p>
                                                    <p className='ml-6'>{dataSearchsecond.getCarTime}</p>
                                                </div>
                                                <div className='mb-2'>
                                                    <LocationOnIcon className='mb-1 text-red-500' />
                                                    <label >{t('returnlocation')}</label>
                                                    <p className='ml-6'>{dataSearchsecond.backCar}</p>
                                                    <p className='ml-6'>{dataSearchsecond.backCarTime}</p>
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
                                            <Checkbox checked={checked} onChange={handleCheckboxChange} /> <label>{t('accept')}</label>
                                        </div>
                                    </div>
                                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  h-36 sm:w-2/6'>
                                        <div className='mx-5 my-5'>
                                            <h1 className='font-bold text-xl tracking-wide mb-5'>{t('pricedetail')}</h1>
                                            <p>{t('rentperiod')} {timeDiffDays} {t('day')}</p>
                                            <Divider />
                                            <p className='mt-1'>{t('totalprice')} {totalPrice} {t('thb')}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                        {/********************************Third Step***************************************************************************************************************  */}
                        {activeStep === 2 && (
                            <div className="container mx-auto mt-5">
                                <div className="justify-between sm:flex">
                                    <div className='mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                                        <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg h-fit mb-10 '>
                                            <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                                            <table className='my-5 mx-5'>
                                                <tr >
                                                    <td className='py-5 pr-5 '>
                                                        <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.cfname} label="Firstname" variant="standard" />
                                                    </td>
                                                    <td>
                                                        <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.clname} label="Lastname" variant="standard" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='py-5 pr-5'>
                                                        <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.cemail} label="Email" variant="standard" />
                                                    </td>
                                                    <td>
                                                        <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.cphone} label="Phone Number" variant="standard" />
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
                                                            <label >{data.model}{data.brand}{data.year}</label>
                                                        </div>
                                                        <div className='mb-2'>
                                                            <LocationOnIcon className='mb-1 text-yellow-500' />
                                                            <label >{t('pickuplocation')}</label>
                                                            <p className='ml-6'>{dataSearchsecond.getCar}, {dataSearchsecond.getCarTime}</p>
                                                        </div>
                                                        <div className='mb-2'>
                                                            <LocationOnIcon className='mb-1 text-red-500' />
                                                            <label >{t('returnlocation')}</label>
                                                            <p className='ml-6'>{dataSearchsecond.backCar} , {dataSearchsecond.backCarTime}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-white bg-opacity-60 sm:mt-0 mt-5 rounded-lg border shadow-lg sm:w-2/6'>
                                                <div className='mx-5 my-5'>
                                                    <h1 className='font-bold text-xl tracking-wide '>{t('pricedetail')}</h1>
                                                    <Divider />
                                                    <p className='mt-5'>{t('rentperiod')} {timeDiffDays}  {t('day')}</p>
                                                    <p className='mt-1'>{t('totalprice')} {totalPrice} {t('thb')}</p>
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
                                                    <input type="file" accept="image/*" onChange={onImageChange} class="text-sm text-gray-500 file:duration-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-opacity-60 file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:scale-105" />
                                                    <p className='text-red-600'>{t('slip')}</p>
                                                </label>
                                            </form>
                                            {imageURLs.map((imageSrc) => (
                                                <Image width={150} src={imageSrc} alt="profileimg" />
                                            ))}
                                        </div>
                                    </div>
                                    <div  >

                                    </div>
                                </div>
                            </div>
                        )}
                        {/********************************Forth Step***************************************************************************************************************  */}
                        {activeStep === 3 && (
                            <div className="container mx-auto mt-5">
                                <div className="justify-between sm:flex">
                                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                                        <h1 className='font-bold text-xl tracking-wide my-5 mx-5'>{t('customercontactinformation')}</h1>
                                        <table className='my-5 mx-5'>
                                            <tr >
                                                <td className='py-5 pr-5 '>
                                                    <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.cfname} label="Firstname" variant="standard" />
                                                </td>
                                                <td>
                                                    <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.clname} label="Lastname" variant="standard" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='py-5 pr-5'>
                                                    <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.cemail} label="Email" variant="standard" />
                                                </td>
                                                <td>
                                                    <TextField InputProps={{ readOnly: true, }} value={dataSearchsecond.cphone} label="Phone Number" variant="standard" />
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
                                                    <p className='ml-6'>{dataSearchsecond.getCar}</p>
                                                    <p className='ml-6'>{dataSearchsecond.getCarTime}</p>
                                                </div>
                                                <div className='mb-2'>
                                                    <LocationOnIcon className='mb-1 text-red-500' />
                                                    <label >{t('returnlocation')}</label>
                                                    <p className='ml-6'>{dataSearchsecond.backCar} </p>
                                                    <p className='ml-6'>{dataSearchsecond.backCarTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-between sm:flex mt-5">
                                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg  mb-10 sm:mb-0 sm:mr-10 sm:w-4/6'>
                                        <h1 className='font-bold text-xl tracking-wide text-green-600 my-5 mx-5'>{t('rentcomplete')}</h1>
                                        <p className='mt-5 mx-5 text-xs sm:text-base font-medium'>{t('contactus')}</p>
                                        <div className="flex mb-5">
                                            <div className="flex mx-5">
                                                <PhoneInTalkIcon />
                                                <p className='text-xs sm:text-base'>088-8888888</p>
                                            </div>
                                            <div className="flex mr-5">
                                                <MailOutlineIcon />
                                                <p className='text-xs sm:text-base'>CMR@outlook.com</p>
                                            </div>
                                            <div className="flex ">
                                                <img src={lineicon} className="w-6 h-6" alt="lineicon" />
                                                <p className='text-xs sm:text-base'>@cmr</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white bg-opacity-60 rounded-lg border shadow-lg sm:w-2/6'>
                                        <div className='mx-5 my-5'>
                                            <h1 className='font-bold text-xl tracking-wide mb-5'>{t('pricedetail')}</h1>
                                            <p>{t('rentperiod')} {timeDiffDays} {t('day')}</p>
                                            <Divider />
                                            <p className='mt-1'>{t('totalprice')} {totalPrice} {t('thb')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0 || activeStep === 3}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>

                            <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep === 0 && (
                                <Button
                                    onClick={handleComplete}
                                    disabled={next1btn}
                                >
                                    Next
                                </Button>
                            )}
                            {activeStep === 1 && (
                                <Button onClick={handleComplete} disabled={!checked} > Next </Button>
                            )}
                            {activeStep === 2 && (
                                // <Button disabled={!stepbtnThird}  onClick={() => { sendRentCar() }}>Finish</Button>
                                <>
                                    <Box sx={{ m: 1, position: 'relative' }}>
                                        <Button
                                            disabled={!stepbtnThird || loading}
                                            onClick={() => sendRentCar()}
                                        >
                                            Finish
                                        </Button>
                                        {loading && (
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
                                </>
                            )}


                        </Box>
                    </React.Fragment>

                </div>
            </div>
        </>
    );
}

export default Paymentsteper