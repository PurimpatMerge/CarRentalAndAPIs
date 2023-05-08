import React from "react";
import { useState, useEffect, useCallback } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Image } from 'antd';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";
import axios from "axios";
import Delete from '@mui/icons-material/Delete';
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from '@mui/material/InputLabel';
const Editcar = () => {
    // get id
    const { id } = useParams();
    //get data
    const { data } = useFetch(`http://localhost:8800/api/car/getCarById/${id}`);


    const [images, setImages] = useState("");
    const [imageURLs, setImageURLs] = useState([]);
    const [info, setInfo] = useState({});

    //***********************************************************Function For Validation******************************************************
    //validation model
    const [model, setModel] = useState(`${data.model}`);
    const [modelError, setModelError] = useState('');
    const [modelErrorInput, setModelErrorInput] = useState(false);
    //validation year
    const [year, setYear] = useState('2000');
    const [yearError, setYearError] = useState('');
    const [yearErrorInput, setYearErrorInput] = useState(false);
    //validation lplate
    const [lplate, setLplate] = useState(`${data.lplate}`);
    const [lplateError, setLplateError] = useState('');
    const [lplateErrorInput, setLplateErrorInput] = useState(false);
    //validation engine
    const [engine, setEngine] = useState('2000cc');
    const [engineError, setEngineError] = useState('');
    const [engineErrorInput, setEngineErrorInput] = useState(false);
    //validation price
    const [price, setPrice] = useState('1,000');
    const [priceError, setPriceError] = useState('');
    const [priceErrorInput, setPriceErrorInput] = useState(false);


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
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };

    // menuitem
    const [selectChange1, setSelectchange1] = useState([]);
    const handleChangeselect1 = (event) => {
        setSelectchange1(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const [selectChange2, setSelectchange2] = useState([]);
    const handleChangeselect2 = (event) => {
        setSelectchange2(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const [selectChange3, setSelectchange3] = useState([]);
    const handleChangeselect3 = (event) => {
        setSelectchange3(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const [selectChange4, setSelectchange4] = useState([]);
    const handleChangeselect4 = (event) => {
        setSelectchange4(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const [selectChange5, setSelectchange5] = useState([]);
    const handleChangeselect5 = (event) => {
        setSelectchange5(event.target.value);
        setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

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

            // const mergePhoto = [];
            data.photos.push(...list)
            console.log(data.photos);
            const editcar = {
                photos: list,
                ...data,
                ...info
            }
            // console.log(list);
            console.log(editcar);
            const res = await axios.put("http://localhost:8800/api/car/editCarById", editcar);
            window.location.reload(false);
            if (res) {
                // ให้ทำการ alert message
            }
        } catch (err) {
            console.log(err);
        }

    };

    //delete photo
    const deleteThiscarPhotos = async (a) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (confirmDelete) {
            try {
                const idDelete = a;
                console.log(idDelete);
                const success = await axios.delete(
                    `http://localhost:8800/api/car/deleteThiscarPhotos/${idDelete}`
                );
                if (success) {
                    window.location.reload(false);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };




    return (
        <>
            <div className="container mx-auto sm:max-w-screen-md ">
                <div className="flex flex-col ">
                    <div className="bg-white bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
                        <table class="table-auto mt-5 text-xs w-full sm:text-base  ">
                            <tr >
                                <td className="sm:py-4"> Car Img: </td>
                                <td>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" multiple onChange={onImageChange} />
                                        <PhotoCamera />
                                    </IconButton>
                                    <label className="font-bold text-blue-600">Upload Car Image</label>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <button onClick={() => deleteThiscarPhotos(data._id)} />
                                        <Delete className="text-red-500" />
                                    </IconButton>
                                    <label className="font-bold text-red-600">Delete Photos</label>
                                </td>

                            </tr >
                            <tr >
                                <td></td>
                                <td>
                                    {data && data.photos
                                        ? data.photos.map((imageSrc) => (
                                            <Image
                                                width={150}
                                                src={imageSrc ? imageSrc : ""}
                                                alt="profileimg"
                                            />
                                        ))
                                        : ""}
                                    {imageURLs.map((imageSrc) => (
                                        <Image width={150} src={imageSrc} alt="profileimg" />
                                    ))}
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ชื่อรุ่น:</td>
                                <td>
                                    <input
                                        className={`border px-3 ${modelErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${modelErrorInput ? 'hover:border-red-400' : 'hover:border-black'} duration-150  focus:outline-none focus:border-none ${modelErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                                        onChange={handleChangeModel}
                                        id="model"
                                        Value={data?.model}
                                    />
                                    <FormHelperText error>{modelError}</FormHelperText>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">แบรนด์:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{data?.brand}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="brand"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange1}
                                            onChange={handleChangeselect1}
                                            label={data?.brand}
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
                                    <input
                                        className={`border px-3 ${yearErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${yearErrorInput ? 'hover:border-red-400' : 'hover:border-black'} duration-150  focus:outline-none focus:border-none ${yearErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                                        onChange={handleChangeYear}
                                        id="year"
                                        Value={data?.year}
                                        maxLength='4'
                                    />
                                    <FormHelperText error>{yearError}</FormHelperText>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ป้ายทะเบียน:</td>
                                <td>
                                    <input
                                        className={`border px-3 ${lplateErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${lplateErrorInput ? 'hover:border-red-400' : 'hover:border-black'} duration-150  focus:outline-none focus:border-none ${lplateErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                                        onChange={handleChangeLplate}
                                        id="lplate"
                                        Value={data?.lplate}

                                    />
                                    <FormHelperText error>{lplateError}</FormHelperText>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">จำนวนที่นั่ง:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{data?.seat}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="seat"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange2}
                                            onChange={handleChangeselect2}
                                            label={data?.seat}
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
                                        <InputLabel id="demo-simple-select-label">{data?.door}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="door"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange3}
                                            onChange={handleChangeselect3}
                                            label={data?.door}
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
                                    <input
                                        className={`border px-3 ${engineErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${engineErrorInput ? 'hover:border-red-400' : 'hover:border-black'} duration-150  focus:outline-none focus:border-none ${engineErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                                        onChange={handleChangeEngine}
                                        id="engine"
                                        Value={data?.engine}
                                        maxLength='6'
                                    />
                                    <FormHelperText error>{engineError}</FormHelperText>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภทเกียร์:</td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">{data?.gear}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="gear"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange4}
                                            onChange={handleChangeselect4}
                                            label={data?.gear}
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
                                        <InputLabel id="demo-simple-select-label">{data?.type}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            name="type"
                                            className="w-full bg-slate-100 bg-opacity-40"
                                            value={selectChange5}
                                            onChange={handleChangeselect5}
                                            label={data?.type}
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
                                    <input
                                        className={`border px-3 ${priceErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${priceErrorInput ? 'hover:border-red-400' : 'hover:border-black'} duration-150  focus:outline-none focus:border-none ${priceErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                                        onChange={handleChangePrice}
                                        id="pricce"
                                        Value={data?.price}
                                    />
                                    <FormHelperText error>{priceError}</FormHelperText>
                                </td>
                            </tr>
                        </table>
                        <div className="float-right my-5">
                            <Button onClick={handleClick} className="sm:py-2 text-xs py-1 px-1 sm:px-4 " variant="contained">Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Editcar;
