import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "20/08/2002",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "02/09/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "21/07/2021",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: "id-" + nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    console.log("Text Note: ", text);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const effectRan = useRef(false);
  useEffect(() => {
    (async () => {
      if (!effectRan.current) {
        const savedNotes = await JSON.parse(
          localStorage.getItem("react-notes-app")
        );
        console.log("object savedNotes: ", savedNotes);
        if (savedNotes) {
          setNotes(savedNotes);
        }
      }
    })();

    return () => {
      console.log("Unmounted");
      effectRan.current = true;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleDeleteNote={deleteNote}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
};

export default App;
