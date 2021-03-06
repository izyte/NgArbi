import { Subscription } from 'rxjs';
import { Component, OnInit, Input, Host, Inject } from "@angular/core";
import { ApiFormAComponent } from "../api-form-a/api-form-a.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-api-input-a",
  templateUrl: "./api-input-a.component.html",
  styleUrls: ["./api-input-a.component.scss"]
})
export class ApiInputAComponent implements OnInit {
  @Input() label: string = "";
  @Input() labelFontSize: number = -1; // 'em'
  @Input() labelWidth: number = -1; // 'px'
  @Input() helpWidth: number = -1; // 'px'

  @Input() controlFontSize: number;
  @Input() controlHeight: number = -1; // 'px'
  @Input() rows: number = 1; // 'px'

  @Input() placeHolder: string = "";
  @Input() fieldName: string = "";

  @Input() elementPosition: string = "";
  @Input() prepend: string = "";
  @Input() append: string = "";

  @Input() smallControl: boolean = false;

  @Input() lookupSource: any = null;
  @Input() radioSource: any = null;

  @Input() readOnly: boolean;

  constructor(@Inject(ApiFormAComponent) public par: ApiFormAComponent) {}

  get ctrlId(): string {return  "ctrl_" + this.fieldName;}
  get helpId(): string {return "help_" + this.fieldName;}

  helpStyle: any;
  lblFontSize: number;
  ctrlHeight: string;
  isReadOnly: boolean;
  lblWidth: string;
  hlpWidth: string;

  controlClass:any;
  controlStyle:any;
  labelClass:any;
  inputClass:any;
  helpClass:any;
  innerInputClass:any;
  innerInputStyle:any;
  groupClass:any;

  ngOnInit() {
    let row: any = this.par.source;

    this.ctrlHeight = this._ctrlHeight;
    this.hlpWidth = this._hlpWidth;
    this.helpStyle = this._helpStyle;
    this.lblFontSize = this._lblFontSize;
    this.isReadOnly = this._isReadOnly;
    this.lblWidth = this._lblWidth;

    this.controlClass=this._controlClass;
    this.controlStyle=this._controlStyle;
    this.labelClass=this._labelClass;
    this.inputClass = this._inputClass;
    this.helpClass = this._helpClass;

    this.innerInputClass=this._innerInputClass;
    this.innerInputStyle=this._innerInputStyle;

    this.groupClass=this._groupClass;

    if(!this.controlFontSize) this.controlFontSize = this.par.controlFontSize;

    this.par.formObject.addControl(
      this.fieldName,
      new FormControl(row[this.fieldName])
    );



    //console.log("Props:",this.label + ": " , this.fieldName + " - " , this.par.formObject);
    if (this.lkpSource) console.log("LookupSource:",this.lkpSource);
    if (this.radSource) console.log("radioSource:",
      "value=",
      this.par.source[this.fieldName],
      this.par.source,
      this.isRadioInput,this.radSource);
    

    this.onChanges();


  }

  private subs:Subscription=null;
  onChanges(): void {
    /**
     * Event called when change in value is triggered on the client UI
     */

     if(this.subs){
       this.subs.unsubscribe();
     }else{
     }
    
     this.subs = this.par.formObject.get(this.fieldName).valueChanges.subscribe(val => {
      if(this.par.change && !this.par.suspendControlChangeEvent){

        let name:string=this.fieldName;
        let ctrl = this.par.formObject.get(this.fieldName);

        // if source is not null and bindSource is true,
        // set the value of the source field the same as the 
        // current value of the control
        if(this.par.bindSource && this.par.source)this.par.source[name] = ctrl.value;

        // triger function located in the form's instatiating component
        // and pass control object plus other parameters...
        this.par.change.emit({ "name" : name,"ctrl" : ctrl});
      }
    });
  }  

  get _lblFontSize(): number {
    return this.labelFontSize > 0 ? this.labelFontSize : this.par.labelFontSize;
  }

  get _ctrlHeight(): string {
    if (this.isTextArea) return "auto";
    return this.controlHeight > 0
      ? String(this.controlHeight) + "px"
      : this.par.controlHeight > 0
      ? String(this.par.controlHeight) + "px"
      : "auto";
  }

