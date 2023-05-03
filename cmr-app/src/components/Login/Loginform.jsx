import React from "react";
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";

const Loginform = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      console.log(1);
      const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/Adminsystem");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  // const [goToAdminPage, SetgoToAdminPage] = React.useState(false);
  // if (goToAdminPage) {
  //   return <Navigate to="/Adminsystem" />;
  // }

  return (
    <div className="container mx-auto">


      <form>
        <div>
          <TextField type="text" id="username" className="w-full" label="Username" variant="standard" onChange={handleChange} />
        </div>
        <div className="mt-8">
          <TextField type="password" id="password" className="w-full" label="Password" variant="standard" onChange={handleChange} />
        </div>
        <div className="mt-10">
          <button
           onClick={handleClick}
            className="border-solid border-1 border-black bg-white duration-200 hover:opacity-80 hover:scale-110 p-4 w-full rounded-full tracking-wide font-semibold font-display shadow-lg"
          >
            Log In
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Loginform;
