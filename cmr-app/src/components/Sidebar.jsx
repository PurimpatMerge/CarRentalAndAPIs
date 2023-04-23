import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import { Link } from "react-router-dom";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import profile from '../img/profile1.jpg'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const Sidebar = () => {
  AOS.init();
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Profile",
      icon: <ManageAccountsIcon />,
      page: "Profile",
      event: 0,
      bordertb: true,
    },
    { title: "Dashboard", icon: <DashboardOutlinedIcon />,event: 1, page: "" },
    { title: "Tasks", icon: <TaskOutlinedIcon />,event: 2, page: "Tasks" },
    { title: "History", icon: <WorkHistoryOutlinedIcon />,event: 3, page: "History" },
    { title: "Team", icon: <Groups2OutlinedIcon />,event: 4, page: "Employees" },
    
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };


  return (
    

<div data-aos="fade-right">
    <div
      className={`hidden xl:block bg-white bg-opacity-60 shadow-lg min-h-screen p-5 pt-8 ${open ? "w-72" : "w-20"
        } duration-300 relative`}
    >
      <ArrowBackIcon fontSize="large"
        className={`border-black cursor-pointer bg-slate-300 text-black text-4xl rounded-lg absolute -right-5 top-2 duration-200  ${!open && "rotate-180"
          }`}
        onClick={() => setOpen(!open)}
      />
      <div className={`${!open && "hidden "} `}>
        <Avatar sx={{ width: 120, height: 120 }} className="mx-auto " alt="Remy Sharp" src={profile} />
      </div>


      <div
        className={`mx-auto text-center animate-fade-in-down duration-100 pt-5 animete-fade-in-up ${!open && "hidden "
          }  `}
      >
        <p >ภคพล วีระโชติ </p>
      </div>

      <List>
        {Menus.map((menu, index) => (
          <ListItemButton key={index} selected={selectedIndex === menu.event}
          onClick={(event) => handleListItemClick(event, menu.event)} className={`mt-4 text-gray-800 flex items-center gap-x-4 cursor-pointer duration-200 pt-2 hover:scale-110}`}>
            <ListItemIcon>
              {menu.icon}
            </ListItemIcon>
            <Link to={menu.page} className={`duration-200  text-base  flex-1  ${!open && "hidden"}`}>
              <ListItemText primary={menu.title} />
            </Link>
          </ListItemButton>
        ))}
        <div className={`fixed bottom-0 w-64 ${!open && "w-10"}`}>
        <ListItemButton  >
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <Link to="/Login" className={`duration-200  text-base  flex-1  ${!open && "hidden"}`}>
              <ListItemText primary='Logout'  />
            </Link>
          </ListItemButton>
          </div>
</List>
    </div>
    </div>
  );
};

export default Sidebar;
