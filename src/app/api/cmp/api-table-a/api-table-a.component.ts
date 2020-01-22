import { AppCommonMethodsService } from "./../../svc/app-common-methods.service";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  HostListener,
  AfterViewInit
} from "@angular/core";

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: "app-api-table-a",
  templateUrl: "./api-table-a.component.html",
  styleUrls: ["./api-table-a.component.scss"]
})
export class ApiTableAComponent implements OnInit, AfterViewInit {
  @Input() options: any = { columns: undefined, data: undefined };

  @Input() tableId: number = 0;
  @Input() tableWidth: number = 1024;
  @Input() tableHeight: number = 500;

  @Input() tableStriped: boolean = true;
  @Input() tableBordered: boolean = true;

  @ViewChild("tableContainer", { static: true, read: ElementRef })
  tblCont: ElementRef<any>;
  @ViewChild("dragHandle", { static: true, read: ElementRef })
  dragHandle: ElementRef<any>;

  @HostListener("window:resize") newColumnWidths() {
    //console.log("tblCont (" + this.tableId + "): ",this.tblCont);
    setTimeout(()=>{let tmp: Array<number> = this._colWidths;},0);
  }

  initialized: boolean = false;
  leftCol: any = null;
  rightCol: any = null;

  currSep: any = null;

  leftColCell: any = null;
  rightColCell: any = null;

  showMask: boolean = false;
  debugStatus: string = "Sample debug text";
  colWidths: Array<number> = [];


  items = Array(1000).fill(0).map(() => Math.round(Math.random() * 100));

  constructor(public appCommon: AppCommonMethodsService) {
    this.normalizeColumns();
  }

  get tableOptions() {
    if (this.options.columns == undefined) {
      this.options = {
        columns: [
          {
            heading: "Item No.",
            width: 50,
            data: "field_1",
            order: 0,
            type: null,
            noFilter: false,
            fixed: false
          },
          {
            heading: "Column 2 Column 2 Column 2 Column 2",
            width: 200,
            data: "field_2",
            order: 2,
            type: null
          },
          {
            heading: "Column 3 Column 3 Column 3 Column 3",
            data: "field_3",
            type: null
          },
          { heading: "Column 4", data: "field_4", type: null, width:150 },
          { heading: "Column 5", order: 1, data: "field_5", type: null }
        ]
      };
    }

    return this.options;
  }

  private _tableColumns: Array<any> = [];
  get tableColumns(): Array<any> {
    return this._tableColumns;
  }

  get tableElement(): any {
    return this.tblCont.nativeElement.querySelector(".api-table");
  }

  get tableHeader(): any {
    return this.tblCont.nativeElement.querySelector(".thead");
  }

  get handleLimitLeft(): number {
    if (this.leftColCell) {
      return this.leftColCell.offsetLeft; // + this.leftColCell.offsetWidth;
    }
    return 0;
  }

  get handleLimitRight(): number {
    if (this.rightColCell) {
      return this.rightColCell.offsetLeft + this.rightColCell.offsetWidth;
    }
    return 0;
  }

  private _colDragX: number = -1;
  get colDragX(): number {
    return this._colDragX;
  }

  get handleTop(): number {
    return this.tableHeader.offsetTop + 2;
  }

  handleLeft: number = 0;
  /*
  get handleLeft():number{
    if(!this.currSep) return 0;
    return this.currSep.offsetLeft - this.handleWidth/2;
  }*/
  get handleHeight(): number {
    //return this.tableHeader.offsetHeight - 4;
    return this.tableElement.offsetHeight;
  }
  get handleWidth(): number {
    return 3;
  }

  get colItems(): Array<any> {
    return this.tblCont.nativeElement.querySelectorAll(".coltemp ul li");
  }
  get validWidths(): boolean {
    if (!this.colWidths) return false;
    if (this.colWidths.length == 0 || !this.tableOptions) return false;
    if (!this.tableOptions.columns) return false;
    this.colWidths.forEach(item => {
      if (!isNaN(item)) return false;
    });
    return true;
  }
  private get _colWidths(): Array<number> {
    let cols: Array<any> = this.colItems;

    if (this.colWidths.length != cols.length) {
      this.colWidths = [];
      cols.forEach(element => {
        this.colWidths.push(element.offsetWidth);
      });
    } else {
      for (let i = 0; i < cols.length; i++) {
        let col = cols[i];
        if (this.colWidths[i] != col.offsetWidth)
          this.colWidths[i] = col.offsetWidth;
      }
    }

    return this.colWidths;
  }

