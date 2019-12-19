/***********************************************************************
* Automatically generated on 12/11/2019 10:11:30 PM
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

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="plnt";

	this.columns.push(new ColumnInfo('plnt_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_ctry_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_name', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_desc', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('plnt_population', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_area', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_area_pop', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_frac_pop', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_pop_dens_lpd_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_temp_amb', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_press_atm', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_ubsc', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_lbsc', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_ubbc', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_lbbc', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_ubecg', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_lbecg', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_ubecl', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_cofst_lbecl', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_updated_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('plnt_created_by', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

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
		public plnt_id?:number, 
		public plnt_ctry_id?:number, 
		public plnt_name?:string, 
		public plnt_desc?:string, 
		public plnt_population?:number, 
		public plnt_area?:number, 
		public plnt_area_pop?:number, 
		public plnt_frac_pop?:number, 
		public plnt_pop_dens_lpd_id?:number, 
		public plnt_temp_amb?:number, 
		public plnt_press_atm?:number, 
		public plnt_cofst_ubsc?:number, 
		public plnt_cofst_lbsc?:number, 
		public plnt_cofst_ubbc?:number, 
		public plnt_cofst_lbbc?:number, 
		public plnt_cofst_ubecg?:number, 
		public plnt_cofst_lbecg?:number, 
		public plnt_cofst_ubecl?:number, 
		public plnt_cofst_lbecl?:number, 
		public plnt_updated?:Date, 
		public plnt_updated_by?:string, 
		public plnt_created?:Date, 
		public plnt_created_by?:string){
    super();
 
  }

  // Returs the table object where the row is a member of.
  public get Table():TblPlants{ return super._Table(); }

 
}




export class TblUserPlant extends TableBase {

  public rows:Array<TblUserPlantRow> = [];

  public tableFieldPrefix="upln_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[
  {
    "local_field": "upln_plnt_id",
    "child_code": "plnt",
    "link_type": "1to1"
  }
];

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
    this.derivedTable = this;

    this.tableCode="upln";

	this.columns.push(new ColumnInfo('upln_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('upln_user_id', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('upln_plnt_id', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

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
  public get Table():TblUserPlant{ return super._Table(); }



	private get _p1():TblPlantsRow { return this.ChildRow('plnt','upln_plnt_id',-1);}
	private _g1(fn:string):any { return this._p1? this._p1[fn] : null}

 // cols count : 18, nostamp
	public get plnt_ctry_id():number{return this._g1('plnt_ctry_id')}
	public set plnt_ctry_id(value:number) { this._p1.plnt_ctry_id = value}

	public get plnt_name():string{return this._g1('plnt_name')}
	public set plnt_name(value:string) { this._p1.plnt_name = value}

	public get plnt_desc():string{return this._g1('plnt_desc')}
	public set plnt_desc(value:string) { this._p1.plnt_desc = value}

	public get plnt_population():number{return this._g1('plnt_population')}
	public set plnt_population(value:number) { this._p1.plnt_population = value}

	public get plnt_area():number{return this._g1('plnt_area')}
	public set plnt_area(value:number) { this._p1.plnt_area = value}

	public get plnt_area_pop():number{return this._g1('plnt_area_pop')}
	public set plnt_area_pop(value:number) { this._p1.plnt_area_pop = value}

	public get plnt_frac_pop():number{return this._g1('plnt_frac_pop')}
	public set plnt_frac_pop(value:number) { this._p1.plnt_frac_pop = value}

	public get plnt_pop_dens_lpd_id():number{return this._g1('plnt_pop_dens_lpd_id')}
	public set plnt_pop_dens_lpd_id(value:number) { this._p1.plnt_pop_dens_lpd_id = value}

	public get plnt_temp_amb():number{return this._g1('plnt_temp_amb')}
	public set plnt_temp_amb(value:number) { this._p1.plnt_temp_amb = value}

	public get plnt_press_atm():number{return this._g1('plnt_press_atm')}
	public set plnt_press_atm(value:number) { this._p1.plnt_press_atm = value}

	public get plnt_cofst_ubsc():number{return this._g1('plnt_cofst_ubsc')}
	public set plnt_cofst_ubsc(value:number) { this._p1.plnt_cofst_ubsc = value}

	public get plnt_cofst_lbsc():number{return this._g1('plnt_cofst_lbsc')}
	public set plnt_cofst_lbsc(value:number) { this._p1.plnt_cofst_lbsc = value}

	public get plnt_cofst_ubbc():number{return this._g1('plnt_cofst_ubbc')}
	public set plnt_cofst_ubbc(value:number) { this._p1.plnt_cofst_ubbc = value}

	public get plnt_cofst_lbbc():number{return this._g1('plnt_cofst_lbbc')}
	public set plnt_cofst_lbbc(value:number) { this._p1.plnt_cofst_lbbc = value}

	public get plnt_cofst_ubecg():number{return this._g1('plnt_cofst_ubecg')}
	public set plnt_cofst_ubecg(value:number) { this._p1.plnt_cofst_ubecg = value}

	public get plnt_cofst_lbecg():number{return this._g1('plnt_cofst_lbecg')}
	public set plnt_cofst_lbecg(value:number) { this._p1.plnt_cofst_lbecg = value}

	public get plnt_cofst_ubecl():number{return this._g1('plnt_cofst_ubecl')}
	public set plnt_cofst_ubecl(value:number) { this._p1.plnt_cofst_ubecl = value}

	public get plnt_cofst_lbecl():number{return this._g1('plnt_cofst_lbecl')}
	public set plnt_cofst_lbecl(value:number) { this._p1.plnt_cofst_lbecl = value}

 
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

  constructor(public http:HttpClient,public apiUrl:string, public tables?:Array<any>) { 
    super(http, apiUrl); 
    
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
  public get Table():TblUsers{ return super._Table(); }

 
}
