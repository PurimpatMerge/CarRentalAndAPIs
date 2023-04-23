import React from "react";
import { useState, useEffect } from "react";

const Add = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <>
      <div className="container mx-auto sm:max-w-screen-md "> 
        <div className="flex flex-col mt-24">
          <div className="bg-white bg-opacity-60 rounded-lg mx-4 my-4 sm:mx-10 sm:my-10">
            <table class="table-auto text-xs sm:text-base  mx-10 my-10">
              <tr >
                <td className="sm:py-4"> ProfileImage:</td>
                <td>
                  <input
                    class=""
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                </td>
              </tr >
              <tr >
                <td></td>
                <td>
                  {imageURLs.map((imageSrc) => (
                    <img className="sm:w-36 w-20 h-20 object-cover sm:h-36 rounded-lg" src={imageSrc} alt="profileimg" />
                  ))}
                </td>
              </tr>
              <tr >
                <td className="sm:py-4">Username:</td>
                <td>
                  <input
                    class="shadow appearance-none border rounded w-36  sm:w-full py-2 px-3 text-gray-700   focus:shadow-outline focus:outline-none"
                    id="username"
                    type="text"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="sm:py-4">Password:</td>
                <td>
                  <input
                    class="shadow appearance-none border rounded w-36 sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="sm:py-4">Email:</td>
                <td>
                  <input
                    class="shadow appearance-none border rounded w-36 sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="sm:py-4">Firstname:</td>
                <td>
                  <input
                    class="shadow appearance-none border rounded w-36 sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="sm:py-4">Surname:</td>
                <td>
                  <input
                    class="shadow appearance-none border rounded w-36 sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="surname"
                    type="text"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="sm:py-4">Position:</td>
                <td>
                  <select class="shadow appearance-none border rounded w-36 sm:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Choose the Position</option>
                    <option>Manager</option>
                    <option>Saraly</option>
                  </select>
                </td>
              </tr>
            </table>
            <div className="float-right">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-2 text-xs py-1 px-1 sm:px-4 rounded-lg my-5 mx-5">
                Apply
              </button>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-2 text-xs py-1 px-1 sm:px-4 rounded-lg mr-5">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;


