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
    responsiblename: 'กนกภัทร',
    responsiblelname: '	กลับเพชร',
    button: <Link to="/Adminsystem/Historydetail"><Button  variant="text">Detail</Button></Link>,
  },
];

const Historystable = () => {
    
 

  return (
    <p>sadsa</p>
  );
};

export default Historystable;