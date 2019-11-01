export class AppCommonMethods{

    constructor(){

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

}