import { useEffect, useState } from "react";
import { Link ,useParams} from "react-router-dom";


function Notes() {
  const [notes, setNotes] = useState([]);
  const params = useParams();
  const id = params.id
  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/notes/${params.id}`, {credentials: 'include'})
    const data = await response.json()
    setNotes(data.Notes)
    console.log(data.Notes)
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div>
      <h1>Notes </h1>
      <h3>A Note taking Site</h3>
      <ul>
        <Link to="/">
          <button>Sign out</button>
        </Link>
        </ul>
      <Link to={`/addNote/${id}`}><h2> Click here to add a new note </h2></Link>
      <div class="site-title">
    </div>
      <h1>Your Notes</h1>
      {notes.map((note) => (
          <div key={note._id}> 
          <h3>{note.content}</h3>
          <p>{note.date}</p>
          </div>

      ))}
    </div>
  );
}

export default Notes;