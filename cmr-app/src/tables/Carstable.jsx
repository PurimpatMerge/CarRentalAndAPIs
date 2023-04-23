import React, { useMemo } from 'react';
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
//nested data is ok, see accessorKeys in ColumnDef below
const data = [
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
        id: 4,
        img: <img src={hrvnobg} alt="goodcat" className='object-cover w-28 md:w-full ' />,
        brand: 'Honda',
        model: 'HRV',
        year: '2017',
        plate: 'กกน9212',
        type: 'SUV',
        price: '1800',
        status: <Switch  defaultChecked color="success" />,
        button: <div>
            <Link to="/Adminsystem1/Editcar"><Button variant="text">Edit</Button></Link>
            <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
        </div>

    },

];

const Carstable = () => {

    //should be memoized or stable
    const columns = useMemo(
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

    return <MaterialReactTable  columns={columns} data={data} />;
};

export default Carstable;
