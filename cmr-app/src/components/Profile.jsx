import React from "react";
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { motion } from "framer-motion";
import { Image } from 'antd';
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Delete from '@mui/icons-material/Delete';
import axios from "axios";
const Profile = () => {

  //get params 
  const { id } = useParams();
  const { data, loading, error } = useFetch(`http://localhost:8800/api/auth/getuserbyid/${id}`);

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

  //menuitems
  const [selectChange, setSelectchange] = useState([]);
  const handleChangeselect = (event) => {
    setSelectchange(event.target.value);
    setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  //edit function
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
      const edituser = {
        photos: list,
        ...data,
        ...info
      }
      // console.log(list);
      // console.log(edituser);
      const res = await axios.put("http://localhost:8800/api/auth/edituserbyid", edituser);
      
      if (res) {
        window.location.reload(false);
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
          `http://localhost:8800/api/auth/deletethisuserphotos/${idDelete}`
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

    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="box container mx-auto sm:max-w-screen-md ">
      <div className="flex flex-col ">
        <div className="bg-white shadow-lg bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
          <table class="table-auto mt-5 text-xs w-full sm:text-base  ">
            <tr >
              <td className="sm:py-4"> Profile Img: </td>
              <td>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" multiple onChange={onImageChange} />
                  <PhotoCamera />
                </IconButton>
                <label className="font-bold text-blue-600">Upload Image</label>
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
              <td className="sm:py-5 ">Username:</td>
              <td>
                <TextField onChange={handleChange} id="username" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.username} variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Password:</td>
              <td>
                <TextField onChange={handleChange} id="password" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.password} variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Firstname:</td>
              <td>
                <TextField onChange={handleChange} id="fname" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.fname} variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Lastname:</td>
              <td >
                <TextField onChange={handleChange} id="lname" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.lname} variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Phone number:</td>
              <td >
                <TextField onChange={handleChange} id="phone" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.phone} variant="outlined" />
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Email:</td>
              <td>
                <TextField onChange={handleChange} id="email" className="w-full bg-slate-100 bg-opacity-40" placeholder={data.email} variant="outlined" />
              </td>
            </tr>

            <tr>
              <td className="sm:py-5">Position:</td>
              <td>
                <Select
                  name="position"
                  className="w-full bg-slate-100 bg-opacity-40"
                  value={selectChange}
                  onChange={handleChangeselect}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>{data.seat}</em>
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
    </motion.div>

  );
};

export default Profile;
