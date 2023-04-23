import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import profile from '../img/profile1.jpg'
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    {   id:1,
        profile: <Avatar alt="profile" src={profile}  sx={{ width: 80, height: 80 }} />,
        name: {
            firstName: 'ภคพล',
            lastName: 'วีระโชติ',
        },
        email: 'Admin123@gmail.com',
        pnumber: '0999999999',
        position: 'Manager',
        action:
            <div>
                <Link to="/Adminsystem/Profile"><Button variant="text">Edit</Button></Link> 
                <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
            </div>
    },
    {   id:2,
        profile: <Avatar alt="profile" src={profile}  sx={{ width: 80, height: 80 }} />,
        name: {
            firstName: 'กนกภัทร',
            lastName: 'กลับเพชร',
        },
        email: 'es@gmail.com',
        pnumber: '0955778892',
        position: 'Salary',
        action:
            <div>
                <Link to="/Adminsystem/Profile"><Button variant="text">Edit</Button></Link> 
                <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
            </div>
    },
    {   id:3,
        profile: <Avatar alt="profile" src={profile}  sx={{ width: 80, height: 80 }} />,
        name: {
            firstName: 'ชนัย ',
            lastName: 'วรภัทรศิริสกุล',
        },
        email: 'sa@gmail.com',
        pnumber: '0955778892',
        position: 'Salary',
        action:
            <div>
                <Link to="/Adminsystem/Profile"><Button variant="text">Edit</Button></Link> 
                <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
            </div>
    },
    {   id:4,
        profile: <Avatar alt="profile" src={profile}  sx={{ width: 80, height: 80 }} />,
        name: {
            firstName: 'กรชวัล',
            lastName: 'หงษ์ทอง ',
        },
        email: 'deman@gmail.com',
        pnumber: '0955778892',
        position: 'Salary',
        action:
            <div>
                <Link to="/Adminsystem/Profile"><Button variant="text">Edit</Button></Link> 
                <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
            </div>
    },
    {   id:5,
        profile: <Avatar alt="profile" src={profile}  sx={{ width: 80, height: 80 }} />,
        name: {
            firstName: 'ณัฏฐกิตติ์ ',
            lastName: 'ณัฏฐกิตติ์ ',
        },
        email: 'eart@gmail.com',
        pnumber: '0955778892',
        position: 'Salary',
        action:
            <div>
                <Link to="/Adminsystem/Profile"><Button variant="text">Edit</Button></Link> 
                <IconButton aria-label="delete" color='error'> <DeleteIcon/></IconButton>
            </div>
    },
    

];

const Employeestable = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'ID',
                size: 10,
            },
            {
                accessorKey: 'profile', //access nested data with dot notation
                header: 'Profile',
            },
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'email', //normal accessorKey
                header: 'Email',
            },
            {
                accessorKey: 'pnumber',
                header: 'Phone Number',
            },
            {
                accessorKey: 'position',
                header: 'Position',
            },
            {
                accessorKey: 'action',
                header: 'Action',
            },

        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data} />;
};

export default Employeestable;
