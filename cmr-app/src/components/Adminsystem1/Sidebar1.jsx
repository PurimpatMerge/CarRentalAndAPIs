import React, { useState, useEffect} from "react";
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
const Sidebar = () => {
  AOS.init();
  
  const [user, setUser] = useState('null');

  useEffect(() => {
    const timerId = setTimeout(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, 500);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timerId);

  }, []);

  const [open, setOpen] = useState(true);

  
  //clear local storage
  const handleLogout= () => {
    localStorage.removeItem('user');
  }
  

   


  const Menus = [
    {
      title: "Profile",
      icon: <ManageAccountsIcon />,
      page: `Profile/${user._id}`,
      event: 0,
      bordertb: true,
    },
    { title: "Payments", icon: <PaymentIcon />, event: 1,page: "" },
    { title: "My Tasks", icon: <TaskOutlinedIcon />,event: 2, page: "Tasksem" },
    { title: "CarManagemnt", icon: <DirectionsCarFilledOutlinedIcon />,event: 3, page: "Carmanagement" },
    { title: "History", icon: <WorkHistoryOutlinedIcon />,event: 4, page: "History" },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div data-aos="fade-right">
      <div
        className={`hidden lg:block bg-white bg-opacity-60 min-h-screen h-full p-5 pt-8 ${open ? "w-72" : "w-20"
          } duration-300 relative`}
      >
        <ArrowBackIcon fontSize="large"
          className={`border-black cursor-pointer bg-slate-300 text-black text-4xl rounded-lg absolute -right-5 top-2 duration-200  ${!open && "rotate-180"
            }`}
          onClick={() => setOpen(!open)}
        />
        <div className={`${!open && "hidden "} `}>
          <Avatar sx={{ width: 120, height: 120 }} className="mx-auto " alt="Remy Sharp" src={user.photos} />
        </div>


        <div
          className={`mx-auto text-center animate-fade-in-down duration-100 pt-5 animete-fade-in-up ${!open && "hidden "
            }  `}
        >
          <p >{user.fname} {user.lname}</p>
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
              <Link onClick={handleLogout} to="/Login" className={`duration-200  text-base  flex-1  ${!open && "hidden"}`}>
                <ListItemText primary='Logout' />
              </Link>
            </ListItemButton>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
