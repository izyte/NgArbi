import { TblUsers, TblUsersRow } from './../../svc/app.tables';
import { AppDataset } from "./../../svc/app-dataset.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

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
    let userId:number = 1;
    this.ds.tblUsers.GetRowById(userId,(e)=>{
      let user:TblUsersRow = this.ds.tblUsers.GetRowById(userId);
      console.log("Resolved",e,"User:",user);
      user.ChildRows("upln")
    });

    //this.ds.tblUsers.rows[0].user_desc;
    //console.log("tblPlants",this.ds.tblPlants)

  }

  TestFunction(){
    let user:TblUsersRow = this.ds.tblUsers.GetRowById(1);
    console.log("Users:",this.ds.tblUsers,user.ChildRows("upln"));
  }
}
