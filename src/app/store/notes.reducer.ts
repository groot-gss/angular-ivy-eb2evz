import { Note, Notes } from "../actions/notes/notes.model";
import { NoteActions, NotesActionTypes } from "../actions/notes/notes.actions";
import { formatDate } from "@angular/common";
export const initialState: Array<Note> = [
  {
    id: 1,
    Notes: "Sample 1",
    deleted: false,
    ClassName: "btnbg1",
    Date: formatDate(new Date(), "yyyy/MM/dd", "en"),
  },
  {
    id: 2,
    Notes: "Sample 2",
    deleted: false,
    ClassName: "btnbg2",
    Date: formatDate(new Date(), "yyyy/MM/dd", "en"),
  },
];
export const reducer = (
  state = initialState,
  action: NoteActions
): Array<Note> => {
  switch (action.type) {
    case NotesActionTypes.AddNote:
      return state.concat(<Note>{
        id: action.payload.id,
        Notes: action.payload.Notes,
        deleted: action.payload.deleted,
        ClassName: action.payload.ClassName,
        Date: action.payload.Date,
      });
    case NotesActionTypes.ToggleNote:
      return toggleNote(state, action);
    case NotesActionTypes.DeleteNote:
      return state.filter((Note) => Note.id != action.payload.id);
    case NotesActionTypes.UpdateNote:
      let index = state.map((note) => note.id).indexOf(action.payload.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          Notes: action.payload.Notes,
          ClassName: action.payload.ClassName,
        }),
        ...state.slice(index + 1),
      ];
    default:
      return state;
  }
};

function toggleNote(Notes, action) {
  //map returns new array
  return Notes.map((Note) => {
    //skip other items
    if (Note.id !== action.payload.id) return Note;
    //toggle
    return {
      id: Note.id,
      text: Note.text,
      completed: !Note.completed,
    };
  });
}
