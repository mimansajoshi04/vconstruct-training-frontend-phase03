import { Outlet } from "react-router-dom";
import "./Form.css";

function validateFormData(formData) {
  if (formData.username.trim().length < 3) return false;
  if (formData.password.trim().length < 6) return false;
  // validate email
  return true;
}

import { useState } from "react";
export default function Form({ form }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const disabled = !validateFormData(formData);

  const changeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <main>
      <form>
        <fieldset>
          <legend>USER DETAILS</legend>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            onChange={(e) => changeFormData(e)}
            required
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => changeFormData(e)}
            required
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => changeFormData(e)}
            required
          />{" "}
          <button
            type="button"
            onClick={() => {
              let type = document.getElementById("password").type;
              if (type === "text")
                document.getElementById("password").type = "password";
              else document.getElementById("password").type = "text";
            }}
          >
            show
          </button>
          <br />
        </fieldset>
        <fieldset>
          <legend>SUBMIT</legend>
          <button
            type="submit"
            style={{ backgroundColor: disabled ? "gray" : "green" }}
            disabled
          >
            Submit
          </button>
          <button type="reset" style={{ backgroundColor: "red" }}>
            Reset
          </button>
        </fieldset>
      </form>
    </main>
  );
}
