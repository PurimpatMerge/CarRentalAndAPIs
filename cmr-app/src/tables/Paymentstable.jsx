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




const Paymentstable = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/rent/getallrent"
  );
  const [cars, setCars] = useState(data);

  useEffect(() => {
    setCars(data);
  }, [data]);


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
            <TableCell ><p className="justify-center flex">  Action</p> </TableCell>
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
              <TableCell className="p-2 ">
                <Link to="/Adminsystem1/Paymentdetail"><Button  variant="text">Detail</Button></Link>
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

export default Paymentstable;
