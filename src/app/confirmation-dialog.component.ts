import { Component, Inject } from "@angular/core";
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { ViewEncapsulation } from "@angular/core";
import { NotesState } from "./store";
import { Store } from "@ngrx/store";
import * as fromNotes from "../app/actions/notes/notes.actions";
import { Note } from "./actions/notes/notes.model";

@Component({
  selector: "confirmation-dialog",
  templateUrl: "confirmation-dialog.html",
  styleUrls: ["./stickynotes.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmationDialog {
  message: string = "Are you sure?";
  id: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _store: Store<NotesState>,
    private dialogRef: MatDialogRef<ConfirmationDialog>
  ) {
    if (data) {
      this.message = data.message || this.message;
      this.id = data.id;
    }
  }

  onConfirmClick(): void {
    this._store.dispatch(new fromNotes.DeleteNote({ id: this.id }));
    this.dialogRef.close(true);
  }
  updateNote(event, cssClass) {
    this._store.dispatch(
      new fromNotes.UpdateNote(<Note>{
        ClassName: cssClass,

        Notes: this.message,

        id: this.id,
      })
    );
    this.dialogRef.close(true);
  }
}
