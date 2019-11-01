import { Component, OnInit, Input, Host,Inject } from '@angular/core';
import {ApiFormAComponent } from '../api-form-a/api-form-a.component';

@Component({
  selector: 'app-api-input-a',
  templateUrl: './api-input-a.component.html',
  styleUrls: ['./api-input-a.component.scss']
})
export class ApiInputAComponent implements OnInit {

  @Input() label:string="";
  @Input() placeHolder:string="";
  @Input() fieldName:string="";

  constructor(@Inject(ApiFormAComponent) private par: ApiFormAComponent) { }

  ngOnInit() {
    console.log(this.label + ": " + this.par.test + " - " + this.par.source);
    
  }

  xl(text:string):string{
    return  "xl_" + text;
  }

}
