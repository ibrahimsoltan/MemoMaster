import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);
  const params = useParams();
  const id = params.id;
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/notes/`, {
      credentials: "include",
    });
    const data = await response.json();
    setNotes(data.Notes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <nav>
        <div class="nav-item">
          <Link to="/">
            <button>Sign out</button>
          </Link>
        </div>
        <div class="nav-item">
          <Link to={`/addNote/`}>
            <button>Add New Note</button>
          </Link>
        </div>
      </nav>
      
      <div class="notes-container">
        {notes.map((note, index) => (
          <div key={note._id} class={`note-item note-color-${index % 5}`}>
            <h3>{note.content}</h3>
            <p>{note.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
