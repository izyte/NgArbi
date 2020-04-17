// import { TblUsers, TblUsersRow, TblUserPlantRow, TblUserPlant, TblPlantsRow } from './../../svc/app.tables';
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

    // // get user record
    // let userId:number = 2;
    // this.ds.tblUsers.GetRowById(userId,(e)=>{
    //   let user:TblUsersRow = this.ds.tblUsers.GetRowById(userId);

    //   user.ChildRows("upln")
    //});


    //this.onChanges();

  }



  // UserPlantLinks():Array<TblUserPlantRow>{
  //   if(!this.ds.currentUser)return[];
  //   return this.ds.currentUser.ChildRows("upln");
  //   //if(this.ds.currentUser.ChildRows("upln").length==0)return[];
  // }

}
