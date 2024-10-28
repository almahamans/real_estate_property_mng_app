import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [userData, setUserData] = useState({username: "", password: ""});
    const [error, setError] = useState({ value: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      setUserData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (userData.username === "" || userData.password === ""){
        setError({ value: "Empty username/password field" });
      } else if(
        userData.username.toLowerCase() === "almaha" &&
        userData.password === "123456"
      ){
        localStorage.setItem("isLogin", true);
        navigate("/");
      } else {
        setError({ value: "Invalid username/password" });
      }
    };
    return (
      <section className="p-14">
        <h1 className="text-center mb-9 font-bold uppercase text-red-800">
          Sign In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-rows-4 gap-3 place-content-center"
        >
          <section>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-2 border-gray-700"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </section>
          <section>
            <label htmlFor="pass">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-gray-700"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </section>
          <button className="bg-green-700 p-2 rounded-md w-28 text-sm text-white font-bold mt-6 mx-auto">
            Sign In
          </button>
          {error.value && <p className="text-red-500">{error.value}</p>}
        </form>
      </section>
    );
}
