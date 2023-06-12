import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const componentDidMount = async (note, id) => {
  // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ content: note }),
  };
  const response = await fetch(
    `http://localhost:8000/add`,
    requestOptions
  );
  const data = await response.json();
  return data;
};

function AddNote() {
  const [code, setCode] = useState(0);
  const [inputs, setInputs] = useState({});
  const params = useParams();
  const id = params.id;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await componentDidMount(inputs.note, id);
    if (data.code == 200) setCode(data.code);
  };
  if (code == 200)
    return (
      <div>
        <h2>Note added successfully </h2>
        <Link to={`/Notes`}>
          <h2> Click here to view all notes </h2>
        </Link>
      </div>
    );
  else {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your Note:
          <input
            type="text"
            name="note"
            value={inputs.note}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default AddNote;
