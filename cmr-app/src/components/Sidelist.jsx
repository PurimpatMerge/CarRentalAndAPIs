import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FilterListIcon from '@mui/icons-material/FilterList';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { Checkbox } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import toyota from '../img/toyota.png'
import honda from '../img/honda.png'
import nissan from '../img/nissan.png'
import gwm from '../img/gwm.png'
import mazda from '../img/mazda.png'
import bmw from '../img/bmw.png'
import benz from '../img/benz.png'
import tesla from '../img/tesla.png'
import { useTranslation } from 'react-i18next';
import Searchbar from './Searchbar';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
const Sidelist = () => {
    const { t} = useTranslation();
    const Brand = [
        { title: "Toyota", icon: toyota, value: "" },
        { title: "Honda", icon: honda, value: "" },
        { title: "Nissan", icon: nissan, value: "" },
        { title: "GWM", icon: gwm, value: "",w:"small" },
        { title: "Mazda", icon: mazda, value: "" },
        { title: "BMW", icon: bmw, value: "" },
        { title: "Benz", icon: benz, value: "" },
        { title: "Tesla", icon: tesla, value: "" },


    ];


    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };


    return (
        <div className="w-72 -translate-x-full h-fit hidden md:block  transform rounded-lg bg-opacity-60 mt-2 bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
            <div className="flex-col">

            

    





                <List 
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <FilterListIcon className='text-blue-500' />
                            {t('filter')}
                        </ListSubheader>


                    }
                >

                    <Divider />
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <TimeToLeaveIcon className='text-blue-500' />
                        </ListItemIcon>
                        <ListItemText primary={t('cartype')} />
                        {open ? <ExpandLess /> : <ExpandMore /> }
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <EnergySavingsLeafIcon className='text-green-700' />
                                    </ListItemIcon>
                                    <ListItemText primary="Eco" />
                                    <Checkbox  />
                                </ListItem>
                                
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ElectricCarIcon className='text-sky-600' />
                                    </ListItemIcon>
                                    <ListItemText primary="Ev" />
                                    <Checkbox  />
                                </ListItem>

                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DirectionsCarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="C-Segment" />
                                    <Checkbox  />
                                </ListItem>

                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DirectionsCarIcon className='text-stone-800' />
                                    </ListItemIcon>
                                    <ListItemText primary="D-Segment" />
                                    <Checkbox  />
                                </ListItem>

                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DirectionsCarIcon className='text-orange-600' />
                                    </ListItemIcon>
                                    <ListItemText primary="SUV" />
                                    <Checkbox  />
                                </ListItem>
                            
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleClick1}>
                        <ListItemIcon>
                            <InboxIcon className='text-blue-500' />
                        </ListItemIcon>
                        <ListItemText primary={t('carbrand')} />
                        {open1 ? <ExpandMore /> :<ExpandLess />}
                    </ListItemButton>
                    {Brand.map((brand, index) => (
                        <Collapse in={!open1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <img src={brand.icon} alt='branicon' className={`${brand.w ? "w-8" :""}`}/>
                                    </ListItemIcon>
                                    <ListItemText primary={brand.title} />
                                    <Checkbox  />
                                </ListItem>
                            </List>
                        </Collapse>
                    ))}
                    <ListItemButton onClick={handleClick2}>
                        <ListItemIcon>
                            <AirlineSeatReclineNormalIcon className='text-blue-500' />
                        </ListItemIcon>
                        <ListItemText primary={t('seats')} />
                        {open2 ? <ExpandMore /> :<ExpandLess />}
                    </ListItemButton>
                    <Collapse in={!open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder className='text-green-700' />
                                </ListItemIcon>
                                <ListItemText primary="2 ที่นั่ง" />
                                <Checkbox  />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder className='text-yellow-400' />
                                </ListItemIcon>
                                <ListItemText primary="4 ที่นั่ง" />
                                <Checkbox  />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder className='text-yellow-700' />
                                </ListItemIcon>
                                <ListItemText primary="5 ที่นั่ง" />
                                <Checkbox  />
                            </ListItemButton>
                        </List>
                    </Collapse>

                </List>


            </div>
        </div>


    )
}

export default Sidelist