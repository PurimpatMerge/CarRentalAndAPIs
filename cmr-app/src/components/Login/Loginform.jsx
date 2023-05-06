import React from "react";
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";

const Loginform = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {

    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {

      const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
      if (res.data.isAdmin === true) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/Adminsystem");
      }
      else if (res.data.isAdmin === false) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/Adminsystem1");
      }
      else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },


        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setError("Incorrect username or password.");

    }
  };




  return (
    <div className="container mx-auto">


      <form>
        <FormHelperText error>{error}</FormHelperText>
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
