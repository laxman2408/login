import React from "react";
import "./Login.css";
import { Input } from "antd";
import { Space } from "antd";
import { MenuFoldOutlined, BulbOutlined } from "@ant-design/icons";
import {
  createFromIconfontCN,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const [Dark, setDark] = useState(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : [];
  }, false);
  const darkmode = () => {
    setDark(!Dark);
  };
  useEffect(() => {
    localStorage.setItem("theme", Dark);
  }, [Dark]);

  // React.useEffect(() => {
  //   localStorage.setItem(form, JSON.stringlify());
  // }, [values]);

  return (
    <div
      className={Dark ? " darkmode" : "lightmode"}
      style={{
        height: 660,
        width: "100%",
        // position: "fixed",
      }}
    >
      <img
        className="image"
        style={{ float: "left", height: 660 }}
        src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ></img>
      <div
        className={Dark ? " darkmode" : "lightmode"}
        style={
          {
            //   flexDirection: "column",
          }
        }
      >
        <h2
          // className={Dark ? " darkmode" : "lightmode"}
          style={{
            float: "left",
            marginLeft: 30,
            borderBottom: "5px solid blue",
          }}
        >
          Login here
        </h2>
        <BulbOutlined
          onClick={darkmode}
          style={{
            fontWeight: 300,
            fontSize: 30,
            float: "right",
            marginTop: 20,
            marginRight: 20,
          }}
        />
        <br></br>
        <br></br>
      </div>{" "}
      <div
        // className={Dark ? " darkmode" : "lightmode"}
        style={{
          flexDirection: "column",
          marginTop: 100,
          marginLeft: 400,
          lineHeight: 5,
        }}
      >
        <Input
          className={Dark ? " darkmode" : "white"}
          placeholder="Username"
          style={{
            height: 50,
            width: 500,
            borderBottom: "2px solid black",
            border: "0px",
          }}
        />
        <Input
          className={Dark ? " darkmode" : "white"}
          placeholder="email"
          style={{
            height: 50,
            width: 500,
            borderBottom: "2px solid black",
            border: "0px",
          }}
        />
        <br></br>
        <Input
          className={Dark ? " darkmode" : "white"}
          id="username"
          placeholder="password"
          style={{
            height: 50,
            width: 500,
            borderBottom: "2px solid black",
            border: "0px",
          }}
        />
        <EyeInvisibleOutlined />
        <br></br>
        <Link to="/Home">
          <button
            className={Dark ? " darkmode" : "white"}
            style={{
              height: 50,
              width: 500,

              border: "0px",
            }}
          >
            Login
          </button>
        </Link>
      </div>
      <span className={Dark ? " darkmode" : "white"}>
        <h5 style={{ color: "grey" }}>If you dont have an account</h5>
        <Link to="/Signup">
          <a style={{ textDecoration: "none" }} href="#">
            Sign up
          </a>
        </Link>
      </span>
    </div>
  );
}

export default Login;
