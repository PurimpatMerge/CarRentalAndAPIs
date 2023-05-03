import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Image } from 'antd';
import axios from "axios";
const Addprofile = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [info, setInfo] = useState({});
  const [images, setImages] = useState("");

  useEffect(() => {
    if (images?.length < 1) return;
    const newImageUrls = [];
    images?.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };



  const [position, setPosition] = React.useState([]);

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
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

      const adduser = {
        ...info,
        photos: list
      }
      // console.log(adduser);
      const res = await axios.post("http://localhost:8800/api/auth/register", adduser);
      if(res){
      console.log(res,"add User Succesful!");
      }
    } catch (err) {
      console.log(err);
    }

  };

  return (
    <>
      <div className="container mx-auto sm:max-w-screen-md ">
        <div className="flex flex-col sm:mt-24">
          <div className="bg-white bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
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
                    <Image width={150} height={150} src={imageSrc} alt="profileimg" />
                  ))}
                </td>
              </tr>
              <tr >
                <td className="sm:py-5 ">Username:</td>
                <td>
                  <TextField id="username" onChange={handleChange} className="w-full bg-slate-100 bg-opacity-40" label="Username" variant="outlined" />
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Password:</td>
                <td>
                  <TextField id="password" onChange={handleChange} className="w-full bg-slate-100 bg-opacity-40" label="Password" variant="outlined" />
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Firstname:</td>
                <td>
                  <TextField id="fname" onChange={handleChange} className="w-full bg-slate-100 bg-opacity-40" label="Firstname" variant="outlined" />
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Lastname:</td>
                <td >
                  <TextField id="lname" onChange={handleChange} className="w-full bg-slate-100 bg-opacity-40" label="Lastname" variant="outlined" />
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Phone number:</td>
                <td >
                  <TextField id="phone" onChange={handleChange} className="w-full bg-slate-100 bg-opacity-40" label="Phone number" variant="outlined" />
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Email:</td>
                <td>
                  <TextField id="email" onChange={handleChange} className="w-full bg-slate-100 bg-opacity-40" label="Email" variant="outlined" />
                </td>
              </tr>

              <tr>
                <td className="sm:py-5">Position:</td>
                <td>
                  <Select name="position" className="w-full bg-slate-100 bg-opacity-40" value={position} onChange={handleChangePosition}  displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Manager'}>Manager</MenuItem>
                    <MenuItem value={'Sale'}>Sale</MenuItem>
                  </Select>
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

export default Addprofile;
