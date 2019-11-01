import { ColumnInfo } from '../mod/app-column.model';
export class TableRowBase{

    public _parentTable:any=null;
    public _requestDate:Date = null;

    private _isDeleting:boolean=false;
    private _isEditing:boolean=false;
    private _isDirty:boolean=false;
    private _isPristine:boolean=false;
    private _isPending:boolean=true;

    private _backupData:any=null;

    public _newId:number=undefined;

    constructor(){

    }

    set isEditing(value:boolean){
        this._isEditing = value;
    }
    get isEditing():boolean{
        return this._isEditing;
    }

    set isPending(value:boolean){
        this._isPending = value;
    }
    get isPending():boolean{
        return this._isPending;
    }    

    set isDeleting(value:boolean){
        this._isDeleting = value;
    }
    get isDeleting():boolean{
        return this._isDeleting;
    }



    set isPristine(value:boolean){
        this._isPristine = value;
        this._isDirty = !this._isPristine;
    }

    get Table():any{
        return this._parentTable;
    }

    get keyVal():any{
        return this.Table.keyCol ? this[this.Table.keyCol.name] : null;
    }

    get isDirty():boolean{
        if(this.noCurrent) return false;
        let withChanges:boolean = false;
        if(this._backupData != null){
            let cols:Array<ColumnInfo> = this._parentTable.columns;
            cols.forEach((c:ColumnInfo)=>{
              if(c.IsForRestore && !withChanges){
                  if(this[c.name] != this._backupData[c.name]) withChanges = true;
              }
            })

            if(!withChanges && this._parentTable.childrenTable!=null){
                // check if any of the children was changed
                for(var tblKey in this._parentTable.childrenTable){
                    // get child table object from the collection of tables
                    // stored in childrenTable property
                    let tblChild:any = this._parentTable.childrenTable[tblKey];
                    // get current row key field value which will be used to
                    // to filter for dirty rows under the current row
                    let rowKey:number = this[this._parentTable.keyFields[0].name];
                    // if child table groupFields definition is defined...
                    if(tblChild.keyGroupFields!=null){
                        // child table with group key field(s) exist.
                        // get dirty rows bey group id
                        let childDirtyRows:Array<any> = tblChild.__dirtyRows(rowKey)
                        withChanges = (childDirtyRows.length!=0);
                    }
                    if(withChanges) break;
                }
            }
        }

        return withChanges;
    }

    get isCurrent():boolean{
        if(this.noCurrent) return false;
        
        let row:any = this._parentTable.currentRow;
        let keyField:string = this._parentTable.keyCol.name;

        return this[keyField] == row[keyField];
    }

    get noParent():boolean{
        return this._parentTable == null;
    }

    get noBackup():boolean{
        return this._backupData == null;
    }

    get backupData():any{
        return this._backupData;
    }

    get noCurrent():boolean{
        if(this.noParent) return false;
        return this._parentTable.noCurrent;
    }

    get toPostData():any{
        if(this.isDirty){
            let ret:any = {};

            // include last request date
            ret["_requestDate"] = this._requestDate;

            // include key field(s)
            this._parentTable.keyFields.forEach((c:ColumnInfo)=>{
                ret[c.name] = this[c.name];
            });

            // capture only the data that were changed
            this._parentTable.forRestoreColumns.forEach((c:ColumnInfo)=>{
                if(this[c.name] != this._backupData[c.name]){
                    ret[c.name] = this[c.name];
                }
            });

            return ret;
        }else{
            return null;
        }
    }

    SetAsCurrent():void{
        if(!this._parentTable) return;
        this._parentTable.__currentRow(this);
    }

    Post():void{
        // sve individual record
        if(!this._parentTable) return;
        this._parentTable.Post(this);
    }

    CaptureDataForPosting(){
        if(this._parentTable==null){
            console.log("No table attached to the data row");
        }else{
            console.log("_requestDate:",this._requestDate);
            this._parentTable.columns.forEach((c:ColumnInfo) => {
                if(c.keyPosition==-1 && !c.IsStampField)
                    console.log(c.name + ": ",this[c.name]);
            });
        }
    }

    UnSetRestoreValues(){
        // check if restored values are still necessary to be on the current row.
        // if no changes were made on the current record, this._backupData must be set to null
        if(this.noBackup) return;
        if(this.noParent) {
            this._backupData = null;
            return;
        }

        // if no changes were made, set restore data (this._backupData) to null
        if(!this.isDirty) this._backupData = null;
    }

