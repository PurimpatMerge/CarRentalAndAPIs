import React from "react";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import lineicon from '../img/line.png'
import { useTranslation } from 'react-i18next';
const Rentconfirmfooter = () => {
    const { t} = useTranslation();
    return (
        <div className="h-[190px] bg-slate-500  w-screen bg-opacity-80">
            <div className="flex justify-center ">
                <p className="mt-5 sm:text-base text-xs">{t('contactusvia')}</p>
                <div className="flex sm:mx-3 mt-5">
                    <PhoneInTalkIcon />
                    <p className="sm:text-base text-xs">088-8888888</p>
                </div>
                <div className="flex sm:mx-3 mt-5">
                    <MailOutlineIcon />
                    <p className="sm:text-base text-xs">CMR@outlook.com</p>
                </div>
                <div className="flex sm:mx-3 mt-5">
                    <img src={lineicon} className="w-6 h-6 object-scale-down" alt="lineicon" />
                    <p className="sm:text-base text-xs">@cmr</p>
                </div>

            </div>
        </div>
    )
}

export default Rentconfirmfooter