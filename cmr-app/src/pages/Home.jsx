import Navbarlist from '../components/Navbarlist'
import Hero from '../components/Hero'
import Sector1 from '../components/Sector1'
import Sector2 from '../components/Sector2'
import { useLocation } from 'react-router-dom';
import i18n from "i18next";
import { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
 
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const location = useLocation();
  const lang = location.pathname.split("/")[1];
  i18n.changeLanguage(lang);

  return (
    <div>
      {

        loading ?
          <>
            <div className='h-min-screen bg-white brightness-50'>
              <Navbarlist />
              <Hero />
              <Sector1 />
              <Sector2 />
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
            <Navbarlist />
            <Hero />
            <Sector1 />
            <Sector2 />
          </div>
      }
    </div>

  )
}

export default Home