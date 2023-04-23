import React from "react";
import Taskstable from "../tables/Taskstable";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from "framer-motion";
const Task = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }} className="box flex flex-col text-center  container sm:mx-auto my-10  overflow-hidden ">
      <div className="md:mx-5">
        <div>
          <TaskAltIcon sx={{ fontSize: 50 }} className="mb-4 text-orange-400" />
          <label className="text-4xl my-5 font-extrabold text-orange-400">Tasks</label>
        </div>
        <div>
          <Taskstable />
        </div>
      </div>
    </motion.div>
  );
};

export default Task;
