import { DatasetBase } from "../api/svc/app-common.dataset";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**Application tables *****/
/*
import { TblParent, TblParentRow, TblUsers } from './app.tables';
*/
//<INCLUDES>
import { TblAnomalies, TblAnomaliesRow } from './app.tables';
import { TblChangeTracker, TblChangeTrackerRow } from './app.tables';
//</INCLUDES>

@Injectable({
  providedIn: "root"
})
export class AppDataset extends DatasetBase {
  APP_TITLE: string = "My Application";
  APP_ICON: string = "fa-id-card";

  NAV_BACK: string = "#2b579a";

  testRow: any = {
    table: {},
    an_id: 1
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  // setup aplication source api url
  public apiUrl: string = "http://soga-alv/NgArbi/api/app";

//<INSTANTIATE>
public tblAnomalies:TblAnomalies = this.AddTable(new TblAnomalies(this.http, this.apiUrl, this.tables));
public tblChangeTracker:TblChangeTracker = this.AddTable(new TblChangeTracker(this.http, this.apiUrl, this.tables));
//</INSTANTIATE>

  /*
  this.tblTableClass = this.AddTable(new TblTableClass(this.http,this.apiUrl,this.tables));
  */

  /************************** Application Specific Methods ******************************************/


}
