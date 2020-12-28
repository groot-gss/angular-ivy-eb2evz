import { Component, Input } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatDialog } from "@angular/material";
import { Store, Action, State, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Note } from "../app/actions/notes/notes.model";
import { BaseError } from "../app/actions/errors/errors.model";
import * as fromNotes from "../app/actions/notes/notes.actions";
import * as fromFilter from "../app/actions/filter/filter.actions";
import { NotesState, getNotes } from "./store";
import { ConfirmationDialog } from "./confirmation-dialog.component";

//import {MatFormFieldModule} from '@angular/material/form-field';
import { formatDate } from "@angular/common";
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
  notesString: string = "";
  editvalue;
  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<NotesState>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getNotes();
    this.notesForm = this.formBuilder.group({
      note: "",
    });
  }
  getNotes() {
    this._store.select(getNotes).subscribe((o) => {
      return (this.noteData = o);
    });
  }
  filter(cssClass) {
    console.log("cssClass", cssClass);
    if (cssClass === "") this.getNotes();
    else
      this._store.select(getNotes).subscribe((o) => {
        return (this.noteData = o.filter((o) => o.ClassName == cssClass));
      });
  }
  addNote(event, cssClass) {
    this._store.dispatch(
      new fromNotes.AddNote(<Note>{
        ClassName: cssClass,
        Date: formatDate(new Date(), "yyyy/MM/dd", "en"),
        Notes: this.notesString,
        deleted: false,
        id: this.noteData.length + 1,
      })
    );
    this.getNotes();
  }

  editNote(notevalue) {
    var data = this.noteData;
    this.editvalue = data.find((o) => o.id == notevalue.id);
    this.openAlertDialog(
      this.editvalue ? this.editvalue.Notes : "",
      this.editvalue.id
    );
  }

  openAlertDialog(message, id) {
    this.dialog.open(ConfirmationDialog, {
      data: {
        message: message,
        id: id,
      },
    });
  }
}
