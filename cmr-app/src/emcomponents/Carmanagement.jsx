import React from "react";
import Carstable from "../tables/Carstable";
import { motion } from "framer-motion";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="box flex flex-col text-center  container sm:mx-auto my-10  overflow-hidden ">
      <div className="md:mx-5">
        <div>
          <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 50 }} className="mb-4 text-orange-400" />
          <label className="text-4xl my-5 text-orange-400 font-extrabold ">Cars Management</label>
        </div>
        <div className="relative">
          <div className="z-40 absolute left-2 top-2">
            <Link to="/Adminsystem1/Addcar"
            ><IconButton color="success" aria-label="addperson">
                <AddBoxOutlinedIcon />
                <p className="text-base">Add</p>
              </IconButton>
            </Link>
          </div>
          <Carstable />
        </div>
      </div>
    </motion.div>

  );
};

export default Payment;
