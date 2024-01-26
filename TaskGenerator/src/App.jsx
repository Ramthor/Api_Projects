import React, { useState, useEffect } from "react";
import axios from "axios";

import Loading from "./loading";
export default function App() {
  let [data, setData] = useState("Learn origami");

  let getData = () => {
    setData("");
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Getting Bored? </h1>
      <div className="myDiv">
        {data.activity ? (
          <>
            <h1>{data.activity}</h1>
            <p> {data.type}</p>
          </>
        ) : (
          <center>
            <Loading />
          </center>
        )}
      </div>
      <button onClick={getData}>Get Task</button>
    </div>
  );
}
