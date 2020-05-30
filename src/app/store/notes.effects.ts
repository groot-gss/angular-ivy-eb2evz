// import { Injectable } from "@angular/core";
// import { Actions, Effect, ofType } from "@ngrx/effects";
// import { Observable, timer, of } from "rxjs";
// import { map, tap, mergeMap, catchError } from "rxjs/operators";
// import {
//   AddNote,
//   NotesActionTypes,
//   AddNoteEffect,
//   NoteActions,
// } from "../actions/notes/notes.actions";
// import {
//   ErrorsActionTypes,
//   SetError,
//   ErrorsActions,
// } from "../actions/errors/errors.actions";

// @Injectable()
// export class NoteEffects {
//   constructor(private actions$: Actions) {}

//   @Effect()
//   addTodoAsync$ = this.actions$
//     .ofType<NoteActions>(NotesActionTypes.AddNoteEffect)
//     .pipe(
//       mergeMap((action) =>
//         timer(2000).pipe(
//           tap(() => {
//             throw new Error(`${action.payload.text} failed`);
//           }),
//           //map(() => {
//           //return new AddTodo(action.payload);
//           //}),
//           catchError((error) => of(new SetError({ error })))
//         )
//       )
//     );
// }
