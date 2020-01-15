import { NavBarComponent } from './../../../cmp/nav-bar/nav-bar.component';
import { AppCommonMethodsService } from "./../../svc/app-common-methods.service";
import { AppCommonMethods } from "./../../svc/app-common.methods";
import { Component, OnInit, ViewChild, ElementRef, Input, HostListener, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-api-table-a",
  templateUrl: "./api-table-a.component.html",
  styleUrls: ["./api-table-a.component.scss"]
})
export class ApiTableAComponent implements OnInit, AfterViewInit {

  @Input() tableId:number = 0;
  @Input() tableWidth:number = 1024;
  @Input() tableHeight:number = 500;

  @Input() tableStriped:boolean = true;
  @Input() tableBordered:boolean = true;

  @ViewChild("tableContainer", { static: true, read: ElementRef }) tblCont: ElementRef<any>;
  @ViewChild("dragHandle", { static: true, read: ElementRef }) dragHandle: ElementRef<any>;
  

  @HostListener('window:resize') newColumnWidths() {
    //console.log("tblCont (" + this.tableId + "): ",this.tblCont);
    let tmp:Array<number> = this._colWidths;
  }

  leftCol:any=null;
  currSep:any=null;
  rightCol:any=null;

  showMask:boolean = false;
  debugStatus:string = "Sample debug text";
  colWidths:Array<number>=[];

  constructor(public appCommon: AppCommonMethodsService) {

  }

  get tableOptions() {
    return {
      columns: [
        { heading: "Item No.", width:50 , data: "field_1", type: null,noFilter:false },
        { heading: "Column 2 Column 2 Column 2 Column 2", width:200, data: "field_2", type: null },
        { heading: "Column 3 Column 3 Column 3 Column 3", data: "field_3", type: null },
        { heading: "Column 4", data: "field_4", type: null },
        { heading: "Column 5", data: "field_5", type: null }
      ]
    };
  }

  
  get tableHeader():any{
    return this.tblCont.nativeElement.querySelector('.thead');
  }

  get handleTop():number{
    return this.tableHeader.offsetTop+2;
  }

  handleLeft:number = 0;
  /*
  get handleLeft():number{
    if(!this.currSep) return 0;
    return this.currSep.offsetLeft - this.handleWidth/2;
  }*/
  get handleHeight():number{
    return this.tableHeader.offsetHeight-4;
  }
  get handleWidth():number{
    return 3;
  }

  get colItems():Array<any>{
    return this.tblCont.nativeElement.querySelectorAll('.coltemp ul li')
  }
  private get _colWidths():Array<number>{

    let cols:Array<any> = this.colItems;

    if(this.colWidths.length!=cols.length){

      this.colWidths = [];
      cols.forEach(element => {this.colWidths.push(element.offsetWidth);});

    }else{
      for(let i=0;i<cols.length;i++){
        let col = cols[i];
        if(this.colWidths[i] != col.offsetWidth) this.colWidths[i] = col.offsetWidth;
      }
    }

    return this.colWidths;
  }

  get tableData(): Array<any> {
    return [
      {
        field_1: "Row 1 Column 1",
        field_2: "Row 1 Column 2",
        field_3: "Row 1 Column 3",
        field_4: "Row 1 Column 4",
        field_5: "Row 1 Column 5"
      },
      {
        field_1: "Row 2 Column 1",
        field_2: "Row 2 Column 2",
        field_3: "Row 2 Column 3",
        field_4: "Row 2 Column 4",
        field_5: "Row 2 Column 5"
      },
      {
        field_1: "Row 3 Column 1",
        field_2: "Row 3 Column 2",
        field_3: "Row 3 Column 3",
        field_4: "Row 3 Column 4",
        field_5: "Row 3 Column 5"
      },
      {
        field_1: "Row 4 Column 1",
        field_2: "Row 4 Column 2",
        field_3: "Row 4 Column 3",
        field_4: "Row 4 Column 4",
        field_5: "Row 4 Column 5"
      },
      {
        field_1: "Row 5 Column 1",
        field_2: "Row 5 Column 2",
        field_3: "Row 5 Column 3",
        field_4: "Row 5 Column 4",
        field_5: "Row 5 Column 5"
      },
      {
        field_1: "Row 6 Column 1",
        field_2: "Row 6 Column 2",
        field_3: "Row 6 Column 3",
        field_4: "Row 6 Column 4",
        field_5: "Row 6 Column 5"
      },
      {
        field_1: "Row 7 Column 1",
        field_2: "Row 7 Column 2",
        field_3: "Row 7 Column 3",
        field_4: "Row 7 Column 4",
        field_5: "Row 7 Column 5"
      },
      {
        field_1: "Row 8 Column 1",
        field_2: "Row 8 Column 2",
        field_3: "Row 8 Column 3",
        field_4: "Row 8 Column 4",
        field_5: "Row 8 Column 5"
      },
      {
        field_1: "Row 9 Column 1",
        field_2: "Row 9 Column 2",
        field_3: "Row 9 Column 3",
        field_4: "Row 9 Column 4",
        field_5: "Row 9 Column 5"
      }
    ];
  }

