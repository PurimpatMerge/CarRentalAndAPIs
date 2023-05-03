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



const Employeestable = () => {

//method getUser
const { data } = useFetch("http://localhost:8800/api/auth/getalluser");

//Pagination
const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
//   console.log(data);  

//Delete User
const deleteThisUser = async (car) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      try {
        const idDelete = car._id;
        console.log(idDelete);
        const success = await axios.delete(
          `http://localhost:8800/api/auth/deletethisuser/${idDelete}`
        );
        if (success) {
          window.location.reload(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
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
                  <Button variant="contained"  color="success" endIcon={<AddIcon />}>Add</Button>
                </Link>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.slice(currentPage * 4, (currentPage + 1) * 4).map((user, index) => (
              <TableRow key={user._id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
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
                    <IconButton aria-label="delete" onClick={() => deleteThisUser(user)} >
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
