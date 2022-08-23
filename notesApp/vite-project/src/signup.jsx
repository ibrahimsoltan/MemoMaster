import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notes from "./notes";

const componentDidMount = async (name, pass) => {
  // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ userName: name, password: pass }),
  };
  console.log(requestOptions);
  const response = await fetch("http://localhost:8000/signup", requestOptions);
  const data = await response.json();
  console.log(data.code);
  console.log(data);
  return data;
};

function SignUpForm() {
  const [inputs, setInputs] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setID] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(inputs);
    const data = await componentDidMount(inputs.username, inputs.pass);
    const newid = data.data._id;
    if (data.code == 200) setLoggedIn(true);
    setID(newid);
  };

  if (loggedIn) {
    console.log(id);
    return <Link to={`/notes/${id}`}> View my Notes</Link>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter A password:
          <input
            type="number"
            name="pass"
            value={inputs.pass || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default SignUpForm;
