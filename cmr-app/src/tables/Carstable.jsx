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
import { Delete } from "@mui/icons-material";
import axios from "axios";
import useFetch from "../hooks/useFetch";

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
          window.location.href =
            "http://localhost:3000/Adminsystem1/Carmanagement";
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

          window.location.href =
            "http://localhost:3000/Adminsystem1/Carmanagement";
        } else {
          window.location.href =
            "http://localhost:3000/Adminsystem1/Carmanagement";
          return c;
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Licence Plate</TableCell>
            <TableCell>Seat</TableCell>
            <TableCell>Door</TableCell>
            <TableCell>Engine</TableCell>
            <TableCell>Gear</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car, index) => (
            <TableRow key={car._id}>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.brand}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell>{car.lplate}</TableCell>
              <TableCell>{car.seat}</TableCell>
              <TableCell>{car.door}</TableCell>
              <TableCell>{car.engine}</TableCell>
              <TableCell>{car.gear}</TableCell>
              <TableCell>{car.type}</TableCell>
              <TableCell>{car.price}</TableCell>
              <TableCell>
                <Switch
                  checked={car.statusAble === "true" ? true : false}
                  onChange={(event) => handleSwitchChange(event, car)}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteThisCar(car)}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Carstable;
