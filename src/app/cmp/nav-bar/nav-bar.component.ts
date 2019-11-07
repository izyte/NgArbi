import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input()title:string="";
  @Input()icon:string="";
  @Input()backColor:string="";
  
  ngOnInit() {
  }

  iconClass(){
    let classes = {};
    classes[this.icon]=true;
    return classes;
  }

}
