import React from "react";
import Iframe from 'react-iframe'
import { useTranslation } from 'react-i18next';
const Map = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto lg:mx-10  bg-white rounded-lg  shadow-lg w-fit bg-opacity-60">
            <div className="flex-col text-center ">
            <Iframe className="w-80 h-[420px] md:w-96 lg:w-[420px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.812376054482!2d99.01594406536461!3d18.806513065273773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da25341c860e03%3A0x479daf5a0a43e38!2z4LmA4LiL4LmH4LiZ4LiX4Lij4Lix4LilIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1673637349842!5m2!1sth!2sth"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            <p className="my-6 text-2xl">{t('map')}</p>
            </div>
            
        </div>

    )
}

export default Map