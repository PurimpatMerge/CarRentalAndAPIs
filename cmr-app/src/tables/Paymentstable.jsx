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
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';




const Paymentstable = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/rent/getallrent"
  );


  useEffect(() => {

  }, [data]);

  // console.log(data);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
console.log(data);
  return (
    <TableContainer className="w-full rounded-md ">
      <Table className="w-full border">
        <TableHead className="bg-gray-200 ">
          <TableRow>
            <TableCell  > <p className="justify-center flex">  Photo</p> </TableCell>
            <TableCell ><p className="justify-center flex">  Brand</p></TableCell>
            <TableCell ><p className="justify-center flex">  Model</p></TableCell>
            <TableCell ><p className="justify-center flex">  Year</p></TableCell>
            <TableCell ><p className="justify-center flex">  Licence Plate</p></TableCell>
            <TableCell ><p className="justify-center flex">  Type</p></TableCell>
            <TableCell ><p className="justify-center flex">  Time</p></TableCell>
            <TableCell ><p className="justify-center flex">  Status</p></TableCell>
            <TableCell ><p className="justify-center flex">  Action</p> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(currentPage * 4, (currentPage + 1) * 4).map((rent, index) => (

            <TableRow key={rent._id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>

              <TableCell>
                <img className="object-contain w-60 h-32" src={rent.car.photos[0]} alt="car" />
              </TableCell>
              <TableCell>
                <p>{rent.car.brand}</p>
              </TableCell>
              <TableCell>
                <p>{rent.car.model}</p>
              </TableCell>
              <TableCell>
                <p>{rent.car.year}</p>
              </TableCell>
              <TableCell>
                <p>{rent.car.lplate}</p>
              </TableCell>
              <TableCell>
                <p>{rent.car.type}</p>
              </TableCell>
              <TableCell>
                <p>{rent.getcartime}</p>
                <p>{rent.returncartime}</p>
              </TableCell>
              <TableCell>
                <p>{rent.activestatus}</p>
              </TableCell>

              <TableCell>
                <Button onClick={() => navigate(`/Adminsystem1/Paymentdetail/${rent.rentid}`, {
                  state: {
                    model: rent.car.model,
                    brand: rent.car.brand,
                    year: rent.car.year,
                    lplate: rent.car.lplate
                  }
                })} variant="text">Detail</Button>
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
  );
};

export default Paymentstable;
