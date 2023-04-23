import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import car from '../img/Hondacity.png'
import car1 from '../img/oragoodcat.png'
import car2 from '../img/nissanleaft.jpg'
//nested data is ok, see accessorKeys in ColumnDef below


const data = [
  {
    id: 1,
    img: <img src={car} alt="car" className='object-cover w-28 md:w-full '/>,
    brand: 'Honda',
    model: 'City',
    year: '2020',
    plate: 'กน92',
    type: 'Eco',
    time: '21/01/2023-23/01/2023',
    size: 10,
    action:<div>
     <Link to="/Adminsystem1/Paymentdetail"><Button  variant="text">Detail</Button></Link>
     </div>
     
  },
  {
    id:2,
    img: <img src={car2} alt="car" className='object-cover w-28 md:w-full '/>,
    brand: 'Nissan',
    model: 'Leaf',
    year: '2017',
    plate: 'กน922',
    type: 'Eco',
    time: '22/01/2023-24/01/2023',
    size: 10,
    action:<div>
     <Link to="/Adminsystem1/Paymentdetail"><Button  variant="text">Detail</Button></Link>
     </div>
     
  },
  {
    id:3,
    img: <img src={car1} alt="car" className='object-cover w-28 md:w-full '/>,
    brand: 'GWM',
    model: 'Ora Goodcat',
    year: '2020',
    plate: 'กน92',
    type: 'EV',
    time: '24/01/2023-26/01/2023',
    action:<div>
     <Link to="/Adminsystem1/Paymentdetail"><Button  variant="text">Detail</Button></Link>
     </div>
  },
  {
    id:4,
    img: <img src={car} alt="car" className='object-cover w-28 md:w-full '/>,
    brand: 'Honda',
    model: 'City',
    year: '2020',
    plate: 'น922',
    type: 'Eco',
    time: '27/01/2023-28/01/2023',
    action:<div>
     <Link to="/Adminsystem1/Paymentdetail"><Button  variant="text">Detail</Button></Link>
     </div>
  },
  
];

const Paymentstable = () => {
    
  
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
        accessorKey: 'time',
        header: 'Time',
        size:10
      },
      {
        accessorKey: 'action',
        header: 'Action',
        size:5
      }
      
      
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Paymentstable;