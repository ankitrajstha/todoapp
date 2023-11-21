import { useState } from "react";
import "./app.css";

function App() {
  const [todo, setTodo] = useState([]);
  function handleAddNote(note) {
    setTodo((notes) => [...notes, note]);
  }

  return (
    <div>
      <Header />
      <Form onAddNote={handleAddNote} />
      <Notes todo={todo} />
    </div>
  );
}
function Header() {
  return <h1>Todo Note App</h1>;
}
function Form({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) return;
    const newNote = {
      title,
      description,
    };
    onAddNote(newNote);
    setTitle("");
    setDescription("");
  }

  return (
    <form className="add-note" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      />
      <button>Add</button>
    </form>
  );
}

function Notes({ todo }) {
  return (
    <ul>
      {todo.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  );
}
function Note({ note }) {
  return (
    <li>
      <p>
        <strong> {note.title}</strong>
      </p>
      <p>{note.description}</p>
    </li>
  );
}
export default App;
