import React, { useMemo, useEffect, useState  } from 'react';
import MaterialReactTable from 'material-react-table';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import car from '../img/Hondacity.png'
import Switch from '@mui/material/Switch';
import goodcat from '../img/oragoodcat.png'
import nissanleaf from '../img/nissanleaft.jpg' 
import hrvnobg from '../img/hrvnobg.png'
import useFetch from "../hooks/useFetch";
import axios from "axios";

//nested data is ok, see accessorKeys in ColumnDef below
const data2 = [
    {
        id: 1,
        img: <img src={car} alt="car" className='object-cover w-28 md:w-full ' />,
        brand: 'Honda',
        model: 'City',
        year: '2020',
        plate: 'กน92',
        type: 'Eco',
        price: '1000',
        status: <Switch  defaultChecked color="success" />,
        button: <div>
            <Link to="/Adminsystem1/Editcar"><Button variant="text">Edit</Button></Link>
            <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
        </div>

    },
    {
        id: 2,
        img: <img src={goodcat} alt="goodcat" className='object-cover w-28 md:w-full ' />,
        brand: 'GWM',
        model: 'Ora Goodcat',
        year: '2020',
        plate: 'กน921',
        type: 'EV',
        price: '1300',
        status: <Switch  defaultChecked color="success" />,
        button: <div>
            <Link to="/Adminsystem1/Editcar"><Button variant="text">Edit</Button></Link>
            <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
        </div>

    },
    {
        id: 3,
        img: <img src={nissanleaf} alt="goodcat" className='object-cover w-28 md:w-full ' />,
        brand: 'Nissan',
        model: 'Leaf',
        year: '2017',
        plate: 'กน9212',
        type: 'Eco',
        price: '1000',
        status: <Switch  defaultChecked color="success" />,
        button: <div>
            <Link to="/Adminsystem1/Editcar"><Button variant="text">Edit</Button></Link>
            <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
        </div>

    },
    {
        status: <Switch  defaultChecked color="success" />,
        button: <div>
            <Link to="/Adminsystem1/Editcar"><Button variant="text">Edit</Button></Link>
            <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
        </div>

    },

];

const Carstable = () => {
    const { data, loading, error } = useFetch("http://localhost:8800/api/car/allCar");
    useEffect(() => {
    }, [data]);
  
    //should be memoized or stable
    const columns2 = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'ID',
                size:5
            },
            {
                accessorKey: 'img', //access nested data with dot notation
                header: 'IMG',
                size:20
            },
            {
                accessorKey: 'brand',
                header: 'Brand',
                size: 10,
              },
              {
                accessorKey: 'model',
                header: 'Model',
                size: 10,
              },
              {
                accessorKey: 'year',
                header: 'Year',
                size: 10,
              },
            {
                accessorKey: 'plate', //normal accessorKey
                header: 'License Plate',
                size:10
            },
            {
                accessorKey: 'type',
                header: 'Type',
                size:10
            },
            {
                accessorKey: 'price',
                header: 'Price',
                size:10
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size:10
            },
            {
                accessorKey: 'button',
                header: 'Action',
                size:5
            }

        ],
        [],
    );
    //should be memoized or stable
    const columns = useMemo(
        () => [
          {
            accessorKey: "_id",
            header: "ID",
            size: 5,
          },
          {
            accessorKey: "photos",
            header: "IMG",
            size: 20,
          },
          {
            accessorKey: "brand",
            header: "Brand",
            size: 10,
          },
          {
            accessorKey: "model",
            header: "Model",
            size: 10,
          },
          {
            accessorKey: "year",
            header: "Year",
            size: 10,
          },
          {
            accessorKey: "lplate",
            header: "License Plate",
            size: 10,
          },
          {
            accessorKey: "type",
            header: "Type",
            size: 10,
          },
          {
            accessorKey: "price",
            header: "Price",
            size: 10,
          },
          {
            accessorKey: "status",
            header: "Status",
            size: 10,
            Cell: ({ row }) => (
              <Switch defaultChecked color="success" />
            ),
          },
          {
            accessorKey: "button",
            header: "Action",
            size: 5,
            Cell: ({ row }) => (
              <div>
                <Link to={`/Adminsystem1/Editcar/${row._id}`}>
                  <Button variant="text">Edit</Button>
                </Link>
                <IconButton aria-label="delete" color="error">
                  <DeleteIcon />
                </IconButton>
              </div>
            ),
          },
        ],
        []
      );

    return <div><MaterialReactTable  columns={columns2} data={data2} /> <MaterialReactTable  columns={columns} data={data} /></div>;
};

export default Carstable;
