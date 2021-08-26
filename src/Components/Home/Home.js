import React from "react";
import { MenuFoldOutlined, BulbOutlined } from "@ant-design/icons";
import images from "./LUCY2.png";
import "./Login.css";
import { Link, Switch } from "react-router-dom";
import "./Themes.css";
import { useState, useEffect } from "react";
function Home() {
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
    <div>
      <div
        className={Dark ? " darkmode" : "lightmode"}
        style={{
          // background: "grey",
          height: 660,
          width: "100%",
          // position: "fixed",
        }}
      >
        <h1
          // className={Dark ? " darkmode" : "lightmode"}
          style={{
            fontWeight: 200,
            fontSize: 80,
            color: "white",
            float: "left",
            marginLeft: 20,
            marginTop: 10,
            letterSpacing: 10,
          }}
        >
          Lucy
        </h1>
        <BulbOutlined
          // className={Dark ? " darkmode" : "lightmode"}
          onClick={darkmode}
          style={{
            fontWeight: 200,
            fontSize: 30,
            color: "white",
            float: "right",
            marginRight: 20,
            marginTop: 40,
            letterSpacing: 10,
          }}
        />
        <img
          // className={Dark ? " darkmode" : "lightmode"}
          src={images}
          style={{ float: "left", marginTop: "200px", marginLeft: " -150px" }}
        />{" "}
        <br></br>
        <div>
          {" "}
          <h2
            // className={Dark ? " darkmode" : "lightmode"}
            style={{
              color: "white",
              marginTop: 200,
              fontSize: "40px",
              fontWeight: 300,
            }}
          >
            ONE TOUCH FOR
          </h2>
          <h2
            style={{
              color: "white",
              marginTop: -50,
              fontSize: "40px",
              fontWeight: 100,
              marginLeft: 80,
              lineHeight: 2,
            }}
          >
            ALL NEEDS
          </h2>
          <p
            style={{
              color: "white",
            }}
          >
            How it works First we'll connect you to the company. If you get put
            on hold, press * * and we will wait in your spot for you. When your
            call reaches an agent, you will get a call back. We've all been
            there. Sitting on hold with some company that won't stop telling you
            "how important your call is" to them. That's why we created
            LUCYPHONE. Lucyphone is the first consumer-driven "virtual queuing"
            or callback system. Our technology is free for consumers. We don't
            sell or share your phone numbers.
          </p>
          <Link to="/">
            <button
              style={{
                backgroundColor: "white",
                height: 30,
                width: "150",
                borderRadius: 10,
                border: "none",
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
