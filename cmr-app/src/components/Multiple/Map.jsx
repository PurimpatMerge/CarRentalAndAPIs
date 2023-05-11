import React from "react";
import Iframe from 'react-iframe'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
const Map = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { dataSearch } = location.state;
    const cmr = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.071320672309!2d99.03013177598969!3d18.79497466073316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2543b37486ad%3A0xf8d29082477585fa!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lie4Liy4Lii4Lix4Lie!5e0!3m2!1sth!2sth!4v1683644542648!5m2!1sth!2sth'
    const airport = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.6916212299698!2d98.96335957598923!3d18.767306661589426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3088e698f189%3A0xa02474e3fd934597!2z4LiX4LmI4Liy4Lit4Liy4LiB4Liy4Lio4Lii4Liy4LiZ4LiZ4Liy4LiZ4Liy4LiK4Liy4LiV4Li04LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1683644598477!5m2!1sth!2sth'
    const cmfest = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.8111051052265!2d99.01561337585346!3d18.806569681122777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2535cd3991f5%3A0x40387d8dd3429563!2sCentral%20Festival!5e0!3m2!1sth!2sth!4v1683644681771!5m2!1sth!2sth'
    return (
        <div className="container mx-auto lg:mx-10  bg-white rounded-lg  shadow-lg w-fit bg-opacity-60">
            <div className="flex-col text-center ">
                <Iframe
                    className="w-80 h-[420px] md:w-96 lg:w-[420px]"
                    src={
                        dataSearch.getCar === "ChiangMai Rent a Car"
                            ? cmr
                            : dataSearch.getCar === "Chiangmai Airport"
                                ? airport
                                : dataSearch.getCar === "Central Chianmai Festival"
                                    ? cmfest
                                    : ""
                    }
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="my-6 text-2xl">{t('map')}</p>
            </div>

        </div>

    )
}

export default Map