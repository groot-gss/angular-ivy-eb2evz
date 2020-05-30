import { createSelector } from "@ngrx/store";
import { Note } from "../../actions/notes/notes.model";
import { NotesState } from "src/app/store";

export interface AppState {
  notes: Note[];
}

export const selectNotes = (state: NotesState) => state.notes;
export const selectAllNotes = createSelector(selectNotes, (notes) => {
  console.log("notes", notes);
  return notes;
});
