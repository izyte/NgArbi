import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-det-plant',
  templateUrl: './det-plant.component.html',
  styleUrls: ['./det-plant.component.scss']
})
export class DetPlantComponent implements OnInit {

  public row:any = {
    "field0":"value 0",
    "field1":"value 1",
    "field2":"value 2"
  }

  constructor() { }

  ngOnInit() {
  }

}
