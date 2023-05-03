import React from "react";
import Navbarlist from "../components/Multiple/Navbarlist";
import Carlist from "../components/Listcar/Carlist";
import Sidelist from "../components/Listcar/Sidelist";
import { useLocation } from 'react-router-dom';
import i18n from "i18next";
import { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
const Listcar = () => {

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
                            <div className="min-h-screen bg-gray-200">
                                <Navbarlist />
                                <div className="flex">
                                    <Sidelist />
                                    <Carlist />
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
                        <div className="min-h-screen bg-gray-200">
                            <Navbarlist />
                            <div className="flex">
                                <Sidelist />
                                <Carlist />
                            </div>
                        </div>
                    </div>
            }
        </div>









    )
}

export default Listcar