/***********************************************************************
* Automatically generated on 11/10/2019 5:42:00 PM
***********************************************************************/

import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable'; 
import { TableRowBase }from '../api/svc/app-common.datarow'; 
import { ColumnInfo } from '../api/svc/app-column.model';

export class TblUsers extends TableBase {

  public rows:Array<TblUsersRow> = [];

  public tableFieldPrefix="user_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[
  {
    "foreign_field": "upln_user_id",
    "child_code": "uplnk",
    "link_type": "1tom"
  }
];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="users";

	this.columns.push(new ColumnInfo('user_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_name', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

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
		public user_name?:string, 
		public user_created?:Date, 
		public user_created_by?:string, 
		public user_updated?:Date, 
		public user_updated_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblUsers{ return super.Table; }

 
}
