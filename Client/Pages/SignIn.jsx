import React, { useState } from "react";
import signpic from "../Assets/SignPic.png";
import orderUK from "../Assets/OrderUKcolor.png";
import handsvg from "../src/assets/waving-hand.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../Utilities/ToastOptons.jsx";
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleClick(){
        if(email == ""|| password==""){
            return;
        }
        setEmail("");
        setPassword("");
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`, {email, password},{
                headers: {
                  'Content-Type' : 'application/json'
                }
              }); 
              if(response.data.success){
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
            else{
                toast.error(response.data.msg, toastOptions)
            }
        } catch (error) {
            toast.error("Error in sending request", toastOptions);
        }
        
        
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ height: "100vh", display: "flex" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            padding: "60px 140px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={orderUK} alt="logo" />
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyItems: "center",
              paddingTop: "24px",
              marginBottom: "16px",
            }}
          >
            <h1 style={{ fontFamily: "Poppins", fontWeight: "600" }}>
              Welcome Back
            </h1>
            <img
              src={handsvg}
              alt="hand wave emoji"
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "1.2rem",
            }}
          >
            <p>Today is a new day. It's your day. You shape it.</p>
            <p>Sign in to start ordering.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "18px",
            }}
          >
            <label
              htmlFor="email"
              style={{ fontFamily: "Poppins", fontSize: "0.9rem" }}
            >
              Email
            </label>
            <input
              type="text"
              className="email"
              placeholder="Example@gmail.com"
              style={{
                padding: "8px 10px",
                fontFamily: "Poppins",
                fontSize: "1rem",
                borderRadius: "4rem",
                border: "solid grey thin",
                marginBottom: "12px",
              }}
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="password"
              style={{ fontFamily: "Poppins", fontSize: "0.9rem" }}
            >
              Password
            </label>
            <input
              type="text"
              className="email"
              placeholder="At least 8 characters"
              style={{
                padding: "8px 10px",
                fontFamily: "Poppins",
                fontSize: "1rem",
                borderRadius: "4rem",
                border: "solid grey thin",
                marginBottom: "12px",
              }}
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "#FC8A06",
                marginBottom: "12px",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <button
            style={{
              padding: "8px 10px",
              fontFamily: "Poppins",
              fontSize: "1.2rem",
              borderRadius: "4rem",
              background: "#FC8A06",
              color: "white",
              border: "none",
              marginBottom: "48px",
            }}
            onClick={handleClick}
          >
            Sign In
          </button>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ fontFamily: "Poppins", fontSize: "1.1rem" }}>
              Don't you have an account?{" "}
            </p>
            <NavLink
              to={"/signup"}
              style={{
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                color: "#FC8A06",
                paddingLeft: "3px",
              }}
            >
              {" "}
              Sign Up
            </NavLink>
          </div>
        </div>

        <div style={{ width: "50%", padding: "12px" }}>
          <img
            src={signpic}
            alt="Image"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default SignIn;
