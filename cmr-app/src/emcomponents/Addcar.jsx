import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Autocomplete from '@mui/material/Autocomplete';
import { Image } from 'antd';
const Addcar = () => {
    const [images, setImages] = useState([]);
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
    


    const types = [
        { label: 'Eco' },
        { label: 'EV' },
        { label: 'C-segment' },
        { label: 'D-segment' },
        { label: 'SUV' },]

    const brand = [
        { label: 'Totoya' },
        { label: 'Honda' },
        { label: 'Nissan' },
        { label: 'GWM' },
        { label: 'Mazda' },
        { label: 'BMW' },
        { label: 'Benz' },
        { label: 'Tesla' },
    ]

    const gear = [
        { label: 'Auto' },
        { label: 'Manual' },
       ]

    const seat = [
        { label: '2' },
        { label: '4' },
        { label: '5' },
    ]
    const door = [
        { label: '2' },
        { label: '4' },
        { label: '5' },
    ]

    const handleClick = async (e) => {
        try {
            console.log(info)
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <>
            <div className="container mx-auto sm:max-w-screen-md ">
                <div className="flex flex-col ">
                    <div className="bg-white bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
                        <table class="table-auto mt-5 text-xs w-full sm:text-base  ">
                            <tr >
                                <td className="sm:py-4"> Car Image: </td>
                                <td>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file" onChange={onImageChange} />
                                        <PhotoCamera />
                                    </IconButton>
                                    <label className="font-bold text-blue-600">Upload Car Image</label>
                                </td>
                            </tr >
                            <tr >
                                <td></td>
                                <td>
                                    {imageURLs.map((imageSrc) => (
                                        <Image width={150}  src={imageSrc} alt="profileimg" />
                                    ))}
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ชื่อรุ่น:</td>
                                <td>
                                    <TextField  onChange={handleChange} id="model" className="w-full bg-slate-100 bg-opacity-40" label="Model" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">แบรนด์:</td>
                                <td>
                                <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id="brand"
                                        options={brand}     
                                        onChange={handleChange}                                  
                                        renderInput={(params) => <TextField {...params} label="Brand" />}
                                    />
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ปี:</td>
                                <td>
                                    <TextField  onChange={handleChange} id="year" className="w-full bg-slate-100 bg-opacity-40" label="ํYear" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ป้ายทะเบียน:</td>
                                <td>
                                    <TextField  onChange={handleChange} id="lplate" className="w-full bg-slate-100 bg-opacity-40" label="License Plate" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">จำนวนที่นั่ง:</td>
                                <td>
                                <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id="seat"
                                        options={seat}      
                                        onChange={handleChange}                                 
                                        renderInput={(params) => <TextField {...params} label="Seat" />}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประตู:</td>
                                <td >
                                <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id="door"
                                        options={door}   
                                        onChange={handleChange}                                    
                                        renderInput={(params) => <TextField {...params} label="Doors" />}
                                    />
                                    
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ขนาดเครื่องยนต์:</td>
                                <td >
                                    <TextField  onChange={handleChange} id="engine" className="w-full bg-slate-100 bg-opacity-40" label="Engine" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภทเกียร์:</td>
                                <td>
                                    <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id="gear"
                                        options={gear}    
                                        onChange={handleChange}                                   
                                        renderInput={(params) => <TextField {...params} label="Gear" />}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภท:</td>
                                <td>
                                    <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id="type"
                                        options={types}   
                                        onChange={handleChange}                                   
                                        renderInput={(params) => <TextField {...params} label="Type" />}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ราคาต่อวัน:</td>
                                <td>
                                    <TextField  onChange={handleChange} id="price" className="w-full bg-slate-100 bg-opacity-40" label="Price per day" variant="outlined" />
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

export default Addcar;
