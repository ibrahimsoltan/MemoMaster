import "./App.css";
import Notes from "./notes";
import Note from "./note";
import SignInForm from "./signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./signup";
import Home from "./home";
import Signout from "./signout";
import AddNote from "./addNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/notes/:id" element={<Notes />} />
        <Route path="/addnote/:id" element={<AddNote />} />
        <Route path="/note/:id" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
