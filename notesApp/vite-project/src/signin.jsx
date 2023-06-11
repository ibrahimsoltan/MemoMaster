import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const componentDidMount = async (inputs) => {
  // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(inputs),
  };
  const response = await fetch("http://localhost:8000/signin", requestOptions);
  const data = await response.json();
  return data;
};



function SignInForm() {
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
    const data = await componentDidMount(inputs);
    const newid = data.data._id;
    if (data.code == 200) setLoggedIn(true);
    setID(newid);
  };

  if (loggedIn) {
    return <Link to={`/notes/${id}`}> View my Notes</Link>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
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
          Enter your Password:
          <input
            type="text"
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

export default SignInForm;
