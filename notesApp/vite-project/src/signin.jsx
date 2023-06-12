import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  useEffect(() => {
    if (loggedIn) {
      navigate(`/notes`);
    }
  }, [loggedIn]);


   
    return (<form className="auth-form" onSubmit={handleSubmit}>
    <h1 className="auth-form-title">Sign In</h1>
    <div className="form-group">
      <label htmlFor="userName">Enter your name:</label>
      <input
        type="text"
        id="userName"
        name="userName"
        value={inputs.userName || ""}
        onChange={handleChange}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Enter your Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={inputs.password || ""}
        onChange={handleChange}
        className="form-input"
      />
    </div>
    <button type="submit" className="submit-button">Sign In</button>
  </form>
    );  
  }


export default SignInForm;
