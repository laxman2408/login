import React from "react";
import { Input } from "antd";
import { Space } from "antd";
import "./Theme.css";
import {
  createFromIconfontCN,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { MenuFoldOutlined, BulbOutlined } from "@ant-design/icons";
import { Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
function Signup() {
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

  return (
    <div
      className={Dark ? " darkmode" : "lightmode"}
      style={{
        color: "white",
        height: 660,
        width: "100%",
        // position: "fixed",
      }}
    >
      <div className="loginpage">
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
              // color: "black",
            }}
          >
            Signup here
          </h2>
          <br></br>
          <br></br>
        </div>{" "}
        <BulbOutlined
          onClick={darkmode}
          style={{
            // color: "black",
            fontWeight: 300,
            fontSize: 30,
            // float: "right",
            // marginTop: 20,
            // marginRight: 20,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 50,
            marginLeft: 200,
            // lineHeight: 5,
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
          <br></br>
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
          />{" "}
          {/* <EyeInvisibleOutlined /> */}
          <br></br>
          <Input
            className={Dark ? " darkmode" : "white"}
            id="username"
            placeholder="re enter"
            style={{
              height: 50,
              width: 500,
              borderBottom: "2px solid black",
              border: "0px",
            }}
          />
          {/* <EyeInvisibleOutlined /> */}
          <br></br>
          <Link to="/Home">
            <button
              className={Dark ? " darkmode" : "white"}
              style={{
                height: 50,
                width: 500,
                marginLeft: "-660px",
                border: "0px",
              }}
            >
              Signup
            </button>
          </Link>
          <div style={{ marginLeft: "-600px" }}>
            {/* <h5 style={{ color: "grey" }}>If you dont have an account</h5>
            <Link to="/Signup">
              <a style={{ textDecoration: "none" }} href="#">
                Sign up
              </a>
            </Link> */}
          </div>
        </div>
        <img
          className="image"
          style={{ float: "right", height: 700, width: 500, marginTop: -450 }}
          src="https://picjumbo.com/wp-content/uploads/white-bmw-x6m-wallpaper-free-photo-1080x1620.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Signup;
