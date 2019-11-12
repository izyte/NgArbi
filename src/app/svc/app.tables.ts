/***********************************************************************
* Automatically generated on 11/12/2019 9:26:59 PM
***********************************************************************/

import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable'; 
import { TableRowBase }from '../api/svc/app-common.datarow'; 
import { ColumnInfo } from '../api/mod/app-column.model';





export class TblPlants extends TableBase {

  public rows:Array<TblPlantsRow> = [];

  public tableFieldPrefix="plnt_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="plnt";

	this.columns.push(new ColumnInfo('plnt_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblPlantsRow):TblPlantsRow
  {
    return super.Add(row);
  }

  NewRow():TblPlantsRow{return new TblPlantsRow();}
  GetRows():Array<TblPlantsRow>{return this.rows;}
  public set currentRow(value:TblPlantsRow){super.__currentRow(value);}
  public get currentRow():TblPlantsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblPlantsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblPlantsRow>{return super.__newRows();}

  
}

export class TblPlantsRow extends TableRowBase{
	constructor(
		public plnt_id?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblPlants{ return super.Table; }

 
}




export class TblUserPlant extends TableBase {

  public rows:Array<TblUserPlantRow> = [];

  public tableFieldPrefix="upln_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[
  {
    "foreign_field": "plnt_id",
    "child_code": "plnt",
    "link_type": "1to1"
  }
];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="upln";

	this.columns.push(new ColumnInfo('upln_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('upln_user_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('upln_plnt_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblUserPlantRow):TblUserPlantRow
  {
    return super.Add(row);
  }

  NewRow():TblUserPlantRow{return new TblUserPlantRow();}
  GetRows():Array<TblUserPlantRow>{return this.rows;}
  public set currentRow(value:TblUserPlantRow){super.__currentRow(value);}
  public get currentRow():TblUserPlantRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUserPlantRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUserPlantRow>{return super.__newRows();}

  
}

export class TblUserPlantRow extends TableRowBase{
	constructor(
		public upln_id?:number, 
		public upln_user_id?:number, 
		public upln_plnt_id?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblUserPlant{ return super.Table; }



	private get _p1():TblPlantsRow { return this.ChildRow('plnt','',-1);}
	private _g1(fn:string):any { return this._p1? this._p1[fn] : null}

 // cols count : 0, nostamp
 
}




export class TblUsers extends TableBase {

  public rows:Array<TblUsersRow> = [];

  public tableFieldPrefix="user_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[
  {
    "foreign_field": "upln_user_id",
    "child_code": "upln",
    "link_type": "1tom"
  }
];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="users";

	this.columns.push(new ColumnInfo('user_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_login', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_name', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_role_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_pwd', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_joined', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_desc', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('user_tag', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_tag2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
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
		public user_id?:number, 
		public user_login?:string, 
		public user_name?:string, 
		public user_role_id?:number, 
		public user_pwd?:string, 
		public user_joined?:Date, 
		public user_desc?:string, 
		public user_tag?:number, 
		public user_tag2?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblUsers{ return super.Table; }

 
}
