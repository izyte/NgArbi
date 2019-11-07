import { TableBase } from './../api/svc/app-common.datatable';
import { DatasetBase } from '../api/svc/app-common.dataset';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**Application tables *****/

@Injectable({
  providedIn: 'root'
})
export class AppDataset extends DatasetBase {

  APP_TITLE:string = "My Application";
  APP_ICON:string = "fa-id-card";

  NAV_BACK:string = "#2b579a";


  testRow:any = {
    "table":{

    },
    "plnt_id":1,
    "plnt_ctry_id":1,
    "plnt_name":"plant1",
    "plnt_desc":"This is just a test plant",
    "plnt_population":75,
    "plnt_area":88750,
    "plnt_area_pop":88750,
    "plnt_frac_pop":0.5,
    "plnt_pop_dens_lpd_id":1,
    "plnt_temp_amb":20,
    "plnt_press_atm":1,
    "plnt_cofst_ubsc":5,
    "plnt_cofst_lbsc":0.0005,
    "plnt_cofst_ubbc":0.5,
    "plnt_cofst_lbbc":0.1,
    "plnt_cofst_ubecg":100000,
    "plnt_cofst_lbecg":10,
    "plnt_cofst_ubecl":3000,
    "plnt_cofst_lbecl":30,
  }

  constructor(public http: HttpClient) { 
    super(http);
  }

  // setup aplication source api url
  public apiUrl:string = "http://localhost:6072/api/app";

  // Instantiate data tables start
  
  
  // Instantiate data tables end


  /************************** Application Specific Methods ******************************************/
  


}