  get tableData(): Array<any> {
    if (this.options.data == undefined) {

      let rows:number = 100;
      let cols:number = this.tableOptions.columns.length;

      this.options.data = []

      for(let r=1;r<=rows;r++){
          let obj = {};
          for(let c=1;c<=cols;c++){obj["field_" + c] = "Row " + r + " Column " + c;}
          this.options.data.push(obj);
      }
/*
      this.options.data = [
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

*/

    }

    return this.options.data;
  }

  get tableStyle(): any {
    return {
      width: this._tableWidth,
      height: "300px"
    };
  }

  get _tableWidth(): string {
    if (!this.tableWidth) {
      return "100%";
    } else {
      return this.tableWidth + "px";
    }
  }

  get headerStyle(): any {
    let scrollable: boolean = false;
    const tblElem = this.tblCont.nativeElement.querySelector(".api-table");
    if (tblElem) {
      const scr: any = this.appCommon.isScrollable(tblElem);
      scrollable = scr["verticallyScrollable"];
    }
    return {
      "padding-right": scrollable
        ? this.appCommon.browserName == "edge"
          ? "18px"
          : "19px"
        : "0px",
      width: this._tableWidth
    };
  }

  get detailStyle(): any {
    return {
      //"width":this.tableWidth + "px"
    };
  }

  headerCellStyle(col?: any) {
    let ret: any = {};
    if (col) {
      if (col.width) {
        ret["width"] = col.width + "px";
      }
    }
    if (!ret.width) ret["flex-grow"] = "1";
    return ret;
  }

