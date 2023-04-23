import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Autocomplete from '@mui/material/Autocomplete';
import { Image } from 'antd';
const Editcar = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };

   



    const types = [
        { title: 'Eco' },
        { title: 'EV' },
        { title: 'C-segment' },
        { title: 'D-segment' },
        { title: 'SUV' },]

    const brand = [
        { title: 'Totoya' },
        { title: 'Honda' },
        { title: 'Nissan' },
        { title: 'GWM' },
        { title: 'Mazda' },
        { title: 'BMW' },
        { title: 'Benz' },
        { title: 'Tesla' },
    ]

    const gear = [
        { title: 'Auto ' },
        { title: 'Manual' },
        ]

    const seat = [
        { title: '2' },
        { title: '4' },
        { title: '5' },
    ]
    const door = [
        { title: '2' },
        { title: '4' },
        { title: '5' },
    ]

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
                                        <Image width={150} src={imageSrc} alt="profileimg" />
                                    ))}
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ชื่อรุ่น:</td>
                                <td>
                                    <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue="City" label="Model" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">แบรนด์:</td>
                                <td>
                                <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id=""
                                        options={brand}   
                                        defaultValue={{ title: "Honda"}}
                                        getOptionLabel={(options) => options.title}   
                                        renderInput={(params) => <TextField {...params}  label="Brand" />}
                                    />
                                </td>
                            </tr>
                            <tr >
                                <td className="sm:py-5 ">ปี:</td>
                                <td>
                                    <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue='2020' label="ํYear" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ป้ายทะเบียน:</td>
                                <td>
                                    <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue='กน92' label="License Plate" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">จำนวนที่นั่ง:</td>
                                <td>
                                <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id=""
                                        options={seat}       
                                        defaultValue={{ title: "4"}}
                                        getOptionLabel={(options) => options.title}                                    
                                        renderInput={(params) => <TextField {...params} value='4' label="Seat" />}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประตู:</td>
                                <td >
                                <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id=""
                                        options={door}     
                                        defaultValue={{ title: "4"}}
                                        getOptionLabel={(options) => options.title}                                    
                                        renderInput={(params) => <TextField {...params} label="Doors" />}
                                    />
                                    
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ขนาดเครื่องยนต์:</td>
                                <td >
                                    <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue={'966'} label="Engine" variant="outlined" />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภทเกียร์:</td>
                                <td>
                                    <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id=""
                                        options={gear}     
                                        defaultValue={{ title: "Auto"}}
                                        getOptionLabel={(options) => options.title}                                    
                                        renderInput={(params) => <TextField {...params} label="Gear" />}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ประเภท:</td>
                                <td>
                                    <Autocomplete className="w-full bg-slate-100 bg-opacity-40"
                                        disablePortal
                                        id=""
                                        options={types}  
                                        defaultValue={{ title: "Eco"}}
                                        getOptionLabel={(options) => options.title}                                      
                                        renderInput={(params) => <TextField  {...params}  label="Type" />}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="sm:py-5">ราคาต่อวัน:</td>
                                <td>
                                    <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue={'1000'} label="Price per day" variant="outlined" />
                                </td>
                            </tr>
                        </table>
                        <div className="float-right my-5">
                            <Button className="sm:py-2 text-xs py-1 px-1 sm:px-4 " variant="contained">Apply</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Editcar;