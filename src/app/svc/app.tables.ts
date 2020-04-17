/***********************************************************************
* Automatically generated on 4/17/2020 12:15:12 PM
***********************************************************************/

import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable'; 
import { TableRowBase }from '../api/svc/app-common.datarow'; 
import { ColumnInfo } from '../api/mod/app-column.model';






export class TblRefExtCoats extends TableBase {

  public rows:Array<TblRefExtCoatsRow> = [];

  public tableFieldPrefix="ecot_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="anom";

	this.columns.push(new ColumnInfo('ecot_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_plnt_id', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_name', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_endper', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_pntnew', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_supcor', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_sltcor', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_modcor', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_sigcor', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_sevcor', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ecot_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblRefExtCoatsRow):TblRefExtCoatsRow
  {
    return super.Add(row);
  }

  NewRow():TblRefExtCoatsRow{return new TblRefExtCoatsRow();}
  GetRows():Array<TblRefExtCoatsRow>{return this.rows;}
  public set currentRow(value:TblRefExtCoatsRow){super.__currentRow(value);}
  public get currentRow():TblRefExtCoatsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblRefExtCoatsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblRefExtCoatsRow>{return super.__newRows();}

  
}

export class TblRefExtCoatsRow extends TableRowBase{
	constructor(
		public ecot_id?:number, 
		public ecot_plnt_id?:number, 
		public ecot_name?:string, 
		public ecot_endper?:number, 
		public ecot_pntnew?:number, 
		public ecot_supcor?:number, 
		public ecot_sltcor?:number, 
		public ecot_modcor?:number, 
		public ecot_sigcor?:number, 
		public ecot_sevcor?:number, 
		public ecot_created?:Date, 
		public ecot_created_by?:string, 
		public ecot_updated?:Date, 
		public ecot_updated_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblRefExtCoats{ return super.TableObj; }

 
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