  get tableStyle():any{
    return {
      "width":this._tableWidth,
      "height": "150px"
    }
  }

  get _tableWidth():string{
    if(!this.tableWidth){
      return "100%"
    }else{
      return this.tableWidth + "px";
    }
  }

  get headerStyle(): any {
    let scrollable:boolean = false;
    const tblElem = this.tblCont.nativeElement.querySelector('.api-table');
    if(tblElem){
      const scr:any = this.appCommon.isScrollable(tblElem);
      scrollable = scr["verticallyScrollable"];
    }
    return {
      "padding-right": (scrollable ? (this.appCommon.browserName == "edge" ? "18px" : "19px"): "0px"),
      "width":this._tableWidth,
    };
  }

  get detailStyle():any{
    return {
      //"width":this.tableWidth + "px"
    }
  }

  headerCellStyle(col?:any){
    let ret:any = {};
    if(col){
      if(col.width) {
        ret["width"] = col.width + "px";
      }
    }
    if(!ret.width) ret["flex-grow"]="1"
    return ret;
  }

  
  detailCellStyle(idx?:number){
    //if(!idx)return {}

    let ret:any = {};
/*
    let col:any = this.tableOptions.columns[idx];
    ret["width"] = this.colWidths[idx] + "px";
    ret["text-overflow"] = "ellipsis";
    ret["white-space"] = "nowrap";
    ret["overflow"] = "hidden";
    ret["display"] = "block";
*/
    /*if(col){
      if(col.width) {
        ret["width"] = col.width + "px";

        ret["text-overflow"] = "ellipsis";
        ret["white-space"] = "nowrap";
        ret["overflow"] = "hidden";
        ret["display"] = "block";
      }
    }*/

    //if(!ret.width) ret["flex-grow"]="1"
    return ret;
  }

  

  popupFilter(e:any){
    this.debugStatus = e.data;
    console.log("Launch filter for ",e.data)
  }

  ngAfterViewInit(){
    // this section executes after all components were rendered
    console.log("AfterViewInit....")
    this.newColumnWidths(); // forces columnwidths to be reset!

    // select all separators
    /*let seps:Array<any> = this.tblCont.nativeElement.querySelectorAll(".col-sep");
    seps.forEach(s=>{
      console.log("AddListener")
      s.addEventListener('mousemove',this.mousemoveSep.bind(this));
      s.addEventListener("mouseenter",this.mousemoveSep.bind(this));
      s.addEventListener("mouseover",this.mousemoveSep.bind(this));
    });
    this.tblCont.nativeElement.querySelectorAll(".col-sep")
    console.log("Separators:",seps)*/
  }

  testEvent(event){
    console.log(event);
  }

  ngOnInit() {
    console.log("OnInit....")
  }
  testMe(){
    console.log("tblCont",this.tblCont.nativeElement,
      "Full width:",this.tblCont.nativeElement.offsetWidth,
      "Table Header: ", this.tblCont.nativeElement.querySelectorAll('.thead ul li')[4].offsetWidth,
      "Table Is Scrollable?:",this.appCommon.isScrollable(this.tblCont.nativeElement.querySelector('.api-table')),
      "ColWidths:",this.colWidths);
  }

  mouseSep(event,idx?:number){
    if(!this.showMask){
      if(event.type=="mousemove"){
        // record separator object parameters
      }else if(event.type=="mousedown"){
        console.log("SepObj:",event);

        this.currSep = event.target;
        if(idx!=undefined){
          this.leftCol = this.tableOptions.columns[idx];
          this.rightCol = this.tableOptions.columns[idx+1];
        }


        this.handleLeft = this.currSep.offsetLeft;
        //console.log("this.currSep:",this.currSep,"this.handleLeft",this.handleLeft);
        //this.dragHandle.nativeElement.offsetLeft
        this.showMask = true;
      }
    }

  }
  mouseMask(event){
    if(this.showMask){
      if(event.type == "mouseup"){
        // calculate new column widths on either side of the separator

        this.leftCol = null;
        this.currSep = null;
        this.rightCol = null;

        this.showMask = false;
      }else if(event.type == "mouseout"){
        this.showMask = false;
      }else if(event.type == "mousemove"){
        this.handleLeft = event.clientX - this.handleWidth/2;
      }
    }else{

    }
  }

}
