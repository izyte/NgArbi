/***********************************************************************
* Automatically generated on 4/21/2020 1:18:16 PM
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
		public AN_ID?:number){
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
		public trk_id?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblChangeTracker{ return super.TableObj; }

 
}




export class TblLookups extends TableBase {

  public rows:Array<TblLookupsRow> = [];

  public tableFieldPrefix="LKP_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="lkp";

	this.columns.push(new ColumnInfo('LKP_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_GRP_ID', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblLookupsRow):TblLookupsRow
  {
    return super.Add(row);
  }

  NewRow():TblLookupsRow{return new TblLookupsRow();}
  GetRows():Array<TblLookupsRow>{return this.rows;}
  public set currentRow(value:TblLookupsRow){super.__currentRow(value);}
  public get currentRow():TblLookupsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblLookupsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblLookupsRow>{return super.__newRows();}

  
}

export class TblLookupsRow extends TableRowBase{
	constructor(
		public LKP_ID?:number, 
		public LKP_GRP_ID?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblLookups{ return super.TableObj; }

 
}




export class TblNodesAttrib extends TableBase {

  public rows:Array<TblNodesAttribRow> = [];

  public tableFieldPrefix="NODE_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="node";

	this.columns.push(new ColumnInfo('REC_TAG', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblNodesAttribRow):TblNodesAttribRow
  {
    return super.Add(row);
  }

  NewRow():TblNodesAttribRow{return new TblNodesAttribRow();}
  GetRows():Array<TblNodesAttribRow>{return this.rows;}
  public set currentRow(value:TblNodesAttribRow){super.__currentRow(value);}
  public get currentRow():TblNodesAttribRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblNodesAttribRow>{return super.__dirtyRows();}
  public get newRows():Array<TblNodesAttribRow>{return super.__newRows();}

  
}

export class TblNodesAttribRow extends TableRowBase{
	constructor(
		public REC_TAG?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblNodesAttrib{ return super.TableObj; }

 
}




export class TblUserParam extends TableBase {

  public rows:Array<TblUserParamRow> = [];

  public tableFieldPrefix="PARAM_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="param";

	this.columns.push(new ColumnInfo('PARAM_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_USER_ID', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUserParamRow):TblUserParamRow
  {
    return super.Add(row);
  }

  NewRow():TblUserParamRow{return new TblUserParamRow();}
  GetRows():Array<TblUserParamRow>{return this.rows;}
  public set currentRow(value:TblUserParamRow){super.__currentRow(value);}
  public get currentRow():TblUserParamRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUserParamRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUserParamRow>{return super.__newRows();}

  
}

export class TblUserParamRow extends TableRowBase{
	constructor(
		public PARAM_ID?:number, 
		public PARAM_USER_ID?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblUserParam{ return super.TableObj; }

 
}




export class TblTreeStruc extends TableBase {

  public rows:Array<TblTreeStrucRow> = [];

  public tableFieldPrefix="TRE_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="tre";

	this.columns.push(new ColumnInfo('TRE_NOD_TAG', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_TAG_PAR', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblTreeStrucRow):TblTreeStrucRow
  {
    return super.Add(row);
  }

  NewRow():TblTreeStrucRow{return new TblTreeStrucRow();}
  GetRows():Array<TblTreeStrucRow>{return this.rows;}
  public set currentRow(value:TblTreeStrucRow){super.__currentRow(value);}
  public get currentRow():TblTreeStrucRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblTreeStrucRow>{return super.__dirtyRows();}
  public get newRows():Array<TblTreeStrucRow>{return super.__newRows();}

  
}

export class TblTreeStrucRow extends TableRowBase{
	constructor(
		public TRE_NOD_TAG?:number, 
		public TRE_NOD_TAG_PAR?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblTreeStruc{ return super.TableObj; }

 
}




export class TblUsers extends TableBase {

  public rows:Array<TblUsersRow> = [];

  public tableFieldPrefix="USER_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="user";

	this.columns.push(new ColumnInfo('USER_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUsersRow):TblUsersRow
  {
    return super.Add(row);
  }

  NewRow():TblUsersRow{return new TblUsersRow();}
  GetRows():Array<TblUsersRow>{return this.rows;}
  public set currentRow(value:TblUsersRow){super.__currentRow(value);}
  public get currentRow():TblUsersRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUsersRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUsersRow>{return super.__newRows();}

  
}

export class TblUsersRow extends TableRowBase{
	constructor(
		public USER_ID?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblUsers{ return super.TableObj; }

 
}
