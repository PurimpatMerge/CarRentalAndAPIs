import React from "react";
import { useState, useEffect, useCallback } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FormHelperText from "@mui/material/FormHelperText";
import { Image } from 'antd';
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
const Addcar = () => {

    const [imageURLs, setImageURLs] = useState([]);
    const [info, setInfo] = useState({});
    const [images, setImages] = useState("");
    //***********************************************************Function For Validation******************************************************
    //validation model
    const [model, setModel] = useState('data');
    const [modelError, setModelError] = useState('');
    const [modelErrorInput, setModelErrorInput] = useState(false);
    //validation year
    const [year, setYear] = useState('2000');
    const [yearError, setYearError] = useState('');
    const [yearErrorInput, setYearErrorInput] = useState(false);
    //validation lplate
    const [lplate, setLplate] = useState('data');
    const [lplateError, setLplateError] = useState('');
    const [lplateErrorInput, setLplateErrorInput] = useState(false);
    //validation engine
    const [engine, setEngine] = useState('1000cc');
    const [engineError, setEngineError] = useState('');
    const [engineErrorInput, setEngineErrorInput] = useState(false);
    //validation price
    const [price, setPrice] = useState('1,000');
    const [priceError, setPriceError] = useState('');
    const [priceErrorInput, setPriceErrorInput] = useState(false);
    //validate button
    const [submitbtn, setSubmitbtn] = useState(false);
    useEffect(() => {
        if (modelErrorInput === true || yearErrorInput === true || lplateErrorInput === true || engineErrorInput === true || priceErrorInput === true) {
          setSubmitbtn(true);
        } else {
          setSubmitbtn(false);
        }
    
      }, [modelErrorInput, yearErrorInput, lplateErrorInput, engineErrorInput, priceErrorInput, submitbtn]);
    //validation model
    const validateModel = useCallback(() => {
        const regex = /^[a-zA-Z0-9]+$/;
        if (!model) {
            setModelError('Please enter a model');
            setModelErrorInput(true);
        } else if (!regex.test(model)) {
            setModelError('Model can only contain letters a-z and Number 0-9');
            setModelErrorInput(true);
        } else {
            setModelError('');
            setModelErrorInput(false);
        }
    }, [model]);

    // validation year
    const validateYear = useCallback(() => {
        const regex = /^(19|20)\d{2}$/; // matches years from 1900 to 2099
        if (!year) {
            setYearError('Please enter a year');
            setYearErrorInput(true);
        } else if (!regex.test(year)) {
            setYearError('Year should be a valid 4-digit number between 1900 and 2099');
            setYearErrorInput(true);
        } else {
            setYearError('');
            setYearErrorInput(false);
        }
    }, [year]);

    // validation lplate
    const validateLplate = useCallback(() => {
        const regex = /^[0-9a-zA-Zก-ฮเแไใโะึืุูิีฺำฯะั่้็๋์ุูไฟฤๆฏฎษศซฅฉฐญฑฆฒธฦฎฅฤ๊ฮฬฦฺฯๅ฿ฌฎฐธๆ๏๛า]+$/u;
        if (!lplate) {
            setLplateError('Please enter a license Plate');
            setLplateErrorInput(true);
        } else if (!regex.test(lplate)) {
            setLplateError('license can only contain letters a-z or ก-ฮ (Thai characters) and 0-9 (number)');
            setLplateErrorInput(true);
        } else {
            setLplateError('');
            setLplateErrorInput(false);
        }
    }, [lplate]);

    // validation Engine
    const validateEngine = useCallback(() => {
        const regex = /^\d{1,4}cc$/;
        if (!engine) {
            setEngineError('Please enter an engine size');
            setEngineErrorInput(true);
        } else if (!regex.test(engine)) {
            setEngineError('Engine size should be a valid number followed by "cc"');
            setEngineErrorInput(true);
        } else {
            setEngineError('');
            setEngineErrorInput(false);
        }
    }, [engine]);

    // validation price
    const validatePrice = useCallback(() => {
        const regex = /^\d{1,3}(,\d{3})*(\.\d{1,2})?$/;
        if (!price) {
            setPriceError('Please enter a price');
            setPriceErrorInput(true);
        } else if (!regex.test(price)) {
            setPriceError('Price should be a valid number in Thai Baht format (e.g. 10,000.00)');
            setPriceErrorInput(true);
        } else {
            setPriceError('');
            setPriceErrorInput(false);
        }
    }, [price]);

    //useEffect Validation
    useEffect(() => {
        validateModel();
        validateYear();
        validateLplate();
        validateEngine();
        validatePrice();

    }, [validateModel, validateYear, validateLplate, validateEngine, validatePrice]);

    //***********************************************************End Function For Validation******************************************************

    useEffect(() => {
        if (images?.length < 1) return;
        const newImageUrls = [];
        images?.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    //img

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };

    //setInfo
    const handleChangeModel = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setModel(e.target.value);
    };
    const handleChangeYear = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setYear(e.target.value);
    };
    const handleChangeLplate = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setLplate(e.target.value);
    };
    const handleChangeEngine = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setEngine(e.target.value);
    };
    const handleChangePrice = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setPrice(e.target.value);
    };


    // const handleChange = (e) => {
    //     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // };


    const [selectChange1, setSelectchange1] = useState([]);
    const [selectChange2, setSelectchange2] = useState([]);
    const [selectChange3, setSelectchange3] = useState([]);
    const [selectChange4, setSelectchange4] = useState([]);
    const [selectChange5, setSelectchange5] = useState([]);

    const handleChangeselect1 = (event) => {
        setSelectchange1(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    };
    const handleChangeselect2 = (event) => {
        setSelectchange2(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    };
    const handleChangeselect3 = (event) => {
        setSelectchange3(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    };
    const handleChangeselect4 = (event) => {
        setSelectchange4(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    };
    const handleChangeselect5 = (event) => {
        setSelectchange5(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    };

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
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    useEffect(() => {
        if (success === true) {
            window.location.reload(false);
        }
    }, [success]);

    const handleClick = async (e) => {
        // const listPhoto = [];

        try {

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

            const addcar = {
                ...info,
                photos: list
            }
            console.log(addcar);
            const res = await axios.post("http://localhost:8800/api/car/addcar", addcar);
            if (res) {
                if (!loading) {
                    setSuccess(false);
                    setLoading(true);
                    timer.current = window.setTimeout(() => {
                        setSuccess(true);
                        setLoading(false);
                    }, 2000);
                }
                setAleartMsg('The car was added successfully!');
                setAleartColor('success');
                setOpenAlert(true);

            }
        } catch (err) {
            setAleartMsg('There was an error while adding the car. Please try again later.');
            setAleartColor('error');
            setOpenAlert(true);
        }

    };

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openalert} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={alertcolor} sx={{ width: '100%' }}>
                    {alertmsg}
                </Alert>
            </Snackbar>
            <div className="container mx-auto sm:max-w-screen-md ">
                <div className="flex flex-col ">
                    <div className="bg-white bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
                        <table class="table-auto mt-5 text-xs w-full sm:text-base  ">
                            <tr >
                                <td className="sm:py-4"> Car Image: </td>
                                <td>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" multiple onChange={onImageChange} />
                                        <PhotoCamera />
                                    </IconButton>
                                    <label className="font-bold text-blue-600">Upload Car Image</label>
                                </td>
                            </tr >
                            <tr >
                                <td></td>
                                <td>
                                    {imageURLs?.map((imageSrc) => (
                                        <Image width={150} src={imageSrc ? imageSrc : ''} alt="profileimg" />
                                    ))}
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ชื่อรุ่น:</td>
                                <td>
                                    <TextField required error={modelErrorInput} onChange={handleChangeModel} id="model" className="w-full bg-slate-100 bg-opacity-40" label="Model" variant="outlined" />
                                    <FormHelperText error>{modelError}</FormHelperText>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">แบรนด์:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="brand"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange1}
                                            onChange={handleChangeselect1}
                                            label="Brand"
                                        >
                                            <MenuItem value={'Totoya'}>Totoya</MenuItem>
                                            <MenuItem value={'Honda'}>Honda</MenuItem>
                                            <MenuItem value={'Nissan'}>Nissan</MenuItem>
                                            <MenuItem value={'GWM'}>GWM</MenuItem>
                                            <MenuItem value={'Mazda'}>Mazda</MenuItem>
                                            <MenuItem value={'BMW'}>BMW</MenuItem>
                                            <MenuItem value={'Benz'}>Benz</MenuItem>
                                            <MenuItem value={'Tesla'}>Tesla</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ปี:</td>
                                <td>
                                    <TextField required error={yearErrorInput} onChange={handleChangeYear} inputProps={{ maxLength: 4 }} id="year" className="w-full bg-slate-100 bg-opacity-40" label="ํYear" variant="outlined" />
                                    <FormHelperText error>{yearError}</FormHelperText>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ป้ายทะเบียน:</td>
                                <td>
                                    <TextField required error={lplateErrorInput} onChange={handleChangeLplate} id="lplate" className="w-full bg-slate-100 bg-opacity-40" label="License Plate" variant="outlined" />
                                    <FormHelperText error>{lplateError}</FormHelperText>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">จำนวนที่นั่ง:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Seat</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="seat"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange2}
                                            onChange={handleChangeselect2}
                                            label="Seat"
                                        >
                                            <MenuItem value={'2'}>2</MenuItem>
                                            <MenuItem value={'4'}>4</MenuItem>
                                            <MenuItem value={'5'}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประตู:</td>
                                <td >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Door</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="door"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange3}
                                            onChange={handleChangeselect3}
                                            label="Door"
                                        >
                                            <MenuItem value={'2'}>2</MenuItem>
                                            <MenuItem value={'4'}>4</MenuItem>
                                            <MenuItem value={'5'}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ขนาดเครื่องยนต์:</td>
                                <td >
                                    <TextField required error={engineErrorInput} onChange={handleChangeEngine} id="engine" className="w-full bg-slate-100 bg-opacity-40" label="Engine" variant="outlined" />
                                    <FormHelperText error>{engineError}</FormHelperText>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภทเกียร์:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Gear</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="gear"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange4}
                                            onChange={handleChangeselect4}
                                            label="Gear"
                                        >
                                            <MenuItem value={'Auto'}>Auto</MenuItem>
                                            <MenuItem value={'Manual'}>Manual</MenuItem>
                                        </Select>
                                    </FormControl>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภท:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="type"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange5}
                                            onChange={handleChangeselect5}
                                            label="Type"
                                        >
                                            <MenuItem value={'Eco'}>Eco</MenuItem>
                                            <MenuItem value={'EV'}>EV</MenuItem>
                                            <MenuItem value={'C-Segment'}>C-Segment</MenuItem>
                                            <MenuItem value={'D-Segment'}>D-Segment</MenuItem>
                                            <MenuItem value={'SUV'}>SUV</MenuItem>
                                        </Select>
                                    </FormControl>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ราคาต่อวัน:</td>
                                <td>
                                    <TextField required error={priceErrorInput} onChange={handleChangePrice} id="price" className="w-full bg-slate-100 bg-opacity-40" label="Price per day" variant="outlined" />
                                    <FormHelperText error>{priceError}</FormHelperText>
                                </td>
                            </tr>
                        </table>
                        <div className="float-right my-5">
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button onClick={handleClick} className="sm:py-2 text-xs py-1 px-1 sm:px-4 " disabled={submitbtn || loading  } variant="contained">Apply</Button>
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
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Addcar;
