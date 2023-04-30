import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Image } from 'antd';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MenuItem from '@mui/material/MenuItem';
import Select from "@mui/material/Select";
import axios from "axios";
import Delete from '@mui/icons-material/Delete';
const Editcar = () => {
    // get id
    const { id } = useParams();

    // const allCarById =  axios.get(`http://localhost:8800/api/car/getCarById/${id}`)

    const { data, loading, error } = useFetch(`http://localhost:8800/api/car/getCarById/${id}`);


    const [images, setImages] = useState("");
    const [imageURLs, setImageURLs] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
    const deleteThisCar = async (a) => {
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
                    window.location.href =
                        `http://localhost:3000/Adminsystem1/Editcar/${idDelete}`;
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
                                        <button onClick={() => deleteThisCar(data._id)} />
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
                                    <TextField onChange={handleChange} id="model" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.model} variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">แบรนด์:</td>
                                <td>
                                    <Select
                                        name="brand"
                                        className="w-full bg-slate-100 bg-opacity-40"
                                        value={selectChange1}
                                        onChange={handleChangeselect1}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>{data.brand}</em>
                                        </MenuItem>
                                        <MenuItem value={'Totoya'}>Totoya</MenuItem>
                                        <MenuItem value={'Honda'}>Honda</MenuItem>
                                        <MenuItem value={'Nissan'}>Nissan</MenuItem>
                                        <MenuItem value={'GWM'}>GWM</MenuItem>
                                        <MenuItem value={'Mazda'}>Mazda</MenuItem>
                                        <MenuItem value={'BMW'}>BMW</MenuItem>
                                        <MenuItem value={'Benz'}>Benz</MenuItem>
                                        <MenuItem value={'Tesla'}>Tesla</MenuItem>
                                    </Select>
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ปี:</td>
                                <td>
                                    <TextField onChange={handleChange} id="year" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.year} variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ป้ายทะเบียน:</td>
                                <td>
                                    <TextField onChange={handleChange} id="lplate" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.lplate} variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">จำนวนที่นั่ง:</td>
                                <td>
                                    <Select
                                        name="seat"
                                        className="w-full bg-slate-100 bg-opacity-40"
                                        value={selectChange2}
                                        onChange={handleChangeselect2}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>{data.seat}</em>
                                        </MenuItem>
                                        <MenuItem value={'2'}>2</MenuItem>
                                        <MenuItem value={'4'}>4</MenuItem>
                                        <MenuItem value={'5'}>5</MenuItem>
                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประตู:</td>
                                <td >
                                    <Select
                                        name="door"
                                        className="w-full bg-slate-100 bg-opacity-40"
                                        value={selectChange3}
                                        onChange={handleChangeselect3}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>{data.door}</em>
                                        </MenuItem>
                                        <MenuItem value={'2'}>2</MenuItem>
                                        <MenuItem value={'4'}>4</MenuItem>
                                        <MenuItem value={'5'}>5</MenuItem>
                                    </Select>

                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ขนาดเครื่องยนต์:</td>
                                <td >
                                    <TextField onChange={handleChange} id="engine" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.engine} variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภทเกียร์:</td>
                                <td>
                                    <Select
                                        name="gear"
                                        className="w-full bg-slate-100 bg-opacity-40"
                                        value={selectChange4}
                                        onChange={handleChangeselect4}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>{data.gear}</em>
                                        </MenuItem>
                                        <MenuItem value={'Auto'}>Auto</MenuItem>
                                        <MenuItem value={'Manual'}>Manual</MenuItem>

                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภท:</td>
                                <td>
                                    <Select
                                        name="type"
                                        className="w-full bg-slate-100 bg-opacity-40"
                                        value={selectChange5}
                                        onChange={handleChangeselect5}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em>{data.type}</em>
                                        </MenuItem>
                                        <MenuItem value={'Eco'}>Eco</MenuItem>
                                        <MenuItem value={'EV'}>EV</MenuItem>
                                        <MenuItem value={'C-Segment'}>C-Segment</MenuItem>
                                        <MenuItem value={'D-Segment'}>D-Segment</MenuItem>
                                        <MenuItem value={'SUV'}>SUV</MenuItem>

                                    </Select>
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ราคาต่อวัน:</td>
                                <td>
                                    <TextField onChange={handleChange} id="price" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.price} variant="outlined" />
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
