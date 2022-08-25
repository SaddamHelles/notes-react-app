import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import { nanoid } from "nanoid";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div id={"s" + nanoid} className="notes-list">
      {notes.map((note) => (
        <Note
          text={note.text}
          date={note.date}
          id={note.id}
          key={"id-" + note.id}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
