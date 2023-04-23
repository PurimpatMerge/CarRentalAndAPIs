import * as React from 'react';

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import '../components/Home.css'
import { useTranslation } from 'react-i18next';


import Searchbar from './Searchbar';




const Hero = () => {
    

    

    const { t } = useTranslation();
   
  


 

    return (
        <div>
            <div className="bg-[url('./img/bg1.jpg')] bg-cover  bg-fixed bg-white h-[520px] text-center  relative">

                <div className=''>
                    <p className='text-2xl sm:text-5xl font-bold text-white pt-24 tracking-wider'>{t('h1')}
                        <div class="typing-demo mx-auto  text-2xl sm:text-5xl font-bold text-orange-300 tracking-wider">
                            Chiangmai Rent a car
                        </div>
                    </p>
                    <p className='text-1xl sm:text-4xl font-bold text-white  pt-5  tracking-wider'> {t('h2')} </p>
                    <p className='text-white sm:text-base text-sm tracking-wider pt-10  '>
                        {t('h3')}
                    </p>
                    <p className='text-white tracking-wider'> {t('h4')}</p>
                </div>


                <div className='container mx-auto  '>
                    <div className='flex  bg-gray-100 border shadow-lg sm:left-2/3 sm:transform sm:-translate-x-2/3 lg:left-1/2 lg:transform lg:-translate-x-1/2    rounded-md  bottom-[-40px] absolute '>
                        <Searchbar/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center  mt-20 '>
                <p className='text-lg sm:text-3xl font-bold  tracking-wide'>{t('h5')}</p>
            </div>
            <div className='container mx-auto flex justify-between my-10 sm:my-20'>
                <div className='text-center'>
                    <CheckBoxOutlinedIcon className='text-orange-400' sx={{ fontSize: 90 }} />
                    <p className='font-semibold text-base sm:text-xl'>{t('check1')}</p>
                </div>
                <div className='text-center'>
                    <CheckBoxOutlinedIcon className='text-orange-400' sx={{ fontSize: 90 }} />
                    <p className='font-semibold text-base sm:text-xl'>{t('check2')}</p>
                </div>
                <div className='text-center'>
                    <CheckBoxOutlinedIcon className='text-orange-400' sx={{ fontSize: 90 }} />
                    <p className='font-semibold text-base sm:text-xl'>{t('check3')}</p>
                </div>
            </div>



        </div>
    )
}
export default Hero