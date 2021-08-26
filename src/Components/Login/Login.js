import React from "react";
import "./Login.css";
import { Input } from "antd";
import { Space } from "antd";
import {
  createFromIconfontCN,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Link, Switch } from "react-router-dom";
function Login() {
  return (
    <div className="loginpage">
      <img
        className="image"
        style={{ float: "left" }}
        src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWwlMjBsYW5kc2NhcGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      ></img>
      <div
        style={
          {
            //   flexDirection: "column",
          }
        }
      >
        <h2
          style={{
            float: "left",
            marginLeft: 30,
            borderBottom: "5px solid blue",
          }}
        >
          Login here
        </h2>
        <br></br>
        <br></br>
      </div>{" "}
      <div
        style={{
          flexDirection: "column",
          marginTop: 100,
          marginLeft: 400,
          lineHeight: 5,
        }}
      >
        <Input
          placeholder="Username"
          style={{
            height: 50,
            width: 500,
            borderBottom: "2px solid grey",
            border: "0px",
          }}
        />
        <Input
          placeholder="email"
          style={{
            height: 50,
            width: 500,
            borderBottom: "2px solid grey",
            border: "0px",
          }}
        />
        <br></br>
        <Input
          placeholder="password"
          style={{
            height: 50,
            width: 500,
            borderBottom: "2px solid grey",
            border: "0px",
          }}
        />
        <EyeInvisibleOutlined />
        <br></br>
        <button
          style={{
            height: 50,
            width: 500,

            border: "0px",
          }}
        >
          Login
        </button>
      </div>
      <span>
        <h5 style={{ color: "grey" }}>If you dont have an account</h5>

        <a style={{ textDecoration: "none" }} href="#">
          Sign up
        </a>
      </span>
    </div>
  );
}

export default Login;
