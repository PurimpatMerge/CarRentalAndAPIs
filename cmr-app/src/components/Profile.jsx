import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { motion } from "framer-motion";
import { Image } from 'antd';
const Profile = () => {
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

  // const [position, setPosition] = React.useState('');

  // const handleChange = (event) => {
  //   setPosition(event.target.value);
  // };

  return (

    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="box container mx-auto sm:max-w-screen-md ">
      <div className="flex flex-col  sm:mt-24">
        <div className="bg-white shadow-lg bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
          <table class="table-auto mt-5 text-xs w-full sm:text-base  ">
            <tr >
              <td className="sm:py-4"> Profile Img: </td>
              <td>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" onChange={onImageChange} />
                  <PhotoCamera />
                </IconButton>
                <label className="font-bold text-blue-600">Upload Image</label>
              </td>
            </tr >
            <tr >
              <td></td>
              <td>
                {imageURLs.map((imageSrc) => (
                  <Image width={150} height={150}  src={imageSrc} alt="profileimg"  />
                ))}
              </td>
            </tr>
            <tr >
              <td className="sm:py-5 ">Username:</td>
              <td>
                <TextField className="w-full bg-slate-100 bg-opacity-40" defaultValue={"Admin1234"} label="Username" variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Password:</td>
              <td>
                <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue="1234" label="Password" variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Firstname:</td>
              <td>
                <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue="ภคพล" label="Firstname" variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Lastname:</td>
              <td >
                <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue="วีระโชติ" label="Lastname" variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Phone number:</td>
              <td >
                <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue="0999999999" label="Phone number" variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Email:</td>
              <td>
                <TextField id="" className="w-full bg-slate-100 bg-opacity-40" defaultValue="Admin123@gmail.com" label="Email" variant="outlined" />
              </td>
            </tr>

            <tr>
              <td className="sm:py-5">Position:</td>
              <td>
                <FormControl className="w-full bg-slate-100 bg-opacity-40" >
                  <InputLabel id="demo-simple-select-autowidth-label">Position</InputLabel>
                  <Select labelId="demo-simple-select-autowidth-label" id="" defaultValue="Manager" autoWidth label="Position">

                    <MenuItem value='Manager'>Manager</MenuItem>
                    <MenuItem value='Saraly'>Saraly</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>
          </table>
          <div className="float-right my-5">
            <Button className="sm:py-2 text-xs py-1 px-1 sm:px-4 " variant="contained">Apply</Button>
          </div>
        </div>
      </div>
    </motion.div>

  );
};

export default Profile;
