import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SecondCodeCheck() {
  const [code1, setCode1] = useState();
  const navigate = useNavigate();
  const [expandForm, setExpandForm] = useState(false);

  function handleCode1(e) {
    setCode1(e.target.value);
  }

  function authenticate(e) {
    console.log(code1);

    if (code1 === "expecttheunexpected") {
      navigate("/results");
    } else {
      setExpandForm(true);
    }
    e.preventDefault();
  }
  return (
    <div>
      <strong><a href="https://drive.google.com/drive/folders/1IRzD9rLdqBdGDX-UmfHYMD9smHM2V5ox?usp=sharing" target="_blank" rel="noopener noreferrer">
        Click here for your next clue
      </a></strong>
      <form id="form1" onSubmit={authenticate}>
        <label htmlFor="fcode">Enter Code 1</label>
        <br />
        <input
          onChange={handleCode1}
          name="fcode"
          type="text"
          id="fcode"
          value={code1}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {expandForm === true ? <h1>Try Again</h1> : null}
    </div>
  );
}
