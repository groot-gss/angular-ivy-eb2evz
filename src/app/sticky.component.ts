import { Component, Input } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'sticky',
  templateUrl: './sticky.component.html',
 styleUrls: [ './sticky.component.css' ]
})
export class StickyComponent  {
 showFiller = false;
  noteData: any = {};
 notesForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.notesForm = this.formBuilder.group({
      note: ''
     
    })
  }
valuechange(newValue) {
  this.noteData['note'] = newValue;
  console.log(newValue)
}
}
