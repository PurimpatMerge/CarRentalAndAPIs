import 'tw-elements';
import slide1 from '../img/slide1.jpg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import slide4 from '../img/slide4.jpg'
import slide5 from '../img/slide5.jpg'
import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
const Sector1 = () => {
    const { t } = useTranslation();
    return (
        <>
            <Carousel autoplay>
                <div>
                    <div class="w-full relative">
                        <img
                            src={slide1}
                            className="block w-full lg:h-screen object-cover"
                            alt="slide1"
                        />
                        <div className="block absolute backdrop-blur-sm bg-white/30 rounded-md w-2/5 p-5 bg-opacity-40 bottom-10 left-2/4 -translate-x-2/4 text-center">
                            <h5 className="text-5xl text-black">{t('type1')}</h5>
                            <br />
                            <p className='text-black text-2xl'>{t('types1')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full relative">
                        <img
                            src={slide2}
                            className="block w-full lg:h-screen object-cover"
                            alt="slide2"
                        />
                        <div className="block absolute backdrop-blur-sm bg-white/30 rounded-md w-2/5 p-5 bg-opacity-40 bottom-10 left-2/4 -translate-x-2/4 text-center">
                            <h5 className="text-5xl text-black">{t('type2')}</h5>
                            <br />
                            <p className='text-black text-2xl'>{t('types2')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full relative">
                        <img
                            src={slide3}
                            className="block w-full lg:h-screen object-cover"
                            alt="slide3"
                        />
                        <div className="block absolute backdrop-blur-sm bg-white/30 rounded-md w-2/5 p-5 bg-opacity-40 bottom-10 left-2/4 -translate-x-2/4 text-center">
                            <h5 className="text-5xl text-black">{t('type3')}</h5>
                            <br />
                            <p className='text-black text-2xl'>{t('types3')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full relative">
                        <img
                            src={slide4}
                            className="block w-full lg:h-screen object-cover"
                            alt="slide4"
                        />
                        <div className="block absolute backdrop-blur-sm bg-white/30 rounded-md w-2/5 p-5 bg-opacity-40 bottom-10 left-2/4 -translate-x-2/4 text-center">
                            <h5 className="text-5xl text-black">{t('type4')}</h5>
                            <br />
                            <p className='text-black text-2xl'>{t('types4')}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full relative">
                        <img
                            src={slide5}
                            className="block w-full lg:h-screen object-cover"
                            alt="slide5"
                        />
                        <div className="block absolute backdrop-blur-sm bg-white/30 rounded-md w-2/5 p-5 bg-opacity-40 bottom-10 left-2/4 -translate-x-2/4 text-center">
                            <h5 className="text-5xl text-black">{t('type5')}</h5>
                            <br />
                            <p className='text-black text-2xl'>{t('types5')}</p>
                        </div>
                    </div>
                </div>

            </Carousel>
        </>
    )
}

export default Sector1