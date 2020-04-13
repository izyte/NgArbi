import { ViewChild, AfterViewInit, HostListener } from "@angular/core";

/***************************************************************************************************
 * Name: API Table Component B, Ver. 1.0.0
 * Created By : Archangel De Leon Villarojo
 * Created Date: April 2, 2020
 * Last Modified: April 2, 2020
 ***************************************************************************************************/
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-api-table-b",
  templateUrl: "./api-table-b.component.html",
  styleUrls: ["./api-table-b.component.scss"]
})
export class ApiTableBComponent implements OnInit, AfterViewInit {

  counter:number = 0;
  @HostListener('window:resize', ['$event']) handleResize(event: any) {
    this.setPlaceHolderParams();
  }

  @ViewChild("placeholder", { static: false }) elem: any;
  htmlElement: HTMLElement;

  public parentWidth:number=0;
  public parentHeight:number=0;
  public parentLeft:number=0;
  public parentTop:number=0;

  constructor() {}

  renderTable: boolean = false;

  rows: Array<any> = [
    { name: "Reinhard Mondez", age: 38 },
    { name: "Neo Puavin", age: 34 },
    { name: "Terence Gagarino", age: 35 },
    { name: "Albert Almacen", age: 37 },
    { name: "Archangel Villarojo", age: 52 },
    { name: "Mel Dulay", age: 54 },
    { name: "Desi Dulay", age: 56 },
    { name: "Andrew McKenzie", age: 60 },
    { name: "Jenny McKenzie", age: 48 },
    { name: "Alan Ryon", age: 60 },
    { name: "Myeth Ryon", age: 70 }
  ];

  ngOnInit() {
    setTimeout(()=>console.log("elem",this.elem),2000);
  }

  ngAfterViewInit() {
    this.htmlElement = this.elem.nativeElement;

    setTimeout(()=>this.setPlaceHolderParams());
  }

  setPlaceHolderParams(){
    this.parentWidth=this.htmlElement.offsetWidth;
    this.parentHeight=this.htmlElement.offsetHeight;
    this.parentLeft=this.htmlElement.offsetLeft;
    this.parentTop=this.htmlElement.offsetTop;
  }


}
