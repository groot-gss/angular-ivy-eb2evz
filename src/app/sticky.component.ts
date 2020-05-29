import { Component, OnInit } from "@angular/core";
//import {MatSidenavModule} from '@angular/material/sidenav';
import { FormGroup, FormBuilder } from "@angular/forms";
//import {MatFormFieldModule} from '@angular/material/form-field';
import { formatDate } from "@angular/common";
@Component({
  selector: "sticky",
  templateUrl: "./sticky.component.html",
  styleUrls: ["./sticky.component.css"],
})
export class StickyComponent {
  showFiller = false;
  noteData: any = [];
  notesForm: FormGroup;

  notesString: string = "";
  constructor(private formBuilder: FormBuilder) {
    // this.initData();
  }

  ngOnInit() {
    console.log("sticky");
    this.notesForm = this.formBuilder.group({
      note: "",
    });
  }
  // initData() {
  //   var note: any = {};
  //   note.className = "btnbg1";
  //   note.Notes = "test1";
  //   note.Date = formatDate(new Date(), "yyyy/MM/dd", "en");
  //   this.noteData.push(note);

  //   note.className = "btnbg2";
  //   note.Notes = "test2";
  //   note.Date = formatDate(new Date(), "yyyy/MM/dd", "en");
  //   this.noteData.push(note);
  // }

  addNote(event, cssClass) {
    console.log(
      "event,class,noteData",
      formatDate(new Date(), "yyyy/MM/dd", "en"),
      cssClass,
      this.notesString
    );
    var note: any = {};
    note.className = cssClass;
    note.Notes = this.notesString;
    note.Date = formatDate(new Date(), "yyyy/MM/dd", "en");
    this.noteData.push(JSON.stringify(note));

    // this.notesString = "";
  }
}
