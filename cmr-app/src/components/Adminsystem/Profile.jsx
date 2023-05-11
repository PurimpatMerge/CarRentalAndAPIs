import React from "react";
import { useState, useEffect, useCallback } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { motion } from "framer-motion";
import { Image } from 'antd';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Delete from '@mui/icons-material/Delete';
import axios from "axios";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
const Profile = () => {

  //get params 
  const { id } = useParams();
  //get data
  const { data } = useFetch(`http://localhost:8800/api/auth/getuserbyid/${id}`);

  const [images, setImages] = useState("");
  const [imageURLs, setImageURLs] = useState([]);
  const [info, setInfo] = useState({});

  //***********************************************************Function For Validation******************************************************
  //validation username
  const [username, setUsername] = useState(`${data.username}`);
  const [usernameError, setUsernameError] = useState('');
  const [usernameErrorInput, setUsernameErrorInput] = useState(false);
  //validation password
  const [password, setPassword] = useState(`${data.password}`);
  const [passwordError, setPasswordError] = useState('');
  const [passwordErrorInput, setPasswordErrorInput] = useState(false);
  //validation firstname
  const [firstname, setFirstname] = useState(`${data.fname}`);
  const [firstnameError, setFirstnameError] = useState('');
  const [firstnameErrorInput, setFirstnameErrorInput] = useState(false);
  //validation lastname
  const [lastname, setLastname] = useState(`${data.lname}`);
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

  //validate button
  const [submitbtn, setSubmitbtn] = useState(false);


  useEffect(() => {
    if (emailErrorInput === true || phoneErrorInput === true || firstnameErrorInput === true || usernameErrorInput === true || passwordErrorInput === true) {
      setSubmitbtn(true);
    } else {
      setSubmitbtn(false);
    }

  }, [emailErrorInput, phoneErrorInput, firstnameErrorInput, usernameErrorInput, passwordErrorInput, submitbtn]);

  //validation username
  const validateUsername = useCallback(() => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!username) {
      setUsernameError('Please enter a username');
      setUsernameErrorInput(true);
    } else if (username.length < 6) {
      setUsernameError('Username must be at least 6 characters long');
      setUsernameErrorInput(true);
    } else if (!regex.test(username)) {
      setUsernameError('Username can only contain lowercase letters a-z');
      setUsernameErrorInput(true);
    } else {
      setUsernameError('');
      setUsernameErrorInput(false);
    }
  }, [username]);


  //validation Password
  const validatePassword = useCallback(() => {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!password) {
      setPasswordError('Please enter a password');
      setPasswordErrorInput(true);
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      setPasswordErrorInput(true);
    } else if (!regex.test(password)) {
      setPasswordError('Password can only contain letters and numbers');
      setPasswordErrorInput(true);
    } else {
      setPasswordError('');
      setPasswordErrorInput(false);
    }
  }, [password]);


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


  //useEffect Validation
  useEffect(() => {
    validateUsername();
    validatePassword();
    validateFirstname();
    validateLastname();
    validatePhone();
    validateEmail();
  }, [validateUsername, validatePassword, validateFirstname, validateLastname, validatePhone, validateEmail]);

  //***********************************************************End Function For Validation******************************************************

  //setInfo Username
  const handleChangeUsername = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setUsername(e.target.value);
  };
  //setInfo Password
  const handleChangePassword = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setPassword(e.target.value);
  };
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



  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };



  //menuitems
  const [selectChange, setSelectchange] = useState([]);
  const handleChangeselect = (event) => {
    setSelectchange(event.target.value);
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
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
          }, 2000);
        }
        setAleartMsg('Update profile was successfully!');
        setAleartColor('success');
        setOpenAlert(true);
      }
    } catch (err) {
      setAleartMsg('There was an error while Editting the profile. Please try again later.');
      setAleartColor('error');
      setOpenAlert(true);
    }

  };

  //delete photo
  const deletePhotos = async (a) => {
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
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openalert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alertcolor} sx={{ width: '100%' }}>
          {alertmsg}
        </Alert>
      </Snackbar>
      <div className="flex flex-col ">
        <div className="bg-white shadow-lg bg-opacity-80 rounded-lg mx-4 my-4 px-10 sm:mx-10 sm:my-10">
          <table class="table-auto mt-5 text-xs w-full sm:text-base  ">
            <tr>
              <td className="sm:py-4"> Profile Img: </td>
              <td>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" multiple onChange={onImageChange} />
                  <PhotoCamera />
                </IconButton>
                <label className="font-bold text-blue-600">Upload Image</label>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <button onClick={() => deletePhotos(data._id)} />
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
                <input
                  className={`border px-3 ${usernameErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${usernameErrorInput ? 'hover:border-red-400' : 'hover:border-blue-400'} duration-150  focus:outline-none focus:border-none ${usernameErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                  onChange={handleChangeUsername}
                  id="username"
                  Value={data?.username}
                />
                <FormHelperText error>{usernameError}</FormHelperText>
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Password:</td>
              <td>
                <input
                  className={`border px-3 ${passwordErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${passwordErrorInput ? 'hover:border-red-400' : 'hover:border-blue-400'} duration-150  focus:outline-none focus:border-none ${passwordErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                  onChange={handleChangePassword}
                  id="password"
                  Value={data?.password}
                />
                <FormHelperText error>{passwordError}</FormHelperText>
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Firstname:</td>
              <td>
                <input
                  className={`border px-3 ${firstnameErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${firstnameErrorInput ? 'hover:border-red-400' : 'hover:border-blue-400'} duration-150  focus:outline-none focus:border-none ${firstnameErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                  onChange={handleChangeFirstname}
                  id="fname"
                  Value={data?.fname}
                />
                <FormHelperText error>{firstnameError}</FormHelperText>
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Lastname:</td>
              <td >
                <input
                  className={`border px-3 ${lastnameErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${lastnameErrorInput ? 'hover:border-red-400' : 'hover:border-blue-400'} duration-150  focus:outline-none focus:border-none ${lastnameErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                  onChange={handleChangeLastname}
                  id="lname"
                  Value={data?.lname}
                />
                <FormHelperText error>{lastnameError}</FormHelperText>
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Phone number:</td>
              <td >
                <input
                  className={`border px-3 ${phoneErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${phoneErrorInput ? 'hover:border-red-400' : 'hover:border-blue-400'} duration-150  focus:outline-none focus:border-none ${phoneErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                  onChange={handleChangePhone}
                  id="phone"
                  Value={data?.phone}
                  maxLength={10}
                />
                <FormHelperText error>{phoneError}</FormHelperText>
              </td>
            </tr>
            <tr>
              <td className="sm:py-5">Email:</td>
              <td>
                <input
                  className={`border px-3 ${emailErrorInput ? 'border-red-600' : 'border-gray-400'} border-gray-400 ${emailErrorInput ? 'hover:border-red-400' : 'hover:border-blue-400'} duration-150  focus:outline-none focus:border-none ${emailErrorInput ? 'focus:ring-red-600' : 'focus:ring-blue-500'}  block w-full focus:ring-1 bg-slate-100 py-4 rounded-md bg-opacity-40`}
                  onChange={handleChangeEmail}
                  id="email"
                  Value={data?.email}
                />
                <FormHelperText error>{emailError}</FormHelperText>
              </td>
            </tr>

            <tr>
              <td className="sm:py-5">Position:</td>
              <td>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">{data.position}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="position"
                    className="w-full bg-slate-100 bg-opacity-40"
                    value={selectChange}
                    onChange={handleChangeselect}
                    label={data.position}
                  >
                    <MenuItem value={'Manager'}>Manager</MenuItem>
                    <MenuItem value={'Sale'}>Sale</MenuItem>
                  </Select>
                </FormControl>

              </td>
            </tr>

          </table>
          <div className="float-right my-5">
            <Box sx={{ m: 1, position: 'relative' }}>
              <Button onClick={handleClick} disabled={submitbtn || loading} className="sm:py-2 text-xs py-1 px-1 sm:px-4 " variant="contained">Apply</Button>
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
    </motion.div>

  );
};

export default Profile;
