import { MdDeleteForever } from "react-icons/md";
import React from "react";
import "./styles/style.css";
import { nanoid } from "nanoid";

const Note = ({ text, date, id, handleDeleteNote }) => {
  return (
    <div id={nanoid()} className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.6rem"
        />
      </div>
    </div>
  );
};

export default Note;
