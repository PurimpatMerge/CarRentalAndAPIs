import Historystable from "../../components/tables/Historytable";
import HistoryIcon from '@mui/icons-material/History';
import { motion } from "framer-motion";
const History = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 3,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className="box flex flex-col text-center  container sm:mx-auto my-10  overflow-hidden relative">
      <div className="md:mx-5">
        <div>
          <HistoryIcon sx={{ fontSize: 50 }} className="mb-4 text-orange-400" />
          <label className="text-4xl my-5 text-orange-400 font-extrabold ">History</label>
        </div>
        <div>
          <Historystable />
        </div>
      </div>


    </motion.div>
  );
};

export default History;
