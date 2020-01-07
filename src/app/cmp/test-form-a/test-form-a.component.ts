import { TblUsers, TblUsersRow, TblUserPlantRow, TblUserPlant, TblPlantsRow } from './../../svc/app.tables';
import { AppDataset } from "./../../svc/app-dataset.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { debug } from 'util';

@Component({
  selector: "app-test-form-a",
  templateUrl: "./test-form-a.component.html",
  styleUrls: ["./test-form-a.component.scss"]
})
export class TestFormAComponent implements OnInit {
  frmObj: FormGroup = new FormGroup({});

  row: any = {
    field1: "Sample 1",
    field2: "Sample 2",
    field3: "Sample 3"
  };

  lkpCountries: Array<any> = [
    { value: 0, disp: "" },
    { value: 1, disp: "Philippines" },
    { value: 2, disp: "Brunei" },
    { value: 3, disp: "Malaysia" }
  ];

  lkpLocalPopulationDensity: Array<any> = [
    { value: 0, disp: "" },
    { value: 1, disp: "None" },
    { value: 2, disp: "Farms" },
    { value: 3, disp: "Factory" },
    { value: 4, disp: "Village" },
    { value: 5, disp: "Town" },
  ];

  constructor(private ds: AppDataset) {
    this.row = this.ds.testRow;
  }

  ngOnInit() {

    // get user record
    let userId:number = 2;
    this.ds.tblUsers.GetRowById(userId,(e)=>{
      let user:TblUsersRow = this.ds.tblUsers.GetRowById(userId);

      user.ChildRows("upln")
    });


    this.onChanges();

  }


  onChanges(): void {
    if(!this.frmObj){
      console.log("Form object is not yet initialized!")
    }
    this.frmObj.valueChanges.subscribe(val => {
      console.log("On change trigger!")
    });
  }


  TestFunction(){
    let userId:number = 1;
    if(this.ds.currentUser){
      userId=this.ds.currentUser.user_id==1 ? 2 : 1;
    }
  this.ds._cl("@current user id",userId);
    
    let user:TblUsersRow = this.ds.tblUsers.GetRowById(userId, (e)=>{
      let u:TblUsersRow=this.ds.tblUsers.GetRowById(userId);
      this.ds._cl("user!:",u);
      u.ChildRows("upln");

      u.SetAsCurrent();

      //let up:Array<TblUserPlantRow> = u.ChildRows("upln",(e)=>{
      //  let up2:Array<TblUserPlantRow> = u.ChildRows("upln");
      //  this.ds._cl("user:",u,"upln count:",up2.length);
      //});
      //if(up.length!=0)this.ds._cl("user:",u,"upln count:",up.length);
      //this.ds._cl("user:",u,"upln count:");
    });
    if(user){
      user.SetAsCurrent();
      this.ds._cl("Users:",this.ds.tblUsers,"!Linked Plants: ",user.ChildRows("upln"));
    }
  }

  TestFunctionB(){
    let userId:number = 1;
    let user:TblUsersRow = this.ds.tblUsers.GetRowById(userId);
    user.ChildRows("upln")

    let ul:Array<TblUserPlantRow> =  user.ChildRows("upln");
    this.ds._cl("user plant links:",ul);
    if(ul.length!=0){
      let cr:TblPlantsRow = ul[0].ChildRow("plnt");
      this.ds._cl("plant links[0]:",cr);
    }
  }

  TestFunctionC(){
    if(!this.ds.currentPlant){
      this.ds._cl("no current plant!")
    }else{
      this.ds._cl("ToPostData:",JSON.stringify(this.ds.currentPlant.toPostData));
    }
  }

  UserPlantLinks():Array<TblUserPlantRow>{
    if(!this.ds.currentUser)return[];
    return this.ds.currentUser.ChildRows("upln");
    //if(this.ds.currentUser.ChildRows("upln").length==0)return[];
  }

}
 