import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Button,
  IconButton,
} from "@mui/material";
import { Delete, } from "@mui/icons-material";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import Pagination from '@mui/material/Pagination';
import AddIcon from "@mui/icons-material/Add";
import { useRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
//dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';


const Carstable = () => {
  const { data } = useFetch(
    "http://localhost:8800/api/car/allCar"
  );
  const [cars, setCars] = useState(data);

  useEffect(() => {
    setCars(data);
  }, [data]);

  //loading btn
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();
  const [submitbtn, setSubmitbtn] = useState(false);
  //delete car
  const [confirmdelete, setConfirmDelete] = useState(false);
  const deleteThisCar = async (car) => {

    if (confirmdelete === true) {
      try {
        const idDelete = car._id;
        console.log(idDelete);
        const success = await axios.delete(
          `http://localhost:8800/api/car/deleteThiscar/${idDelete}`
        );
        if (success) {
          if (!loading) {
            setSuccess(false);
            setLoading(true);
            setSubmitbtn(true)
            timer.current = window.setTimeout(() => {
              setSuccess(true);
              setLoading(false);
              setSubmitbtn(false)
            }, 2000);
          }
          setAleartMsg('The Car was Deleted!');
          setAleartColor('success');

        }
      } catch (err) {
        setAleartMsg('There was an error while Deleting the Car. Please try again later.');
        setAleartColor('error');
        setOpenAlert(true);
      }
    }
    setOpenAlert(true);
  };
  useEffect(() => {
    setConfirmDelete(true);
  }, [confirmdelete]);

  //change status car
  const handleSwitchChange = async (event, car) => {
    cars.map(async (c) => {
      try {
        if (c._id === car._id) {
          const getStatusUpdata = {
            id: c._id,
            statusAble: event.target.checked ? "true" : "false",
          };
          await axios.put(
            "http://localhost:8800/api/car/updateStatusCar",
            getStatusUpdata
          );
          window.location.reload(false);
        } else {
          window.location.reload(false);
          return c;
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  //dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setConfirmDelete(false);
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
  return (
    <TableContainer className="w-full rounded-md ">
      <Snackbar sx={{ zIndex: 9999 }} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openalert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alertcolor} sx={{ width: '100%' }}>
          {alertmsg}
        </Alert>
      </Snackbar>
      <Table className="w-full border">
        <TableHead className="bg-gray-200 ">
          <TableRow>
            <TableCell  > <p className="justify-center flex">  Photo</p> </TableCell>
            <TableCell ><p className="justify-center flex">  Model</p></TableCell>
            <TableCell ><p className="justify-center flex">  Brand</p></TableCell>
            <TableCell ><p className="justify-center flex">  Year</p></TableCell>
            <TableCell ><p className="justify-center flex">  Licence Plate</p></TableCell>
            <TableCell ><p className="justify-center flex">  Seat</p></TableCell>
            <TableCell ><p className="justify-center flex">  Door</p></TableCell>
            <TableCell ><p className="justify-center flex">  Engine</p></TableCell>
            <TableCell ><p className="justify-center flex">  Gear</p></TableCell>
            <TableCell ><p className="justify-center flex">  Type</p></TableCell>
            <TableCell ><p className="justify-center flex">  Price</p></TableCell>
            <TableCell ><p className="justify-center flex">  Status</p></TableCell>
            <TableCell >
              <div className="flex justify-center ">
                <p className="my-auto mr-5">Action</p>

                <Link to="/Adminsystem1/Addcar">
                  <Button variant="contained" color="success" endIcon={<AddIcon />}>Add</Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.slice(currentPage * 4, (currentPage + 1) * 4).map((car, index) => (
            <TableRow key={car._id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                BackdropProps={{
                  style: { opacity: 0.5 },
                }}
                sx={{ zIndex: 9998 }}
              >
                <DialogTitle id="alert-dialog-title">
                  {" Confirm Delete "}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this car?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>

                  <Box sx={{ m: 1, position: 'relative' }}>
                    <Button disabled={submitbtn || loading} onClick={() => deleteThisCar(car)} autoFocus>
                      Delete
                    </Button>
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
                </DialogActions>
              </Dialog>

              <TableCell ><img className="object-contain w-60 h-32" src={car?.photos[0]} alt="car" /></TableCell>
              <TableCell >{car.model}</TableCell>
              <TableCell >{car.brand}</TableCell>
              <TableCell >{car.year}</TableCell>
              <TableCell >{car.lplate}</TableCell>
              <TableCell >{car.seat}</TableCell>
              <TableCell >{car.door}</TableCell>
              <TableCell >{car.engine}</TableCell>
              <TableCell >{car.gear}</TableCell>
              <TableCell >{car.type}</TableCell>
              <TableCell >{car.price}</TableCell>
              <TableCell >
                <Switch
                  disabled={car.carRentStatus === "rented"}
                  checked={car.statusAble === "true" ? true : false}
                  onChange={(event) => handleSwitchChange(event, car)}
                />
              </TableCell>
              <TableCell className="p-2 ">
                <div className="flex">
                  <Link to={`/Adminsystem1/Editcar/${car._id}`}><Button variant="text" >Edit</Button></Link>
                  <IconButton
                    aria-label="delete"
                    onClick={handleClickOpen}
                  >
                    <Delete className="text-red-500" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-white w-full ">
            <TableCell colSpan={13} >
              <Pagination variant="outlined" color="primary" count={Math.ceil(cars.length / 4)} page={currentPage + 1} onChange={(event, page) => handlePageChange({ selected: page - 1 })} className="flex justify-center" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Carstable;
