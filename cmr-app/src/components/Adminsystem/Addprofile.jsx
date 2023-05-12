import React from "react";
import { useState, useEffect, useCallback } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Image } from 'antd';
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
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



  //validation username
  const [username, setUsername] = useState('datauname');
  const [usernameError, setUsernameError] = useState('');
  const [usernameErrorInput, setUsernameErrorInput] = useState(false);
  //validation password
  const [password, setPassword] = useState('123456');
  const [passwordError, setPasswordError] = useState('');
  const [passwordErrorInput, setPasswordErrorInput] = useState(false);
  //validation firstname
  const [firstname, setFirstname] = useState('data');
  const [firstnameError, setFirstnameError] = useState('');
  const [firstnameErrorInput, setFirstnameErrorInput] = useState(false);
  //validation lastname
  const [lastname, setLastname] = useState('data');
  const [lastnameError, setLastnameError] = useState('');
  const [lastnameErrorInput, setLastnameErrorInput] = useState(false);
  //validation Phone
  const [phone, setPhone] = useState('1234567890');
  const [phoneError, setPhoneError] = useState('');
  const [phoneErrorInput, setPhoneErrorInput] = useState(false);
  //validation Email
  const [email, setEmail] = useState('data@gmail.com');
  const [emailError, setEmailError] = useState('');
  const [emailErrorInput, setEmailErrorInput] = useState(false);

  //validate button
  const [submitbtn, setSubmitbtn] = useState(false);
  useEffect(() => {
    if (emailErrorInput === true || phoneErrorInput === true || lastnameErrorInput === true || firstnameErrorInput === true || passwordErrorInput === true || usernameErrorInput === true) {
      setSubmitbtn(true);
    } else {
      setSubmitbtn(false);
    }

  }, [emailErrorInput, phoneErrorInput, lastnameErrorInput, firstnameErrorInput, passwordErrorInput, submitbtn, usernameErrorInput]);

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


  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };





  const [position, setPosition] = React.useState([]);

  const handleChangePosition = (event) => {
    setPosition(event.target.value);
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

      const adduser = {
        ...info,
        photos: list
      }
      // console.log(adduser);
      const res = await axios.post("http://localhost:8800/api/auth/register", adduser);
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
                  <TextField error={usernameErrorInput} id="username" onChange={handleChangeUsername} className="w-full bg-slate-100 bg-opacity-40" label="Username" variant="outlined" />
                  <FormHelperText error>{usernameError}</FormHelperText>
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Password:</td>
                <td>
                  <TextField error={passwordErrorInput} id="password" onChange={handleChangePassword} className="w-full bg-slate-100 bg-opacity-40" label="Password" variant="outlined" />
                  <FormHelperText error>{passwordError}</FormHelperText>
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Firstname:</td>
                <td>
                  <TextField error={firstnameErrorInput} id="fname" onChange={handleChangeFirstname} className="w-full bg-slate-100 bg-opacity-40" label="Firstname" variant="outlined" />
                  <FormHelperText error>{firstnameError}</FormHelperText>
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Lastname:</td>
                <td >
                  <TextField error={lastnameErrorInput} id="lname" onChange={handleChangeLastname} className="w-full bg-slate-100 bg-opacity-40" label="Lastname" variant="outlined" />
                  <FormHelperText error>{lastnameError}</FormHelperText>
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Phone number:</td>
                <td >
                  <TextField inputProps={{ maxLength: 10 }} error={phoneErrorInput} id="phone" onChange={handleChangePhone} className="w-full bg-slate-100 bg-opacity-40" label="Phone number" variant="outlined" />
                  <FormHelperText error>{phoneError}</FormHelperText>
                </td>
              </tr>
              <tr>
                <td className="sm:py-5">Email:</td>
                <td>
                  <TextField error={emailErrorInput} id="email" onChange={handleChangeEmail} className="w-full bg-slate-100 bg-opacity-40" label="Email" variant="outlined" />
                  <FormHelperText error>{emailError}</FormHelperText>
                </td>
              </tr>

              <tr>
                <td className="sm:py-5">Position:</td>
                <td>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="position"
                      className="w-full bg-slate-100 bg-opacity-40"
                      onChange={handleChangePosition}
                      label='Position'
                      value={position}
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
      </div>
    </>
  );
};

export default Addprofile;
