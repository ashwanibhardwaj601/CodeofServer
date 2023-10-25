import React, { useState, useEffect } from "react";
import { messaging } from "./Firebase";
import { getToken } from "firebase/messaging";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(null);

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const fcmToken = await getToken(messaging, {
        vapidKey:
          "BGUi-FYcif1Bu2ZX6KAxYve2spfDCFR9bGyWmmaj-SjqRAcMjQLBfh3RySsJKNlJlppPP3KC-nFQIV9kWFkTL3M",
      });
      console.log("Token generated", fcmToken);
      setToken(fcmToken); // Save the token in the state

      // Call the API immediately after obtaining the token
      sendTokenToAPI(fcmToken);
    } else if (permission === "denied") {
      alert("You denied the permission");
    }
  }

  async function sendTokenToAPI(fcmToken) {
    try {
      const id=Math.floor(Math.random()*1000);
      const response = await axios.post("http://localhost:4000/api/settoken", {
        token: fcmToken,
        id
      });
      console.log("Response from API", response);
    } catch (error) {
      console.error("Error sending token to API", error);
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return <div>App</div>;
};

export default App;
