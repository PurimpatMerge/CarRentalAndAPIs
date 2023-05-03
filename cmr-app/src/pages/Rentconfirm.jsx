import React from "react";
import Navbarlist from "../components/Multiple/Navbarlist";
import Rentconfirmfooter from "../components//Multiple/Rentconfirmfooter";
import Map from "../components/Multiple/Map"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Rentconfirmcontent from "../components/Rentconfirm/Rentconfirmcontent";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import i18n from "i18next";
import { useLocation } from 'react-router-dom';

import BeatLoader from "react-spinners/BeatLoader";
import { useState, useEffect } from 'react';
const Rentconfirm = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 700)
    }, [])

    const location = useLocation();
    const lang = location.pathname.split("/")[2];
    i18n.changeLanguage(lang);
    return (
        <div>
            {

                loading ?
                    <>
                        <div className='h-min-screen bg-white brightness-50'>
                            <div className="min-h-screen  bg-gray-200">
                                <Navbarlist />
                                <div className="my-2 ml-2">
                                    <Breadcrumbs >
                                        <Link underline="hover" to={`/${lang}`} >
                                            <Button variant="text">Home</Button>
                                        </Link>
                                        <Link to={`/Listcar/${lang}`} underline="hover">
                                            <Button variant="text">Listcar</Button>
                                        </Link>
                                        <Typography color="text.primary">Rentconfirm</Typography>
                                    </Breadcrumbs>
                                </div>
                                <div className="lg:flex mb-10">
                                    <Map />
                                    <Rentconfirmcontent />
                                </div>
                                <div className="sm:fixed bottom-0">
                                    <Rentconfirmfooter />
                                </div>
                            </div>
                        </div>

                        <div className='fixed h-screen z-20 top-1/2  left-1/2 -translate-x-6 -translate-y-6'>
                            <BeatLoader
                                color={"#fd912c"}
                                loading={loading}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    </>
                    :
                    <div>
                        <div className="min-h-screen overflow-hidden  bg-gray-200">
                            <Navbarlist />
                            <div className="my-2 ml-2">
                                <Breadcrumbs >
                                    <Link underline="hover" to={`/${lang}`} >
                                        <Button variant="text">Home</Button>
                                    </Link>
                                    <Link to={`/Listcar/${lang}`} underline="hover">
                                        <Button variant="text">Listcar</Button>
                                    </Link>
                                    <Typography color="text.primary">Rentconfirm</Typography>
                                </Breadcrumbs>
                            </div>
                            <div className="lg:flex mb-10">
                                <Map />
                                <Rentconfirmcontent />
                            </div>
                            <div className="xl:fixed bottom-0">
                                <Rentconfirmfooter />
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}

export default Rentconfirm