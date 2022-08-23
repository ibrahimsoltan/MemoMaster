import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notes from "./notes";

const signUp = async (inputs) => {
  // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(inputs),
  };
  const response = await fetch("http://localhost:8000/signup", requestOptions);
  const data = await response.json();
  return data;
};

function SignUpForm() {
  const [inputs, setInputs] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setID] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await signUp(inputs);
    const newid = data.data._id;
    if (data.code == 200) setLoggedIn(true);
    setID(newid);
  };

  if (loggedIn) {
    return <Link to={`/notes/${id}`}> View my Notes</Link>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label>
          Enter your name:
          <input
            type="text"
            name="userName"
            value={inputs.userName || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter A password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default SignUpForm;
