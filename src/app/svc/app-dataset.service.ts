import { DatasetBase } from '../api/svc/app-common.dataset';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**Application tables *****/
import { TblUsers } from './app.tables';
import { TblPolarReports } from './app.tables';
import { TblUserParams, TblUserParamRow } from './app.tables';
import { TblLookups, TblLookupRow } from './app.tables';
import { TblParent, TblParentRow } from './app.tables';
import { TblLink, TblLinkRow } from './app.tables';
import { TblChild, TblChildRow } from './app.tables';
import { TblChildB, TblChildBRow } from './app.tables';

@Injectable({
  providedIn: 'root'
})
export class AppDataset extends DatasetBase {

  constructor(public http: HttpClient) { 
    super(http);
  }

  // setup aplication source api url
  public apiUrl:string = "http://localhost:6072/api/app";

  // Instantiate data tables start
  public tblUsers:TblUsers = this.AddTable(new TblUsers(this.http,this.apiUrl,this.tables));
  public tblUserParams:TblUserParams = 
    this.AddTable(new TblUserParams(this.http,this.apiUrl,this.tables,this.tblUsers));
  public tblPolarReports:TblPolarReports = 
    this.AddTable(new TblPolarReports(this.http,this.apiUrl,this.tables));
  public tblLookups:TblLookups = this.AddTable(new TblLookups(this.http,this.apiUrl,this.tables));
  
  public tblParent:TblParent = this.AddTable(new TblParent(this.http,this.apiUrl,this.tables));
  public tblLink:TblLink = this.AddTable(new TblLink(this.http,this.apiUrl,this.tables,this.tblParent));
  public tblChild:TblChild = this.AddTable(new TblChild(this.http,this.apiUrl,this.tables,this.tblLink));
  public tblChildB:TblChildB = this.AddTable(new TblChildB(this.http,this.apiUrl,this.tables,this.tblParent));

  // Instantiate data tables end

  UserParamsByUserID(userId:number, reset?:boolean):Array<TblUserParamRow>{

    if(reset == undefined) reset=false;
    let ret:Array<TblUserParamRow> = [];

    ret = this.tblUserParams.rows.filter(e=>e.uprm_user_id == userId);

    return ret;
  }

  private _LookupDescSubs:Subscription = null;
  LookupDesc(group:number, key:number,lookupField?:string):string{

    let ret:any = this.tblLookups.GetRowById(key);
    if(lookupField==undefined)lookupField="lkp_desc_a";

    if(ret==null){
      let grp:Array<TblLookupRow>=this.tblLookups.GetRowsByGroup(group);
      return "-";
    }else{
      //console.log(ret);
      //return ret["lkp_id"] + ", " + ret["lkp_grp_id"] + ", " + ret["lkp_desc_a"] + ", " + ret["lkp_desc_b"];
      return ret[lookupField];
    }
    
  }

  /************************** Application Specific Methods ******************************************/
  IsLookupParam(prm:TblUserParamRow):boolean{
    let lkpType:TblLookupRow = this.tblLookups.GetRowById(prm.uprm_type_lkp_id);
    if(lkpType==null) return false;
    if(lkpType.lkp_long_1 == 0 || prm.uprm_type_lkp_id == 8010)return false;
    return true;
  }
  ParamValue(prm:TblUserParamRow):string{
    let lkpType:TblLookupRow = this.tblLookups.GetRowById(prm.uprm_type_lkp_id);

    if(lkpType==null) return "";

    if(lkpType.lkp_long_1 == 0 || prm.uprm_type_lkp_id == 8010){
      return prm.uprm_value_text;
    }else{
      let val:number = prm.uprm_value_lkp_id;
      return this.LookupDesc(prm.uprm_type_lkp_id,val);

    }
  }


}