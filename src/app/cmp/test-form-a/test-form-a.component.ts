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

  constructor(private ds: AppDataset) {
    this.row = this.ds.testRow;
  }

  ngOnInit() {}
}