  get _isReadOnly(): boolean {
    //if(this.par.readOnly) return true;
    return this.readOnly == undefined ? this.par.readOnly : this.readOnly;
  }

  //helpStyle:any=this._helpStyle;
  get _helpStyle(): any {
    let pos: string = this.elemPos;
    return {
      height: pos == "RH" ? this.ctrlHeight : "auto",
      width: pos == "RH" ? this.hlpWidth : "auto",
      "padding-bottom": pos == "R" ? "1px" : "auto"
    };
  }

  get _lblWidth(): string {
    let pos: string = this.elemPos;
    if (pos == "R" || pos == "RH") {
      return this.labelWidth > 0
        ? String(this.labelWidth) + "px"
        : this.par.labelWidth > 0
        ? String(this.par.labelWidth) + "px"
        : "auto";
    } else {
      return "auto";
    }
  }

  get _hlpWidth(): string {
    if (this.elemPos == "RH") {
      return this.helpWidth > 0
        ? String(this.helpWidth) + "px"
        : this.par.helpWidth > 0
        ? String(this.par.helpWidth) + "px"
        : "auto";
    } else {
      return "auto";
    }
  }

  get _controlClass(): any {
    return {
      "form-control-sm": this.par.smallControls || this.smallControl
    };
  }

  get _controlStyle(): any {
    return {
      "margin-top": "5px"
    };
  }

  get _labelClass(): any {
    /*
    arrangement
    C | CL:
      Label
      Input
      Help
    
    CR:
      -> Label
      Input
      Help

    CB | CLB:
      Help
      Input
      Label

    CRB:
      -> Help
      Input
      -> Label

    R:  flex row
      Label Input
      Help
     */
    let pos: string = this.elemPos;

    let bottomLabel: boolean = pos == "CRB" || pos == "CLB";
    return {
      "pt-1": false,
      "pb-1": false,
      "order-1": bottomLabel,
      "mb-1": bottomLabel,
      "mt-1": pos == "CL" || pos == "R",
      "text-right": pos == "CRB" || pos == "CR"
    };
  }

  get _inputClass(): any {
    let pos: string = this.elemPos;

    return {
      "flex-column": pos.indexOf("C") == 0,
      "mb-1": pos == "R"
    };
  }

  get _helpClass(): any {
    let pos: string = this.elemPos;
    return {
      "text-right": pos == "CR" || pos == "CRB"
    };
  }

  get _innerInputClass(): any {
    let pos: string = this.elemPos;
    return {
      "flex-column": pos != "RH",
      "flex-row": pos == "RH"
    };
  }

  get _innerInputStyle(): any {
    if (this.label == "") return { "margin-top": "2px" };
    return {};
  }

  get lkpSource(): any {
    return this.lookupSource;
  }

  get radSource(): any {
    return this.radioSource;
  }

  get isSelectInput(): boolean {
    return this.lkpSource != null;
  }

  get isRadioInput(): boolean {
    return this.radioSource != null;
  }
  

  get isTextInput(): boolean {
    return !this.isTextArea && !this.isSelectInput && !this.isRadioInput;
  }

  get isTextArea(): boolean {
    return this.rows > 1;
  }

  get helpFontSize(): number{
    //return this.lblFontSize * 0.7;
     return Number(this.lblFontSize) * 0.7;
  }

  get elemPos(): string {
    let ret: string = this.elementPosition
      ? this.elementPosition
      : this.par.elementPosition;
    return ret == "C" ? "CL" : ret == "CB" ? "CLB" : ret;
    //return "R";
  }

  get _groupClass(): any {
    let pos: string = this.elemPos;
    let bottomLabel: boolean = pos == "CRB" || pos == "CLB";
    return {
      "input-group-sm": this.par.smallControls || this.smallControl,
      "order-1": bottomLabel
    };
  }

  xl(text: string): string {
    //return this.lblFontSize + "_" + this._lblWidth + "_" + this.elemPos + "_" + text;
    return text;
  }
}