    get childChanged():boolean{
        if(this._parentTable.childrenTable==null) return false;
        return false;
    }

    private ChildTable(childTableCode:string):any{
        let child:any=null;
        if(this._parentTable.childrenTable)child = this._parentTable.ChildTable(childTableCode);
        return child;
    }

    private _ChildRow:any={};
    public ChildRow(childTableCode:string,localField?:string, groupId?:number, reset?:boolean):any{
        /**
         * Get one to one record from the child table
         */

        if(localField==undefined)localField = "";
        if(groupId==undefined)groupId = -1;
        
        if(reset == undefined)reset = false;

        let childRowKey:string = childTableCode + (localField.length!=0 ? "_" + localField : "");

        let ret:any = {};
        let row:any = this._ChildRow[childRowKey];
        if(!row || reset || this.isCurrent){
            let childTable:any = this._parentTable.tables[childTableCode];

            // localField was not supplied therefore lookup it up from the 
            // table's links definitions
            if(localField.length==0) {
                let firstLink:any = this._parentTable.FirstLink;
                if(firstLink)localField=firstLink.local_field;
            }
            if(localField.length!=0){
                ret = childTable.Item(this[localField], groupId);
            }else{
                ret =null;
            }
            
            this._ChildRow[childRowKey] = ret; //!!! for caching !!!

            if(!ret){
                if(groupId!=-1){
                    // group id is supplied, retreive all records belonging to the group
                    childTable.GetRowsByGroup(groupId);
                }else{
                    // group is is not suppiied, get individual record...
                    ret =childTable.GetRowById(this[localField]);
                }
            }
        }else{
            //if(childRowKey!="chi")console.log("childRowKey",childRowKey);
            ret = row;
        }

        //if(!ret)console.log("ret:",ret,"Group ID",groupId,this._parentTable.tables);

        return ret;
    }

    public ChildRow_Obsolete(childTableCode:string,localField?:string, groupId?:number, reset?:boolean):any{
        /**
         * Get one to one record from the child table
         */

        if(localField==undefined)localField = "";
        if(groupId==undefined)groupId = -1;
        
        if(reset == undefined)reset = false;

        let childRowKey:string = childTableCode + (localField.length!=0 ? "_" + localField : "");

        let ret:any = {};
        let row:any = this._ChildRow[childRowKey];
        if(!row || reset){
            let childTable:any = this._parentTable.tables[childTableCode];

            // localField was not supplied therefore lookup it up from the 
            // table's links definitions
            if(localField.length==0) {
                let firstLink:any = this._parentTable.FirstLink;
                if(firstLink)localField=firstLink.local_field;
            }
            if(localField.length!=0){
                ret = childTable.Item(this[localField], groupId);
            }else{
                ret =null;
            }
            this._ChildRow[childRowKey] = ret;

            if(!ret && groupId!=-1)childTable.GetRowsByGroup(groupId);
        }else{
            //if(childRowKey!="chi")console.log("childRowKey",childRowKey);
            ret = row;
        }

        //if(!ret)console.log("ret:",ret,"Group ID",groupId,this._parentTable.tables);

        return ret;
    }

    public ChildRows(childTableCode?:string):Array<any>{
        /** "lnk|lnk_par_id", "chib|chib_par_id", GetRowsByGroup() ***/
        let ret:Array<any>=[];
        let child:any=this.ChildTable(childTableCode);

        // GetRowsByGroup is used to get rows based on the 
        // parent key - to - child group definition
        if(child) ret = child.GetRowsByGroup();
        return ret;
    }    

    SetRestoreValues(){
        // if table row is not yet attached to its parent table
        if(this.noParent) return;
        if(!this.noBackup) return;  // do not overwrite previously saved retore value

        // set _backupData to an empty object;
        this._backupData = {};
        if(this._parentTable.childrenTable!=null){
            this._backupData["_childChanged"] = (e)=>{
                return e;
            };
        }
        this._parentTable.columns.forEach((c:ColumnInfo) => {
            // backup non-stamp fields defined in the columns property
            if(c.IsForRestore) this._backupData[c.name] = this[c.name];
        });

    }

    Restore(){
        if(!this.isDirty) return;
        if(this._parentTable.childrenTable!=null){
            // restore changed rows
        }
        this._parentTable.forRestoreColumns.forEach((c:ColumnInfo)=>{
            this[c.name] = this._backupData[c.name];
        });
    }

    Delete():void{

    }

    SetNewId(){
        if(this._parentTable == null || this._newId != undefined) return;
     }


}