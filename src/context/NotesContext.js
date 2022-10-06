import React from 'react';

const Notes = React.createContext();

export const NotesProvider = Notes.Provider;
export const NotesConsumer = Notes.Consumer;

export default Notes;
