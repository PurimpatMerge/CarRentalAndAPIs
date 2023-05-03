import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Adminsystem from "./pages/Adminsystem";
import Dashboard from "./components/Adminsystem/Dashboard";
import Profile from "./components/Adminsystem/Profile";
import Tasks from "./components/Adminsystem/Tasks";
import History from "./components/Adminsystem/History";
import Employees from "./components/Adminsystem/Employees";
import Error404 from "./components/Multiple/Error404";
import Listcar from "./pages/Listcar"
import Rentconfirm from "./pages/Rentconfirm";
import Paymentconfirm from "./pages/Paymentconfirm";
import Tasksdetail from "./components/Adminsystem/Tasksdetail";
import Home from "./pages/Home";
import Editcar from "./components/Adminsystem1/Editcar";
import Addcar from "./components/Adminsystem1/Addcar";
import Login1 from "./pages/Login1";
import Payment from "./components/Adminsystem1/Payment";
import Adminsystem1 from "./pages/Adminsystem1";
import Carmanagement from "./components/Adminsystem1/Carmanagement";
import Historydetail from "./components/Adminsystem/Historydetail";
import Addprofile from "./components/Adminsystem/Addprofile";
import Paymentdetail from './components/Adminsystem1/Paymentdetail'
import Mytasksdetail from "./components/Adminsystem1/Mytasksdetail";
import Tasksem from './components/Adminsystem1/Tasksem'
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
        
          
          <Route  index path="/:lan" element={<Home />} />
      
        <Route path="/Listcar/:lan" element={<Listcar />} />
        <Route path="/Paymentconfirm/:lan/:id" element={<Paymentconfirm />} />
        <Route path="/Rentconfirm/:lan/:id" element={<Rentconfirm />} />
        <Route path="*" element={<Error404 />} />

{/* admin */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Adminsystem" element={<ProtectedRoute><Adminsystem /></ProtectedRoute>}>
          <Route path="" element={<Dashboard />} />
          <Route path="Tasksdetail/:id" element={<Tasksdetail />} />
          <Route path="Historydetail/:id" element={<Historydetail />} />
          <Route path="Profile/:id" element={<Profile />} />
          <Route path="Addprofile" element={<Addprofile />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="History" element={<History />} />
          <Route path="Employees" element={<Employees />} />
        </Route>






{/* sale */}
        <Route path="/Login1" element={<Login1 />} />
        <Route path="/Adminsystem1" element={<Adminsystem1 />}>
          <Route path="" element={<Payment />} />
          <Route path="Profile/:id" element={<Profile />} />
          <Route path="Tasksem" element={<Tasksem />} />
          <Route path="Carmanagement" element={<Carmanagement />} />
          <Route path="Paymentdetail/:id" element={<Paymentdetail />} />
          <Route path="Mytasksdetail/:id" element={<Mytasksdetail />} />
          <Route path="Addcar" element={<Addcar />} />
          <Route path="Editcar/:id" element={<Editcar />} />
          <Route path="History" element={<History />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
export default App;
