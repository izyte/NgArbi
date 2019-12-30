import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-api-form-a',
  templateUrl: './api-form-a.component.html',
  styleUrls: ['./api-form-a.component.scss']
})
export class ApiFormAComponent implements OnInit {

  @Input() source:any={};
  @Input() formObject:FormGroup=null;

  @Input() smallControls:boolean=false;
  @Input() readOnly:boolean=false;

  // this causes values of form controls immediately
  // cascaded to the source object
  @Input() bindSource:boolean=true;
  
  @Input() labelFontSize: number=1;
  @Input() labelWidth: number=-1;

  @Input() controlFontSize: number=1;
  @Input() controlHeight: number=-1;         // 'px'

  @Input() helpWidth: number=-1;

  @Input() elementPosition:string="C";

  @Input() test:string="";

  @Output() change = new EventEmitter<any>();

  public testPublic:string = "the quick";

  constructor() { 

    //this.testPublic = this.test;

  }

  ngOnInit() {
    //console.log(this.formObject)
    console.log("Init Form-A")
  }

  Scatter(){
    console.log("Scattering values to form controls!")
  }


}

