import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState();
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");
  const [unit, setUnit] = useState("");
  const [coord, setCoord] = useState("");
  const [error, setError] = useState("");

  const check = (e) => {
    e.preventDefault();
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].state === state &&
        data[i].lga === lga &&
        data[i].ward === ward &&
        data[i].unit === unit
      ) {
        setCoord(`${data[i].latitude},${data[i].longitude}`);
        setState("");
        setLga("");
        setWard("");
        setUnit("");
      }
      else{
        setTimeout(() => {
          setError("Please Use Valid Code");
        }, 2000);
        setTimeout(() => {
          window.location.reload();
          setError("");
        }, 3000);
      }
    }
    setState("");
    setLga("");
    setWard("");
    setUnit("");
  };
  const urll = "https://ojpwallet.herokuapp.com/staff"
  // const url = "http://localhost:3001/voter";
  useEffect(() => {
    const info = async () => {
      const come = await axios.get(urll);
      setData(come.data);
      // console.log(come.data.address);
    };
    info();
  }, []);

  if (coord) {
    window.location.href = `https://earth.google.com/web/search/${coord}`;
  }

  return (<>
    <div className="page">
      <h4 className="example">Example: 27/20/10/005</h4>
      <form className="form" onSubmit={check}>
        <div className="divflex">
          <input
            autoFocus
            placeholder="State(27/*/*/*)"
            type="text"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <h3>27</h3>
        </div>
        <div className="divflex">
          <input
            placeholder="LGA(27/20/*/*)"
            type="text"
            value={lga}
            onChange={(e) => {
              setLga(e.target.value);
            }}
          />
          <h3>20</h3>
        </div>
        <div className="divflex">
          <input
            placeholder="Ward(27/20/10/*)"
            type="text"
            value={ward}
            onChange={(e) => {
              setWard(e.target.value);
            }}
          />
          <h3>10</h3>
        </div>
        <div className="divflex">
          <input
            placeholder="Unit(27/20/10/005)"
            type="text"
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
            }}
          />
          <h3>005</h3>
        </div>
        <div>
          <h4>{error}</h4>
        </div>
        <button type="submit">PU Location</button>
      </form>
    </div>
        <div className="flow">
          <div></div>
        <h5 className="foot">
        Contact OJP @ 08061190819
        </h5>
        </div>
    </>
  );
};

export default Page;
