import { Component, Input } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

import { Store, Action, State, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { combineReducers, ActionReducer } from "@ngrx/store";
import { Note } from "../app/actions/notes/notes.model";
import { BaseError } from "../app/actions/errors/errors.model";
import * as fromNotes from "../app/actions/notes/notes.actions";
import * as fromFilter from "../app/actions/filter/filter.actions";
import { NotesState, getNotes } from "./store";

@Component({
  selector: "sticky",
  templateUrl: "./sticky.component.html",
  styleUrls: ["./sticky.component.css"],
})
export class StickyComponent {
  showFiller = false;
  noteData: any = {};
  notesForm: FormGroup;
  currentFilter;
  notes: Observable<Note>;

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<NotesState>
  ) {}

  ngOnInit() {
    this._store.select(getNotes).subscribe((o) => {
      return (this.noteData = o);
    });
    console.log("this.notes", this.notes);
    this.notesForm = this.formBuilder.group({
      note: "",
    });
  }
  valuechange(newValue) {
    this.noteData["note"] = newValue;
    console.log(newValue);
  }
}
