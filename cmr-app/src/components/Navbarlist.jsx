import React from "react";

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Navbarlist = () => {

    const location = useLocation();
    
    
    let homelang = location.pathname.split("/")[2];
    
    
 

    const { t} = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeLang = (lang) =>{
        window.location.href= " " + lang;
        
    }
    const handleChangeHomepage = (lang) =>{
        window.location.href= "/" + lang;
        
    }
    
    return (
        <div className="bg-gradient-to-r  bg-opacity-80 from-orange-500 to-orange-400 flex justify-between py-4 ">
            <div className="my-auto">
                <button onClick={() => handleChangeHomepage(homelang)} className=" mx-6  text-white text-xl tracking-tight duration-300 hover:scale-110 ">{t('menuhome')}</button>
            </div>
            <div className=" flex ">
                <div className="my-auto">
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="primary"
                    >
                        <LanguageIcon />
                    </IconButton>
                    <Menu
                        
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleChangeLang('th')}>ภาษาไทย</MenuItem>
                        <MenuItem onClick={() => handleChangeLang('en')}>English</MenuItem>
                        <MenuItem onClick={() => handleChangeLang('jp')}>日本</MenuItem>
                        <MenuItem onClick={() => handleChangeLang('cn')}>中國人</MenuItem>
                    </Menu>
                </div>
                <div className="my-auto mr-10">
                <p>{t('lan')}</p>
                
                </div>
            </div>
        </div>
    )
}

export default Navbarlist