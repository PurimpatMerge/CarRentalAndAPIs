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
import useFetch from "../hooks/useFetch";
import Pagination from '@mui/material/Pagination';
import AddIcon from "@mui/icons-material/Add";




const Carstable = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/car/allCar"
  );
  const [cars, setCars] = useState(data);

  useEffect(() => {
    setCars(data);
  }, [data]);

  const deleteThisCar = async (car) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      try {
        const idDelete = car._id;
        console.log(idDelete);
        const success = await axios.delete(
          `http://localhost:8800/api/car/deleteThiscar/${idDelete}`
        );
        if (success) {
          window.location.reload(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
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
  return (
    <TableContainer className="w-full rounded-md ">
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
                <Button variant="contained"  color="success" endIcon={<AddIcon />}>Add</Button>
              </Link>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.slice(currentPage * 4, (currentPage + 1) * 4).map((car, index) => (
            <TableRow key={car._id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <TableCell ><img className="object-contain w-60 h-40" src={car?.photos[0]} alt="car" /></TableCell>
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
                  checked={car.statusAble === "true" ? true : false}
                  onChange={(event) => handleSwitchChange(event, car)}
                />
              </TableCell>
              <TableCell className="p-2 ">
                <div className="flex">
                  <Link to={`/Adminsystem1/Editcar/${car._id}`}><Button variant="text" >Edit</Button></Link>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteThisCar(car)}
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
