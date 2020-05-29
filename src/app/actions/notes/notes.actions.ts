import { Action } from "@ngrx/store";
import { Note } from "./notes.model";

export enum NotesActionTypes {
  AddNote = "[Note] Add Note",
  AddNoteEffect = "[Note] Add Note Effect",
  AddNoteEffectSuccess = "[Note] Add Note Effect Success",
  AddNoteEffectFailure = "[Note] Add Note Effect Failure",
  ToggleNote = "[Note] Toggle Note",
  DeleteNote = "[Note] Delete Note",
}

let currentId = 1;

export class AddNote implements Action {
  readonly type = NotesActionTypes.AddNote;
  id: number;

  constructor(public payload: Note) {
    payload.id = currentId++;
  }
}

export class AddNoteEffect implements Action {
  readonly type = NotesActionTypes.AddNoteEffect;

  constructor(public payload: Note) {
    payload.id = currentId++;
  }
}

export class AddNoteEffectSuccess implements Action {
  readonly type = NotesActionTypes.AddNoteEffectSuccess;
}

export class AddNoteEffectFailure implements Action {
  readonly type = NotesActionTypes.AddNoteEffectFailure;
}

export class ToggleNote implements Action {
  readonly type = NotesActionTypes.ToggleNote;

  constructor(public payload: { id: number }) {}
}

export class DeleteNote implements Action {
  readonly type = NotesActionTypes.DeleteNote;

  constructor(public payload: { id: number }) {}
}

export type NoteActions =
  | AddNote
  | ToggleNote
  | DeleteNote
  | AddNoteEffect
  | AddNoteEffectSuccess
  | AddNoteEffectFailure;
