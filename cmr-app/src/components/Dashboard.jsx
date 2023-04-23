import React from "react";
import { motion } from "framer-motion";
import "tw-elements";
import { CChart } from '@coreui/react-chartjs'
import {
  AiOutlineEye,
  AiOutlineDollar,
  AiOutlineTeam,
  AiOutlineIssuesClose,
} from "react-icons/ai";


import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';


import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';


import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Dashboard = () => {


  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  return (

    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01]
    }} className="box container mx-auto bg-white bg-opacity-40 my-5 shadow-lg rounded-lg">

    <div className="flex gap-5 justify-around flex-wrap  mx-5 my-5">
      <div className="flex-col grow ">
        {/* Items */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-5   ">
          <div className="mb-2 md:mb-0">
            <div class="flex flex-row bg-white p-5 shadow-lg rounded-lg ">
              <div class="flex-none w-2/3 max-w-full  px-3">
                <div>
                  <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                    Today's Money
                  </p>
                  <h5 class="mb-2 font-bold dark:text-white">53,000</h5>
                  <hr></hr>
                </div>
              </div >
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg  bg-opacity-20 bg-gradient-to-tl from-blue-500 to-violet-500">
                  <AiOutlineDollar className="text-white text-2xl mx-auto mt-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-0">
            <div class="flex flex-row bg-white p-5 shadow-lg rounded-lg ">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                    Today's Views
                  </p>
                  <h5 class="mb-2 font-bold dark:text-white">500</h5>
                  <hr></hr>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg  bg-opacity-20 bg-gradient-to-tl from-blue-500 to-violet-500">
                  <AiOutlineEye className="text-white text-2xl mx-auto mt-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-0">
            <div class="flex flex-row h-full bg-white p-5 shadow-lg rounded-lg ">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                    Today's Tasks
                  </p>
                  <h5 class="mb-2 font-bold dark:text-white">7</h5>
                  <hr></hr>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg  bg-opacity-20 bg-gradient-to-tl from-blue-500 to-violet-500">
                  <AiOutlineIssuesClose className="text-white text-2xl mx-auto mt-3" />
                </div>
              </div>
            </div>
          </div >
          <div className="mb-2 md:mb-0">
            <div class="flex flex-row h-full bg-white p-5 shadow-lg rounded-lg ">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                    Member
                  </p>
                  <h5 class="mb-2 font-bold dark:text-white">5</h5>
                  <hr></hr>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg  bg-opacity-20 bg-gradient-to-tl from-blue-500 to-violet-500">
                  <AiOutlineTeam className="text-white text-2xl mx-auto mt-3" />
                </div>
              </div>
            </div>
          </div >

        </div>
        {/* LineChart */}
        <div className=" bg-white rounded-lg w-[340px] sm:w-[600px]  md:w-full shadow-lg  p-5 bg-opacity-80 ">
          <p>ยอดรายได้</p>
          <CChart
          className="w-[320px] sm:w-[550px]  md:w-full"
            type="line"
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep", " Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Eco",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "#FF6384",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: [12000, 30000, 70000, 40000, 60000, 20000, 40000, 80000, 100000, 20000, 40000, 100000]
                },
                {
                  label: "Ev",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "#4BC0C0",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [40000, 20000, 35000, 22000, 40000, 66600, 70000, 40000, 46000, 30000, 80000, 45000]
                },
                {
                  label: "C-Segment",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "#FFCE56",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [8000, 10000, 12000, 30000, 50000, 32000, 45000, 65000, 44000, 35000, 55000, 20000]
                },
                {
                  label: "D-Segment",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "hsl(252, 82.9%, 67.8%)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [17000, 18000, 20000, 45000, 35000, 33000, 12000, 60000, 40000, 10000, 50000, 16000, 100000]
                },
                {
                  label: "SUV",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "#36A2EB",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  data: [20000, 18000, 30000, 19000, 15000, 36000, 40000, 62000, 64000, 32000, 21000, 36000]
                },
              ],
            }}
          />
        </div>
      </div>
      {/* Piechart */}
      <div className="flex flex-wrap gap-5 xl:flex-col">
        <div className="bg-white shadow-lg flex mb-1 rounded-lg w-fit bg-opacity-80">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item xs={12} md={6}>
              <CalendarPicker />
            </Grid>
          </LocalizationProvider>
        </div>
        <div className="bg-white shadow-lg justify-center flex h-fit rounded-lg mb-1 bg-opacity-80">
          <div className="my-5  ">
            <p>ยอดการเช่า</p>

            <CChart
              className="w-[250px]"
              type="polarArea"
              data={{
                labels: ['Eco', 'Ev', 'C-segment', 'D-segment', 'SUV'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', 'hsl(252, 82.9%, 67.8%)', '#36A2EB'],
                  },
                ],
              }}
            />

          </div>
        </div>
        <div className=" p-5 shadow-lg  bg-white rounded-lg bg-opacity-80 ">
          <LocalizationProvider dateAdapter={AdapterDayjs} >

            <DatePicker
              className="w-full "
              views={['year', 'month']}
              label="Year and Month"
              minDate={dayjs('2012-03-01')}
              maxDate={dayjs('2023-01-027')}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} helperText={null} />}
            />
            <p className="text-gray-500">To</p>
            <DatePicker
              className="w-full"
              views={['year', 'month']}
              label="Year and Month"
              minDate={dayjs('2012-03-01')}
              maxDate={dayjs('2023-01-027')}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} helperText={null} />}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>



  </motion.div>


  );
};

export default Dashboard;
