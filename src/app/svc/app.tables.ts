/***********************************************************************
* Automatically generated on 4/17/2020 1:52:46 PM
***********************************************************************/

import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable'; 
import { TableRowBase }from '../api/svc/app-common.datarow'; 
import { ColumnInfo } from '../api/mod/app-column.model';






export class TblAnomalies extends TableBase {

  public rows:Array<TblAnomaliesRow> = [];

  public tableFieldPrefix="AN_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="anom";

	this.columns.push(new ColumnInfo('AN_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSET_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_STATUS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REVNO', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_BY_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_PARTY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_MAINT_REQ', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_STATUS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DATE_IDENT', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_REQ', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_EQ_FAILURE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPROVED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_NAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPR_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_AVAIL_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_AVAIL_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR_REQUIRED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_LIFE_TERM', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_PORTFOLIO_APPL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_SEVERITY', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_LIKELIHOOD', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_START_EAST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_EAST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DESC', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_START_NORTH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_NORTH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RECCMD', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_STATUS', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSMNT', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_DELETED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_COMMENTS', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_TITLE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ATTACHMENTS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_COMMENTS', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('ITV_ANOM_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_MOBIL', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_PROD_RSTO', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DIAGNOSTIC', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_CATEGORY', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_PLAN_PROC', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_MOBIL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_ACTUAL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DEMOB', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_WEATHER', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_ROV', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VESSEL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VEND_EQPT', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_OTHER', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_AFE_COST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_ACTUAL_COST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_ACTUAL_COST', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WBS_NUMBER', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_SUMMARY', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_NAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_PARENT_ANOM_REV', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_LEARNING', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('ITV_AFE_SHELL_SHARE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_DAY_RATE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WELL_DOWNTIME', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomaliesRow):TblAnomaliesRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomaliesRow{return new TblAnomaliesRow();}
  GetRows():Array<TblAnomaliesRow>{return this.rows;}
  public set currentRow(value:TblAnomaliesRow){super.__currentRow(value);}
  public get currentRow():TblAnomaliesRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomaliesRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomaliesRow>{return super.__newRows();}

  
}

export class TblAnomaliesRow extends TableRowBase{
	constructor(
		public AN_ID?:number, 
		public AN_REF?:string, 
		public AN_ASSET_ID?:number, 
		public AN_TYPE?:number, 
		public AN_STATUS?:number, 
		public AN_RAISED_BY?:string, 
		public AN_RAISED_DATE?:Date, 
		public AN_ORIG_CLASS?:number, 
		public AN_CURR_CLASS?:number, 
		public AN_REVNO?:string, 
		public AN_ASS_DATE?:Date, 
		public AN_ASS_BY?:string, 
		public AN_ACT_BY_DATE?:Date, 
		public AN_ACT_PARTY?:string, 
		public AN_MAINT_REQ?:number, 
		public AN_WO_REF?:string, 
		public AN_WO_STATUS?:number, 
		public AN_DATE_IDENT?:Date, 
		public AN_ACT_REQ?:number, 
		public AN_EQ_FAILURE?:number, 
		public AN_TA_APPROVED?:number, 
		public AN_TA_NAME?:string, 
		public AN_TA_APPR_DATE?:Date, 
		public AN_ORIG_AVAIL_CLASS?:number, 
		public AN_CURR_AVAIL_CLASS?:number, 
		public AN_AVAIL_UPD_DATE?:Date, 
		public AN_AVAIL_UPD_BY?:string, 
		public AN_UPD_DATE?:Date, 
		public AN_UPD_BY?:string, 
		public AN_FNCR_REQUIRED?:number, 
		public AN_FNCR?:string, 
		public AN_LIFE_TERM?:number, 
		public AN_PORTFOLIO_APPL?:number, 
		public AN_RISK_RANK_SEVERITY?:number, 
		public AN_RISK_RANK_LIKELIHOOD?:number, 
		public AN_START_EAST?:number, 
		public AN_END_EAST?:number, 
		public AN_DESC?:string, 
		public AN_START_NORTH?:number, 
		public AN_END_NORTH?:number, 
		public AN_NOTIFICATION_REF?:string, 
		public AN_RECCMD?:string, 
		public AN_NOTIFICATION_STATUS?:string, 
		public AN_ASSMNT?:string, 
		public AN_DELETED?:number, 
		public AN_AVAIL_COMMENTS?:string, 
		public AN_TITLE?:string, 
		public AN_ATTACHMENTS?:number, 
		public AN_RISK_RANK_COMMENTS?:string, 
		public ITV_ANOM_REF?:string, 
		public ITV_DATE_MOBIL?:Date, 
		public ITV_DATE_PROD_RSTO?:Date, 
		public ITV_TYPE?:number, 
		public ITV_TIME_DIAGNOSTIC?:number, 
		public ITV_VESSEL_TYPE?:number, 
		public ITV_CATEGORY?:number, 
		public ITV_TIME_PLAN_PROC?:number, 
		public ITV_TIME_MOBIL?:number, 
		public ITV_TIME_ACTUAL?:number, 
		public ITV_TIME_DEMOB?:number, 
		public ITV_TTIME_WEATHER?:number, 
		public ITV_TTIME_ROV?:number, 
		public ITV_TTIME_VESSEL?:number, 
		public ITV_TTIME_VEND_EQPT?:number, 
		public ITV_TTIME_OTHER?:number, 
		public ITV_AFE_COST?:number, 
		public ITV_ACTUAL_COST?:number, 
		public ITV_DATE_ACTUAL_COST?:Date, 
		public ITV_WBS_NUMBER?:string, 
		public ITV_UPDATED?:Date, 
		public ITV_UPDATED_BY?:string, 
		public ITV_SUMMARY?:string, 
		public ITV_VESSEL_NAME?:string, 
		public ITV_PARENT_ANOM_REV?:string, 
		public ITV_LEARNING?:string, 
		public ITV_AFE_SHELL_SHARE?:number, 
		public ITV_VESSEL_DAY_RATE?:number, 
		public ITV_WELL_DOWNTIME?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomalies{ return super.TableObj; }

 
}




export class TblChangeTracker extends TableBase {

  public rows:Array<TblChangeTrackerRow> = [];

  public tableFieldPrefix="trk_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="chgTrack";

	this.columns.push(new ColumnInfo('trk_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_user_login', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_table_code', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_field_name', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_key_value', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_stamp', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_old_value', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));

    this.InitializeTable();

  }

  Add(row?:TblChangeTrackerRow):TblChangeTrackerRow
  {
    return super.Add(row);
  }

  NewRow():TblChangeTrackerRow{return new TblChangeTrackerRow();}
  GetRows():Array<TblChangeTrackerRow>{return this.rows;}
  public set currentRow(value:TblChangeTrackerRow){super.__currentRow(value);}
  public get currentRow():TblChangeTrackerRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChangeTrackerRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChangeTrackerRow>{return super.__newRows();}

  
}

export class TblChangeTrackerRow extends TableRowBase{
	constructor(
		public trk_id?:number, 
		public trk_user_login?:string, 
		public trk_table_code?:string, 
		public trk_field_name?:string, 
		public trk_key_value?:string, 
		public trk_stamp?:string, 
		public trk_old_value?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblChangeTracker{ return super.TableObj; }

 
}
