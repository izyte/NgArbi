import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  @Input() labelFontSize:Number=1;
  @Input() labelWidth:Number=-1;

  @Input() controlHeight:number=-1;         // 'px'

  @Input() helpWidth:Number=-1;

  @Input() elementPosition:string="C";

  @Input() test:string="";

  public testPublic:string = "the quick";

  constructor() { 

    //this.testPublic = this.test;

  }

  ngOnInit() {
    console.log(this.formObject)
  }

}