  detailCellStyle(idx?: number) {
    //if(!idx)return {}

    let ret: any = {};
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

  popupFilter(e: any) {
    this.debugStatus = e.data;
    console.log("Launch filter for ", e.data);
  }

  ngAfterViewInit() {
    // this section executes after all components were rendered
    console.log("AfterViewInit....");
    this.newColumnWidths(); // forces columnwidths to be reset!

    // set timeout to allow initialization of global variables that are being used in the template
    setTimeout(() => {
      this.initialized = true;
    }, 0);

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


  ngOnInit() {
    console.log("OnInit....");
  }

  private normalizeColumns(): void {
    let opts = this.tableOptions;
    if (this.options.columns != undefined) {
      let noOrder = this.options.columns.filter(e => {
        return e.order == undefined;
      });

      let withOrder = this.options.columns
        .filter(e => {
          return e.order != undefined;
        })
        .sort((a, b) => {
          return a.order - b.order;
        });

      let maxOrder: number = 0;
      if (withOrder.length != 0) {
        maxOrder = withOrder[withOrder.length - 1].order + 1;
      }
      if (noOrder.length)
        noOrder.forEach(e => {
          e.order = maxOrder;
          maxOrder++;
        });

      console.log("No Order", noOrder, "with order:", withOrder);
      this.options.columns.sort((a, b) => {
        return a.order - b.order;
      });
    }
  }

  testMe() {
    console.log(
      "tblCont",
      this.tblCont.nativeElement,
      "Full width:",
      this.tblCont.nativeElement.offsetWidth,
      "Table Header: ",
      this.tblCont.nativeElement.querySelectorAll(".thead ul li")[4]
        .offsetWidth,
      "Table Is Scrollable?:",
      this.appCommon.isScrollable(
        this.tblCont.nativeElement.querySelector(".api-table")
      ),
      "ColWidths:",
      this.colWidths
    );
  }

  mouseSep(event, idx?: number) {
    if (!this.showMask) {
      if (event.type == "mousemoveX") {
        // record separator object parameters
      } else if (event.type == "mouseout") {
      } else if (event.type == "mousedownX" || event.type == "mousemove") {
        console.log("SepObj:", event);

        this.currSep = event.target;
        if (idx != undefined) {
          this.leftCol = this.tableOptions.columns[idx];
          this.rightCol = this.tableOptions.columns[idx + 1];

          let cols: Array<any> = this.colItems;
          this.leftColCell = cols[idx];
          this.rightColCell = cols[idx + 1];
        }

        this.handleLeft = this.currSep.offsetLeft;
        //console.log("this.currSep:",this.currSep,"this.handleLeft",this.handleLeft);
        //this.dragHandle.nativeElement.offsetLeft
        this.showMask = true;
      }
    }
  }
  _beginDrag:boolean = false;
  mouseMask(event) {
    if (this.showMask) {
      if (event.type == "mouseup") {
        // calculate new column widths on either side of the separator

        this._beginDrag = false;
        this.commitDrag();
        this.resetReferenceObjects();

        this.showMask = false;
      } else if (event.type == "mousedown") {
        this._beginDrag = true;
      } else if (event.type == "mouseout") {
        this._beginDrag = false;
        this.resetReferenceObjects();
        this.showMask = false;
      } else if (event.type == "mousemove") {
        /*
        this._colDragX = Math.min(
          Math.max(event.clientX, this.handleLimitLeft),
          this.handleLimitRight - this.handleWidth
        );
        */

        // if current mouse position is not within the separator's position
        // and showMask is true,
        if(!this._beginDrag && this.showMask && event.clientX && this.currSep){
          let diff:number = Math.abs(this.currSep.offsetLeft-event.clientX)
          if(diff > this.handleWidth){
            this.resetReferenceObjects();
            this.showMask = false;
          }
        }

        
        // execute the following only if the left mouse button is down

        console.log("event.button",event.button);
        if(this._beginDrag){
          this._colDragX =Math.max(event.clientX, this.handleLimitLeft);
          this.handleLeft = this._colDragX;
        }

      }
    } else {
    }
  }

  commitDrag():void{
    let span:number = this.handleLimitRight - this.handleLimitLeft;
    let leftWidth:number = this.colDragX - this.handleLimitLeft;
    let rightWidth:number =this.handleLimitRight - this.colDragX;

    // change left cell to fixed width 
    this.leftCol.width = leftWidth;

    // if no more columns remain flextible/fill type column,
    // set the last column as one
    let cols = this.tableOptions.columns;
    let growCol:any = cols.filter(e=>{return e.width == undefined;});

    if(growCol.length == 0){
        growCol = cols.sort((a, b) => {return a.order - b.order;});
        delete growCol[growCol.length - 1].width;
    }

    //setTimeout(()=>{this.newColumnWidths()},10);
    this.newColumnWidths();
  }

  resetReferenceObjects(): void {
    this.leftCol = null;
    this.currSep = null;
    this.rightCol = null;

    this._colDragX = -1;

    this.leftColCell = null;
    this.rightColCell = null;
  }

  testEvent(event) {
    console.log(event);
  }

  insertColumn(colOrder:number, insertBefore:number){
    let cols:Array<any> = this.tableOptions.columns;
    // get column object by colOrder
    let moveCol:any = cols.filter(e=>{return e.order == colOrder})[0];

    // select all columns from the insertBefore order exept the colOrdered column
    let rightCols:Array<any> = cols.filter(e =>{
      return (e.order != colOrder && e.order >= insertBefore);
    });
    console.log("right columns",rightCols);

    // iterate through the elements and increase the order number by 1
    let newOrder:number = insertBefore + 1;
    rightCols.forEach(e=>{e.order = newOrder; newOrder++;})
    
    // change order of the move column to the insertBefore index
    moveCol.order = insertBefore;

    // sort columns
    cols.sort((a, b) => {return a.order - b.order;});

    // calculate new column widths
    this.newColumnWidths();

    console.log("moveCol",moveCol,"this.tableOptions.columns",this.tableOptions.columns);



  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray( this.tableOptions.columns , event.previousIndex, event.currentIndex);
    let order:number = 0;
    this.tableOptions.columns.forEach(e => {
      e.order = order;
      order++;
    });
    this.newColumnWidths();
  }

}
