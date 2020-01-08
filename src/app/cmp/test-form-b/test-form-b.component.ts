import { ApiFormAComponent } from './../../api/cmp/api-form-a/api-form-a.component';
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
  @ViewChild("testForm", {static:true, read: ElementRef}) frm: ElementRef<ApiFormAComponent>;  

  @ViewChild(ApiFormAComponent, {static:true}) childForm: ApiFormAComponent ;

  frmObj: FormGroup = new FormGroup({});
  frmObjSub: FormGroup = new FormGroup({});

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
            // extract all linked table records
            // a) Materials
            this.ds.tblRefMaterials.GetRowsByGroup({key:this.ds.currentPlant,onSuccess:(data)=>{
              console.log("matl:",data);

              this.ds.tblRefExtCoats.GetRowsByGroup({key:this.ds.currentPlant,onSuccess:(data)=>{
                console.log("ecot:",data);
              }})
            }})
          }
          console.log("App Dataset:",this.ds);
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

    if(this.withSource){
      return "To Post Data: " + JSON.stringify(this.ds.tables["plnt"].toPostData);
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

  scatterData(){
    //console.log(this.frm.nativeElement);
    //console.log(this.frm.nativeElement.testPublic);
    console.log("FormObjectFromParent:",this.frmObj);
    this.childForm.Scatter();
    
  }

  setAsCurrent(){
    let elementRef = this.ctrl;
    let tblPlant:TblPlants = this.ds.tables["plnt"];
    console.log("Current Key:",tblPlant.currentKey,elementRef.nativeElement.value);
    
    tblPlant.currentKey = elementRef.nativeElement.value;
    console.log("New Current Key:",tblPlant.currentKey, elementRef.nativeElement.value);
  }


  get withSource():boolean{
    return this.childForm.sourceTable != null;
  }


  //onChanges(): void {
  //  this.frmObj.valueChanges.subscribe(val => {
  //    console.log("On Changes!",val);
  //  });
  //}
}
