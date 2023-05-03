import React from "react";
import { TextField } from '@mui/material';
import { Navigate } from "react-router-dom";

const Loginform = () => {
  const [goToAdminPage, SetgoToAdminPage] = React.useState(false);
  if (goToAdminPage) {
    return <Navigate to="/Adminsystem1" />;
  }

  return (
    <div className="container mx-auto">
      <form>
        <div>
        <TextField id="standard-basic" className="w-full" label="Username" variant="standard" />
        </div>
        <div className="mt-8">
        <TextField id="standard-basic" className="w-full" label="Password" variant="standard" />
        </div>
        <div className="mt-10">
          <button
            onClick={() => {
              SetgoToAdminPage(true);
            }}
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
