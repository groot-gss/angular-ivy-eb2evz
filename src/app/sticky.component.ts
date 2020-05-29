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
 noticeForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.noticeForm = this.formBuilder.group({
      notice: ['']
     
    })
  }

}
