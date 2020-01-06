export class AppCommonMethods{

    constructor(){

    }

    get productionMode():boolean{
        return  false;
    }

    
    public MSSince(from:any):number{
        // returns milliseconds from the reference indormation
        if(typeof(from)=="number"){
            // assume a millisecond from Jan 1970
            //return (msNow - from);
            return Date.now() - from;
        }else{
            // assume an earlier date
            let msNow:number = Date.now();
            return (msNow - from);
        }
    }

    public _cl(...args:Array<any>){
        // generic console log  method, shared accross components
        if(this.productionMode) return; // exit if already in production mode
        if(args.length==0) return;
        let disp:any = args[args.length-1];
        if(typeof(disp)=="boolean"){
            if(disp)console.log(args);
        }else{
            console.log(args);
        }
    }

    public cl(args:Array<any>){
        if(args.length==0) return;
        let disp:any = args[args.length-1];
        if(typeof(disp)=="boolean"){
            if(disp)console.log(args);
        }else{
            console.log(args);
        }
        
    }

    public isNullVal(val:any){
        return ((val + "") == "null");
    }

}