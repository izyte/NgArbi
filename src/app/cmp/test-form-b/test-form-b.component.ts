import { KeyValuePair } from './../../api/mod/app-common.model';
import { TblPlants } from './../../svc/app.tables';
import { FormGroup, FormControl } from "@angular/forms";
import { AppDataset } from "./../../svc/app-dataset.service";
import { Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { TblPlantsRow } from 'src/app/svc/app.tables';

@Component({
  selector: "app-test-form-b",
  templateUrl: "./test-form-b.component.html",
  styleUrls: ["./test-form-b.component.scss"]
})

export class TestFormBComponent implements OnInit {

  @ViewChild("ctrl", {static:true, read: ElementRef}) ctrl: ElementRef<any>;  

  frmObj: FormGroup = new FormGroup({});

  constructor(public ds: AppDataset) {}

  ngOnInit() {
    console.log("Initiializing test-form-b component", this.frmObj);

    let userId: number = 1;
    this.ds.tblUsers.GetRowById(userId, d => {
      console.log(
        "About to extract userplants!",
        this.ds.tblUsers.GetRowById(1)
      );
      this.ds.tblUserPlant.GetRowsByGroup({
        key: userId,
        onSuccess: e => {
          if (this.ds.tblPlants.rows.length != 0) {
            this.ds.tblPlants.rows[0].SetAsCurrent();
          }
          console.log(
            "Plants extracted:",
            this.ds.currentPlant,
            this.ds.tblUserPlant.rows,
            this.ds.tblPlants.rows
          );
        }
      });
    });

    //this.onChanges();
  }

  PostData() {
    console.log("Posing data from:", this.frmObj);
  }

  TestMe() {
    console.log(this.frmObj);
  }

  toPostData():string{
    if(this.ds.currentPlant){
      return "To Post Data: " + JSON.stringify(this.ds.currentPlant.Table.toPostData);
    }else{
      return "";
    }
  }

  onFieldChange(event): void {
    // emits control object 
    
    if(this.ds.currentPlant){
      //console.log("control data", this.ds.currentPlant[event.name], event.ctrl.value);
      //this.ds.currentPlant[event.name] = event.ctrl.value;
      //this.ds.currentPlant[event.name] = event.ctrl.target.value;
    }
  }

  cs(idx, heading?: boolean): any {
    let width: string;
    switch (idx) {
      case 1: width="150px";break;
      case 2: width="200px";break;
      case 3: width="140px";break;
      case 4: width="160px";break;
      case 5: width="170px";break;
      default: width="150px";break;
    }
    if (heading) {
      return {
        width: width,
        "text-align": "center"
      };
    } else {
      return {
        width: width,
      };
    }
  }

  newPlant(){
    let tblPlant:TblPlants = this.ds.tables["plnt"];
    let plant:TblPlantsRow = tblPlant.Add();
    plant.SetAsCurrent();
    console.log(plant, tblPlant," Rows#", tblPlant.rows.length);
  }

  delPlant(){
    if(this.ds.currentPlant){
      this.ds.currentPlant.Delete();
    }
  }
  savePlant(){
    console.log("Save plant!")
  }

  setAsCurrent(){
    let elementRef = this.ctrl;
    console.log(elementRef.nativeElement.value);
  }


  //onChanges(): void {
  //  this.frmObj.valueChanges.subscribe(val => {
  //    console.log("On Changes!",val);
  //  });
  //}
}
