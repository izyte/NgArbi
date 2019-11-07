import { Component } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppDataset } from './svc/app-dataset.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngarbi';
  constructor(public ds:AppDataset) { }
}
