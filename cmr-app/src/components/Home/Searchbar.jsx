import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { addDays } from 'date-fns';
import isBefore from "dayjs";
import isAfter from "dayjs";
import { useState } from "react";
dayjs.extend(isBefore);
dayjs.extend(isAfter);
const Searchbar = () => {
  const navigate = useNavigate();
  //set date
  const startdate1 = addDays(new Date(), 1);
  const startdate2 = addDays(new Date(), 2);
  //set time

  const [value1, setValue1] = React.useState(dayjs(startdate1));
  const [value2, setValue2] = React.useState(dayjs(startdate2));

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [errormsg1, setErrorMsg1] = useState('');
  const [errormsg2, setErrorMsg2] = useState('');
  const [error3, setError3] = useState(false);
  const [errormsg3, setErrorMsg3] = useState('');


  const [Location1, setLocation1] = React.useState("");
  const handleChange1 = (event) => {
    setLocation1(event.target.value);
    setError1(false);
    setErrorMsg1('');
  };

  const [Location2, setLocation2] = React.useState("");
  const handleChange2 = (event) => {
    setError2(false);
    setLocation2(event.target.value);
    setErrorMsg2('');
  };

  const handleChange3 = (newValue) => {
    setValue1(newValue);
    setDateErrormsg(newValue, value2);
  };

  const handleChange4 = (newValue) => {
    setValue2(newValue);
    setDateErrormsg(value1, newValue);
  };

  //Validation
  //Date
  const setDateErrormsg = (value1, value2) => {
    if (dayjs(value1).isBefore(value2)) {
      setError3(false);
      setErrorMsg3('');
    } else {
      setError3(true);
      setErrorMsg3('Invalid date range!');
    }
  };
  

  const handleSubmit = () => {
    if (Location1 && Location2 && value1.isBefore(value2)) {

      const dataSearch = {
        getCar: Location1,
        backCar: Location2,
        getCarTime: value1.format('ddd MMM DD YYYY HH:mm:ss '),
        backCarTime: value2.format('ddd MMM DD YYYY HH:mm:ss '),
      };
      navigate(`/Listcar/${lang}`, { state: { dataSearch } });

    } else {
      // location
      if (!Location1) {
        setError1(true);
        setErrorMsg1('Please select!');
      }
      if (!Location2) {
        setError2(true);
        setErrorMsg2('Please select!');
      }
    }
  };

  //disable time
  const [selectedDate, handleDateChange] = useState(new Date());

  const disableTimeValidation = (date) => {
    const hour = date.getHours();
    return hour >= 1 && hour <= 5;
  };
  


  const location = useLocation();
  const lang = location.pathname.split("/")[1];

  const { t } = useTranslation();


  return (
    <>
      <div className="my-3 mx-3 hidden lg:block">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

          <InputLabel id="">{t("in1")}</InputLabel>
          <Select
            labelId=""
            id=""
            value={Location1}
            onChange={handleChange1}
            label="จุดรับรถ"
            error={error1}
          >
            <MenuItem value={"ChiangMai Rent a Car"}>บริษัท ChiangMai Rent a Car</MenuItem>
            <MenuItem value={"Chiangmai Airport"}>Chiangmai Airport</MenuItem>
            <MenuItem value={"Central Chianmai Festival"}>Central Chianmai Festival</MenuItem>
          </Select>
          <FormHelperText error>{errormsg1}</FormHelperText>
        </FormControl>
      </div>
      <div className="my-3 mx-3  hidden lg:block">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="">{t("in2")}</InputLabel>
          <Select
            labelId=""
            id=""
            value={Location2}
            onChange={handleChange2}
            label="จุดคืนรถ"
            error={error2}
          >
            <MenuItem value={"ChiangMai Rent a Car"}>บริษัท ChiangMai Rent a Car</MenuItem>
            <MenuItem value={"Chiangmai Airport"}>Chiangmai Airport</MenuItem>
            <MenuItem value={"Central Chianmai Festival"}>Central Chianmai Festival</MenuItem>
          </Select>
          <FormHelperText error>{errormsg2}</FormHelperText>
        </FormControl>

      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className='md:hidden my-3 mx-3'>
            <MobileDateTimePicker
              className='sm:w-[220px]'
              label={t('in3')}
              value={value1}
              onChange={(newValue) => {
                setValue1(newValue);
              }}
              minDate={startdate1}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="my-3 mx-3 hidden md:block">
            <DesktopDateTimePicker
               disableTimeValidation={disableTimeValidation}
              className="w-[220px]"
              label={t("in3")}
              value={value1}
              error={error3}
              onChange={handleChange3}
              renderInput={(params) => <TextField {...params} />}
              minDate={startdate1}
            />

            <FormHelperText error>{errormsg3}</FormHelperText>
          </div>
        </LocalizationProvider>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className='md:hidden my-3 mx-3'>
            <MobileDateTimePicker
              className='sm:w-[220px]'
              label={t('in4')}
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              minDate={startdate2}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="my-3 mx-3 hidden md:block">
            <DesktopDateTimePicker
              className="w-[220px]"
              label={t("in4")}
              value={value2}
              onChange={handleChange4}
              minDate={startdate2}
              error={error3}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText error>{errormsg3}</FormHelperText>
          </div>
        </LocalizationProvider>
      </div>
      <div className="my-auto mx-3">

        <button
          type="button"
          onClick={handleSubmit}
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Search
        </button>

      </div>
    </>
  );
};


export default Searchbar;
