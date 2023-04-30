import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Searchbar = () => {
  // const [info, setInfo] = useState({});

  // const handleChange = (e) => {
  //     setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };
  const navigate = useNavigate();
  const [value1, setValue1] = React.useState(dayjs("2023-01-25T00:00:00.000Z"));
  const [value2, setValue2] = React.useState(dayjs("2023-01-25T00:00:00.000Z"));

  const [Location1, setLocation1] = React.useState("");
  const handleChange1 = (event) => {
    setLocation1(event.target.value);
  };

  const [Location2, setLocation2] = React.useState("");
  const handleChange2 = (event) => {
    setLocation2(event.target.value);
  };
  const dataSearch = {
    getCar: Location1,
    backCar: Location2,
    getCarTime: value1.format('ddd MMM DD YYYY HH:mm:ss '),
    backCarTime: value2.format('ddd MMM DD YYYY HH:mm:ss '),
  };
  const test = () => {
    console.log(dataSearch, 1);
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
          >
            <MenuItem value={"com"}>บริษัท ChiangMai Rent a Car</MenuItem>
            <MenuItem value={"airport"}>Chiangmai Airport</MenuItem>
            <MenuItem value={"central"}>Central Chianmai Festival</MenuItem>
          </Select>
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
          >
            <MenuItem value={"com"}>บริษัท ChiangMai Rent a Car</MenuItem>
            <MenuItem value={"airport"}>Chiangmai Airport</MenuItem>
            <MenuItem value={"central"}>Central Chianmai Festival</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <div className='md:hidden my-3 mx-3'>
                        <MobileDateTimePicker
                            className='sm:w-[220px]'
                            label={t('in3')}
                            value={value1}
                            onChange={(newValue) => {
                                setValue1(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div> */}
          <div className="my-3 mx-3 hidden md:block">
            <DesktopDateTimePicker
              className="w-[220px]"
              label={t("in3")}
              value={value1}
              onChange={(newValue) => {
                setValue1(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <div className='md:hidden my-3 mx-3'>
                        <MobileDateTimePicker
                            className='sm:w-[220px]'
                            label={t('in4')}
                            value={value2}
                            onChange={(newValue) => {
                                setValue2(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div> */}
          <div className="my-3 mx-3 hidden md:block">
            <DesktopDateTimePicker
              className="w-[220px]"
              label={t("in4")}
              value={value2}
              onChange={(newValue) => {
                setValue2(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>
      </div>
      <div className="my-auto mx-3">
   
          <button
            type="button"
            onClick={() => navigate(`/Listcar/${lang}`, { state: { dataSearch } })}
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:scale-105 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Search
          </button>
   
      </div>
    </>
  );
};
                  

export default Searchbar;
