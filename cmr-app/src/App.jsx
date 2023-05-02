import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Adminsystem from "./pages/Adminsystem";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import History from "./components/History";
import Employees from "./components/Employees";
import Add from "./components/Add";
import Error404 from "./components/Error404";
import Taskemployee from "./components/Tasksemployee";
import Detailemployee from "./components/Detailemployee";
import Listcar from "./pages/Listcar"
import Rentconfirm from "./pages/Rentconfirm";
import Paymentconfirm from "./pages/Paymentconfirm";
import Taskdetail from "./components/Taskdetail";
import Home from "./pages/Home";
import Editcar from "./emcomponents/Editcar";
import Addcar from "./emcomponents/Addcar";
import Login1 from "./pages/Login1";
import Payment from "./emcomponents/Payment";
import Adminsystem1 from "./pages/Adminsystem1";
import Carmanagement from "./emcomponents/Carmanagement";
import Historydetail from "./components/Historydetail";
import Addprofile from "./components/Addprofile";
import Paymentdetail from './emcomponents/Paymentdetail'
import Mytasksdetail from "./emcomponents/Mytasksdetail";
import Tasksem from './emcomponents/Tasksem'
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const App = () => {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  
  return (
    <BrowserRouter>
      <Routes>
        
          {/* <Route index path="/th" element={<Home />} /> */}
          <Route  path="/:lan" element={<Home />} />
      
        <Route path="/Listcar/:lan" element={<Listcar />} />
        <Route path="/Paymentconfirm/:lan/:id" element={<Paymentconfirm />} />
        <Route path="/Rentconfirm/:lan/:id" element={<Rentconfirm />} />
        <Route path="*" element={<Error404 />} />

{/* admin */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Adminsystem" element={<ProtectedRoute><Adminsystem /></ProtectedRoute>}>
          <Route path="" element={<Dashboard />} />
          <Route path="Taskdetail/:id" element={<Taskdetail />} />
          <Route path="Historydetail/:id" element={<Historydetail />} />
          <Route path="Profile/:id" element={<Profile />} />
          <Route path="Addprofile" element={<Addprofile />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="History" element={<History />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="Add" element={<Add />} />
          <Route path="Taskemployee" element={<Taskemployee />} />
          <Route path="Detailemployee" element={<Detailemployee />} />
        </Route>






{/* sale */}
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Adminsystem1" element={<Adminsystem1 />}>
          <Route path="" element={<Payment />} />
          <Route path="Profile/:id" element={<Profile />} />
          <Route path="Tasksem" element={<Tasksem />} />
          <Route path="Carmanagement" element={<Carmanagement />} />
          <Route path="Paymentdetail/:id" element={<Paymentdetail />} />
          <Route path="Mytasksdetail" element={<Mytasksdetail />} />
          <Route path="Addcar" element={<Addcar />} />
          <Route path="Editcar/:id" element={<Editcar />} />
          <Route path="History" element={<History />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
export default App;
