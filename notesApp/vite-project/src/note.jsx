import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Note() {
  const [note, setNote] = useState();
  const params = useParams();

  console.log(note);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/note/${params.id}`, {
      credentials: "include",
    });
    const data = await response.json();
    setNote(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {note === undefined && "Loading"}
      <Link to="/notes/">Back</Link>
      <h1>{note?.content}</h1>
    </div>
  );
}
export default Note;
