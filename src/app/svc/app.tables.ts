/***********************************************************************
* Automatically generated on 11/3/2019 5:58:31 PM
***********************************************************************/

import { HttpClient } from '@angular/common/http';
import { TableBase } from '../services/app-common.datatable'; 
import { TableRowBase }from '../services/app-common.datarow'; 
import { ColumnInfo } from '../services/app-column.model';





export class TblChild extends TableBase {

  public rows:Array<TblChildRow> = [];

  public tableFieldPrefix="chi_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="chi";

	this.columns.push(new ColumnInfo('chi_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chi_code', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chi_desc', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chi_notes', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('chi_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chi_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chi_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chi_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblChildRow):TblChildRow
  {
    return super.Add(row);
  }

  NewRow():TblChildRow{return new TblChildRow();}
  GetRows():Array<TblChildRow>{return this.rows;}
  public set currentRow(value:TblChildRow){super.__currentRow(value);}
  public get currentRow():TblChildRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChildRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChildRow>{return super.__newRows();}

  
}

export class TblChildRow extends TableRowBase{
	constructor(
		public chi_id?:number, 
		public chi_code?:string, 
		public chi_desc?:string, 
		public chi_notes?:string, 
		public chi_created?:Date, 
		public chi_created_by?:string, 
		public chi_updated?:Date, 
		public chi_updated_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblChild{ return super.Table; }

 
}




export class TblChildB extends TableBase {

  public rows:Array<TblChildBRow> = [];

  public tableFieldPrefix="chib_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="chib";

	this.columns.push(new ColumnInfo('chib_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_par_id', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_code', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_desc', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_notes', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('chib_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('chib_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblChildBRow):TblChildBRow
  {
    return super.Add(row);
  }

  NewRow():TblChildBRow{return new TblChildBRow();}
  GetRows():Array<TblChildBRow>{return this.rows;}
  public set currentRow(value:TblChildBRow){super.__currentRow(value);}
  public get currentRow():TblChildBRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChildBRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChildBRow>{return super.__newRows();}

  
}

export class TblChildBRow extends TableRowBase{
	constructor(
		public chib_id?:number, 
		public chib_par_id?:number, 
		public chib_code?:string, 
		public chib_desc?:string, 
		public chib_notes?:string, 
		public chib_created?:Date, 
		public chib_created_by?:string, 
		public chib_updated?:Date, 
		public chib_updated_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblChildB{ return super.Table; }

 
}




export class TblLookups extends TableBase {

  public rows:Array<TblLookupRow> = [];

  public tableFieldPrefix="lkp_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="lkp";

	this.columns.push(new ColumnInfo('lkp_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_grp_id', 'number', '', '', -1, -1, 0, 0, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_desc_a', 'number', '', '', -1, -1, -1, -1, 0, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_desc_b', 'number', '', '', -1, -1, -1, -1, 1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_order', 'number', '', '', -1, -1, -1, 1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_text_50_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_text_50_2', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_text_255_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_text_255_2', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_long_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_long_2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_long_3', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_long_4', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_double_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_double_2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_double_3', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_boolean_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_boolean_2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_boolean_3', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lkp_memo_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('lkp_ole_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('lkp_switches', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblLookupRow):TblLookupRow
  {
    return super.Add(row);
  }

  NewRow():TblLookupRow{return new TblLookupRow();}
  GetRows():Array<TblLookupRow>{return this.rows;}
  public set currentRow(value:TblLookupRow){super.__currentRow(value);}
  public get currentRow():TblLookupRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblLookupRow>{return super.__dirtyRows();}
  public get newRows():Array<TblLookupRow>{return super.__newRows();}

  
}

export class TblLookupRow extends TableRowBase{
	constructor(
		public lkp_id?:number, 
		public lkp_grp_id?:number, 
		public lkp_desc_a?:number, 
		public lkp_desc_b?:number, 
		public lkp_order?:number, 
		public lkp_text_50_1?:string, 
		public lkp_text_50_2?:string, 
		public lkp_text_255_1?:string, 
		public lkp_text_255_2?:string, 
		public lkp_long_1?:number, 
		public lkp_long_2?:number, 
		public lkp_long_3?:number, 
		public lkp_long_4?:number, 
		public lkp_double_1?:number, 
		public lkp_double_2?:number, 
		public lkp_double_3?:number, 
		public lkp_boolean_1?:number, 
		public lkp_boolean_2?:number, 
		public lkp_boolean_3?:number, 
		public lkp_memo_1?:string, 
		public lkp_ole_1?:number, 
		public lkp_switches?:number){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblLookups{ return super.Table; }

 
}




export class TblLink extends TableBase {

  public rows:Array<TblLinkRow> = [];

  public tableFieldPrefix="lnk_";
	private _tableLinks:Array<string>=[
  "lnk_chi_id->chi"
];
	private _links:Array<any>=[
  {
    "local_field": "lnk_chi_id",
    "child_code": "chi",
    "link_type": "1to1"
  }
];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="lnk";

	this.columns.push(new ColumnInfo('lnk_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_par_id', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_chi_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_code', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_desc', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_notes', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('lnk_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('lnk_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblLinkRow):TblLinkRow
  {
    return super.Add(row);
  }

  NewRow():TblLinkRow{return new TblLinkRow();}
  GetRows():Array<TblLinkRow>{return this.rows;}
  public set currentRow(value:TblLinkRow){super.__currentRow(value);}
  public get currentRow():TblLinkRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblLinkRow>{return super.__dirtyRows();}
  public get newRows():Array<TblLinkRow>{return super.__newRows();}

  
}

export class TblLinkRow extends TableRowBase{
	constructor(
		public lnk_id?:number, 
		public lnk_par_id?:number, 
		public lnk_chi_id?:number, 
		public lnk_code?:string, 
		public lnk_desc?:string, 
		public lnk_notes?:string, 
		public lnk_created?:Date, 
		public lnk_created_by?:string, 
		public lnk_updated?:Date, 
		public lnk_updated_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblLink{ return super.Table; }



	private get _p1():TblChildRow { return this.ChildRow('chi','lnk_chi_id',-1);}
	private _g1(fn:string):any { return this._p1? this._p1[fn] : null}

 // cols count : 3, nostamp
	public get chi_code():string{return this._g1('chi_code')}
	public set chi_code(value:string) { this._p1.chi_code = value}

	public get chi_desc():string{return this._g1('chi_desc')}
	public set chi_desc(value:string) { this._p1.chi_desc = value}

	public get chi_notes():string{return this._g1('chi_notes')}
	public set chi_notes(value:string) { this._p1.chi_notes = value}

 
}




export class TblParent extends TableBase {

  public rows:Array<TblParentRow> = [];

  public tableFieldPrefix="par_";
	private _tableLinks:Array<string>=[
  "lnk|lnk_par_id",
  "chib|chib_par_id"
];
	private _links:Array<any>=[
  {
    "foreign_field": "lnk_par_id",
    "child_code": "lnk",
    "link_type": "1tom"
  },
  {
    "foreign_field": "chib_par_id",
    "child_code": "chib",
    "link_type": "1tom"
  },
  {
    "child_code": "lkp",
    "link_type": "lookup",
    "local_field": "par_lkp_id_a",
    "fields": "lkp_desc_a,lkp_desc_b",
    "prefix": "lkpa",
    "group_key": 138
  },
  {
    "child_code": "lkp",
    "link_type": "lookup",
    "local_field": "par_lkp_id_b",
    "prefix": "lkpb",
    "group_key": 118
  }
];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="par";

	this.columns.push(new ColumnInfo('par_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_code', 'string', 'Code', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_desc', 'string', 'Description', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_notes', 'string', 'Parent Notes', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('par_active', 'boolean', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_num_int', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_num_dbl', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_num_rad', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_txt_rad', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_date', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_updated_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_lkp_id_a', 'number', 'User Parameters', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('par_lkp_id_b', 'string', 'Document Type', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblParentRow):TblParentRow
  {
    return super.Add(row);
  }

  NewRow():TblParentRow{return new TblParentRow();}
  GetRows():Array<TblParentRow>{return this.rows;}
  public set currentRow(value:TblParentRow){super.__currentRow(value);}
  public get currentRow():TblParentRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblParentRow>{return super.__dirtyRows();}
  public get newRows():Array<TblParentRow>{return super.__newRows();}

  
}

export class TblParentRow extends TableRowBase{
	constructor(
		public par_id?:number, 
		public par_code?:string, 
		public par_desc?:string, 
		public par_notes?:string, 
		public par_active?:boolean, 
		public par_num_int?:number, 
		public par_num_dbl?:number, 
		public par_num_rad?:number, 
		public par_txt_rad?:string, 
		public par_date?:Date, 
		public par_created?:Date, 
		public par_created_by?:string, 
		public par_updated?:Date, 
		public par_updated_BY?:string, 
		public par_lkp_id_a?:number, 
		public par_lkp_id_b?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblParent{ return super.Table; }



	private get _p3():TblLookupRow { return this.ChildRow('lkp','par_lkp_id_a',138);}
	private _g3(fn:string):any { return this._p3? this._p3[fn] : null}

 // cols count : 2, lkp_desc_a,lkp_desc_b
	public get lkpa_lkp_desc_a():number{return this._g3('lkp_desc_a')}
	public get lkpa_lkp_desc_b():number{return this._g3('lkp_desc_b')}


	private get _p4():TblLookupRow { return this.ChildRow('lkp','par_lkp_id_b',118);}
	private _g4(fn:string):any { return this._p4? this._p4[fn] : null}

 // cols count : 21, nostamp
	public get lkpb_lkp_grp_id():number{return this._g4('lkp_grp_id')}
	public get lkpb_lkp_desc_a():number{return this._g4('lkp_desc_a')}
	public get lkpb_lkp_desc_b():number{return this._g4('lkp_desc_b')}
	public get lkpb_lkp_order():number{return this._g4('lkp_order')}
	public get lkpb_lkp_text_50_1():string{return this._g4('lkp_text_50_1')}
	public get lkpb_lkp_text_50_2():string{return this._g4('lkp_text_50_2')}
	public get lkpb_lkp_text_255_1():string{return this._g4('lkp_text_255_1')}
	public get lkpb_lkp_text_255_2():string{return this._g4('lkp_text_255_2')}
	public get lkpb_lkp_long_1():number{return this._g4('lkp_long_1')}
	public get lkpb_lkp_long_2():number{return this._g4('lkp_long_2')}
	public get lkpb_lkp_long_3():number{return this._g4('lkp_long_3')}
	public get lkpb_lkp_long_4():number{return this._g4('lkp_long_4')}
	public get lkpb_lkp_double_1():number{return this._g4('lkp_double_1')}
	public get lkpb_lkp_double_2():number{return this._g4('lkp_double_2')}
	public get lkpb_lkp_double_3():number{return this._g4('lkp_double_3')}
	public get lkpb_lkp_boolean_1():number{return this._g4('lkp_boolean_1')}
	public get lkpb_lkp_boolean_2():number{return this._g4('lkp_boolean_2')}
	public get lkpb_lkp_boolean_3():number{return this._g4('lkp_boolean_3')}
	public get lkpb_lkp_memo_1():string{return this._g4('lkp_memo_1')}
	public get lkpb_lkp_ole_1():number{return this._g4('lkp_ole_1')}
	public get lkpb_lkp_switches():number{return this._g4('lkp_switches')}
 
}




export class TblPolarReports extends TableBase {

  public rows:Array<TblPolarReportRow> = [];

  public tableFieldPrefix="ec_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="polar";

	this.columns.push(new ColumnInfo('ec_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_customer', 'string', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_date', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_folder', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_svc_a', 'boolean', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_svc_b', 'boolean', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_filename', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_mode', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_role', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_processed', 'boolean', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_complete', 'boolean', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ec_summary', 'boolean', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblPolarReportRow):TblPolarReportRow
  {
    return super.Add(row);
  }

  NewRow():TblPolarReportRow{return new TblPolarReportRow();}
  GetRows():Array<TblPolarReportRow>{return this.rows;}
  public set currentRow(value:TblPolarReportRow){super.__currentRow(value);}
  public get currentRow():TblPolarReportRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblPolarReportRow>{return super.__dirtyRows();}
  public get newRows():Array<TblPolarReportRow>{return super.__newRows();}

  
}

export class TblPolarReportRow extends TableRowBase{
	constructor(
		public ec_id?:number, 
		public ec_customer?:string, 
		public ec_date?:Date, 
		public ec_folder?:string, 
		public ec_svc_a?:boolean, 
		public ec_svc_b?:boolean, 
		public ec_filename?:string, 
		public ec_mode?:string, 
		public ec_role?:string, 
		public ec_processed?:boolean, 
		public ec_complete?:boolean, 
		public ec_summary?:boolean){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblPolarReports{ return super.Table; }

 
}




export class TblUserParams extends TableBase {

  public rows:Array<TblUserParamRow> = [];

  public tableFieldPrefix="uprm_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="uprm";

	this.columns.push(new ColumnInfo('uprm_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_user_id', 'number', '', '', -1, 0, 0, 0, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_type_lkp_id', 'number', '', '', -1, 1, -1, 1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_value_lkp_id', 'number', '', '', -1, 2, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_value_text', 'string', '', '', -1, 3, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_locked', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('uprm_locked_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
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
		public uprm_id?:number, 
		public uprm_user_id?:number, 
		public uprm_type_lkp_id?:number, 
		public uprm_value_lkp_id?:number, 
		public uprm_value_text?:string, 
		public uprm_created?:Date, 
		public uprm_created_by?:string, 
		public uprm_updated?:Date, 
		public uprm_updated_by?:string, 
		public uprm_locked?:Date, 
		public uprm_locked_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblUserParams{ return super.Table; }

 
}




export class TblUsers extends TableBase {

  public rows:Array<TblUserRow> = [];

  public tableFieldPrefix="user_";
	private _tableLinks:Array<string>=[
  "uprm|uprm_user_id"
];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>,public parentTable?:any) { 
    super(http, apiUrl, parentTable); 
    
    this.derivedTable = this;

    this.tableCode="user";

	this.columns.push(new ColumnInfo('user_id', 'number', '', '', 0, -1, -1, -1, -1, false, true, false, this));
	this.columns.push(new ColumnInfo('user_name', 'string', '', '', -1, 0, -1, 0, -1, false, true, false, this));
	this.columns.push(new ColumnInfo('user_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('user_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    if(parentTable!=undefined) parentTable.AddChildTable(this);
    this.InitializeTable();

  }

  Add(row?:TblUserRow):TblUserRow
  {
    return super.Add(row);
  }

  NewRow():TblUserRow{return new TblUserRow();}
  GetRows():Array<TblUserRow>{return this.rows;}
  public set currentRow(value:TblUserRow){super.__currentRow(value);}
  public get currentRow():TblUserRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUserRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUserRow>{return super.__newRows();}

  
}

export class TblUserRow extends TableRowBase{
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
