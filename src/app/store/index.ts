import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";

import { Notes, Note } from "../actions/notes/notes.model";
import * as notes from "../store/notes.reducer";
import { select } from "@ngrx/store";
import { map } from "rxjs/operators";
import * as errors from "../actions/errors/errors.reducer";
import { Errors } from "../actions/errors/errors.model";
import * as currentFilter from "../actions/filter/filter.reducer";
import { Filter } from "../actions/filter/filter.model";
export interface NotesState extends Notes, Filter, Errors {}

export const reducers: ActionReducerMap<NotesState> = {
  notes: notes.reducer,
  errors: errors.reducer,
  currentFilter: currentFilter.reducer,
};

export const metaReducers: MetaReducer<NotesState>[] = [];

export const selectNotes = (state: NotesState) => state.notes;

export const getFilteredTodos = createSelector(selectNotes, getVisibleNotes);

function getVisibleNotes(notes: Array<Note>, filter: string) {
  debugger;
  if (!notes || !filter) return;
  let t = notes.slice().reverse();
  switch (filter) {
    case "SHOW_ACTIVE":
      return t.filter((t) => !t.deleted);
    case "SHOW_DELETED":
      return t.filter((t) => t.deleted);
    case "SHOW_ALL":
    default:
      return t;
  }
}

export const getNotes = (s) => s.notes;
export const getCurrentFilter = (s) => s.currentFilter;
export const getErrors = (s) => s.errors;
