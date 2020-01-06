import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-api-form-a',
  templateUrl: './api-form-a.component.html',
  styleUrls: ['./api-form-a.component.scss']
})
export class ApiFormAComponent implements OnInit {

  private _source:any=null;
  @Input() set source(value: any) {

    this._source = value;

    if(this._source!=null && this._source!=undefined && this._sourceTable==null){
      // assign source table object to private property _sourceTable
      this._sourceTable = this._source.parentTable;
    }    

    // set values of form controls to the new record's values
    this.Scatter();

  }

  get source(): any {

      return this._source;
  }

  private _sourceTable:any=null;
  @Input() set sourceTable(value:any){
    if(value==null || value==undefined) return;
    this._sourceTable = value;
  }

  public suspendControlChangeEvent:boolean=false;

  get sourceTable():any{return this._sourceTable}


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

  public Scatter(){
    /******************************************************************************
     * Sets the values of form controls to the equivalent field of the source
     ******************************************************************************/

    let patchValues:any={};
    let ctrl:AbstractControl;

    for (const field in this.formObject.controls) { // 'field' is a string
      // patch value of each
      ctrl = this.formObject.get(field);
      if(this._source){
        if(ctrl.disabled)ctrl.enable();
        patchValues[field] = this.source[field];
      }else{
        if(!ctrl.disabled)ctrl.disable();
        patchValues[field] = null;
      }
    }    

    // suspend control change event to prevent data update when no current record
    if(!this._source)this.suspendControlChangeEvent=true;  

    this.formObject.patchValue(patchValues);

    if(!this._source)this.suspendControlChangeEvent=false;  // resume control change event

  }

}

