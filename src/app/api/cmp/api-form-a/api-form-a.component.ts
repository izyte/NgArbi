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
  get sourceTable():any{return this._sourceTable}

  /****************************************************************************
   this switch is necessary to prevent update to the current record when a global
   field values updates are being perfomed (e.g. Scatter() method)
   ****************************************************************************/
  public suspendControlChangeEvent:boolean=false;

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

  }

  public Scatter(){
    /******************************************************************************
     * Sets the values of form controls to the equivalent field of the source
     ******************************************************************************/

    let patchValues:any={};
    let ctrl:AbstractControl;

    this.suspendControlChangeEvent=true;   // suspend control change event    

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

    this.formObject.patchValue(patchValues);

    this.suspendControlChangeEvent=false;  // resume control change event

  }

}

