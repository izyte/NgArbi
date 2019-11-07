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

  @Input() controlHeight: number = -1; // 'px'
  @Input() rows: number = 1; // 'px'

  @Input() placeHolder: string = "";
  @Input() fieldName: string = "";

  @Input() elementPosition: string = "";
  @Input() prepend: string = "";
  @Input() append: string = "";

  @Input() smallControl: boolean = false;

  @Input() lookupSource: any = null;

  constructor(@Inject(ApiFormAComponent) private par: ApiFormAComponent) {}

  ngOnInit() {
    let row: any = this.par.source;

    this.par.formObject.addControl(
      this.fieldName,
      new FormControl(row[this.fieldName])
    );
    //console.log("Props:",this.label + ": " , this.fieldName + " - " , this.par.formObject);
    if (this.lkpSource) console.log(this.lkpSource);
  }

  get lblFontSize(): Number {
    return this.labelFontSize > 0 ? this.labelFontSize : this.par.labelFontSize;
  }

  get ctrlHeight(): string {
    if (this.isTextArea) return "auto";
    return this.controlHeight > 0
      ? String(this.controlHeight) + "px"
      : this.par.controlHeight > 0
      ? String(this.par.controlHeight) + "px"
      : "auto";
  }

  get helpStyle(): any {
    let pos: string = this.elemPos;
    return {
      height: pos == "RH" ? String(this.ctrlHeight) + "px" : "auto",
      "padding-bottom": pos == "R" ? "1px" : "auto"
    };
  }

  _lblWidth: string;
  get lblWidth(): string {
    let pos: string = this.elemPos;
    if (pos == "R" || pos == "RH") {
      if (!this._lblWidth) {
        this._lblWidth =
          this.labelWidth > 0
            ? String(this.labelWidth) + "px"
            : this.par.labelWidth > 0
            ? String(this.par.labelWidth) + "px"
            : "auto";
      }
      return this._lblWidth;
    } else {
      return "auto";
    }
  }

  _helpWidth: string;
  get hlpWidth(): string {
    if (this.elemPos == "RH") {
      if (!this._helpWidth) {
        this._helpWidth =
          this.helpWidth > 0
            ? String(this.helpWidth) + "px"
            : this.par.helpWidth > 0
            ? String(this.par.helpWidth) + "px"
            : "auto";
      }
      return this._helpWidth;
    } else {
      return "auto";
    }
  }

  get ctrlId(): string {
    return "ctrl_" + this.fieldName;
  }
  get helpId(): string {
    return "help_" + this.fieldName;
  }

  get controlClass(): any {
    return {
      "form-control-sm": this.par.smallControls || this.smallControl
    };
  }

  get controlStyle(): any {
    return {
      "margin-top": "5px"
    };
  }

  get labelClass(): any {
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

  get inputClass(): any {
    let pos: string = this.elemPos;

    return {
      "flex-column": pos.indexOf("C") == 0,
      "mb-1": pos == "R"
    };
  }

  get helpClass(): any {
    let pos: string = this.elemPos;
    return {
      "text-right": pos == "CR" || pos == "CRB"
    };
  }

  get innerInputClass(): any {
    let pos: string = this.elemPos;
    return {
      "flex-column": pos != "RH",
      "flex-row": pos == "RH"
    };
  }

  get innerInputStyle():any{
    if( this.label =="") return {"margin-top": "2px"};
    return {};
  }

  get lkpSource(): any {
    return this.lookupSource;
  }

  get isSelectInput(): boolean {
    return this.lkpSource != null;
  }

  get isTextInput(): boolean {
    return !this.isTextArea && !this.isSelectInput;
  }

  get isTextArea(): boolean {
    return this.rows > 1;
  }

  get elemPos(): string {
    let ret: string = this.elementPosition
      ? this.elementPosition
      : this.par.elementPosition;
    return ret == "C" ? "CL" : ret == "CB" ? "CLB" : ret;
    //return "R";
  }

  get groupClass(): any {
    let pos: string = this.elemPos;
    let bottomLabel: boolean = pos == "CRB" || pos == "CLB";
    return {
      "input-group-sm": this.par.smallControls || this.smallControl,
      "order-1": bottomLabel
    };
  }

  xl(text: string): string {
    return this.elemPos + "_" + text;
  }
}
