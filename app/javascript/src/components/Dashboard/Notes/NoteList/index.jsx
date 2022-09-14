import React from "react";

import { NoteCard } from "./NoteCard";

const NotesList = ({ notes, handelDeleteClick, handleEditClick }) => (
  <>
    {notes.map(note => (
      <NoteCard
        handelDeleteClick={handelDeleteClick}
        handleEditClick={handleEditClick}
        key={note.id}
        note={note}
      />
    ))}
  </>
);

export default NotesList;
