import React, { useState } from "react";
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
import { Link } from "react-router-dom";
//dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import { useRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useEffect } from "react";
const Employeestable = () => {

  //method getUser
  const { data } = useFetch("http://localhost:8800/api/auth/getalluser");

  //Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  //   console.log(data);  

  //loading btn
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef();
  const [submitbtn, setSubmitbtn] = useState(false);

  //Delete User
  const [confirmdelete, setConfirmDelete] = useState(false);
  const deleteThisUser = async (user) => {
    if (confirmdelete === true) {
      try {
        const idDelete = user._id;
        console.log(idDelete);
        const success = await axios.delete(
          `http://localhost:8800/api/auth/deletethisuser/${idDelete}`
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
          setAleartMsg('The Account was Deleted!');
          setAleartColor('success');

        }
      } catch (err) {
        setAleartMsg('There was an error while Deleting the Account. Please try again later.');
        setAleartColor('error');
        setOpenAlert(true);
      }
    }
    setOpenAlert(true);
  };

  useEffect(() => {
    setConfirmDelete(true);
  }, [confirmdelete]);

  
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

  //update status user
  const handleSwitchChange = async (event, user) => {
    data.map(async (u) => {
      try {
        if (u._id === user._id) {
          const getStatusUpdata = {
            id: u._id,
            status: event.target.checked ? "true" : "false",
          };
          await axios.put(
            "http://localhost:8800/api/auth/updateStatusUser",
            getStatusUpdata
          );
          window.location.reload(false);
        } else {
          window.location.reload(false);
          return u;
        }
      } catch (err) {
        console.log(err);
      }
    });
  };
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
            <TableCell ><p className="justify-center flex">  Firstname</p></TableCell>
            <TableCell ><p className="justify-center flex">  Lastname</p></TableCell>
            <TableCell ><p className="justify-center flex">  Email</p></TableCell>
            <TableCell ><p className="justify-center flex">  Phone Number</p></TableCell>
            <TableCell ><p className="justify-center flex">  Position</p></TableCell>
            <TableCell ><p className="justify-center flex">  Status</p></TableCell>
            <TableCell >
              <div className="flex justify-center ">
                <p className="my-auto mr-5">Action</p>
                <Link to="/Adminsystem/Addprofile">
                  <Button variant="contained" color="success" endIcon={<AddIcon />}>Add</Button>
                </Link>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(currentPage * 4, (currentPage + 1) * 4).map((user, index) => (
            <TableRow key={user._id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>

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
                    <Button disabled={submitbtn || loading} onClick={() => deleteThisUser(user)} autoFocus>
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

              <TableCell ><img className="object-contain w-60 h-32" src={user?.photos[0]} alt="car" /></TableCell>
              <TableCell >{user.fname}</TableCell>
              <TableCell >{user.lname}</TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.phone}</TableCell>
              <TableCell >{user.position}</TableCell>
              <TableCell >
                <Switch
                  checked={user.status === "true" ? true : false}
                  onChange={(event) => handleSwitchChange(event, user)}
                />
              </TableCell>
              <TableCell className="p-2 ">
                <div className="flex">
                  <Link to={`/Adminsystem/Profile/${user._id}`}><Button variant="text" >Edit</Button></Link>
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
              <Pagination variant="outlined" color="primary" count={Math.ceil(data.length / 4)} page={currentPage + 1} onChange={(event, page) => handlePageChange({ selected: page - 1 })} className="flex justify-center" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default Employeestable;
