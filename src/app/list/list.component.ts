import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: any; 

  constructor(public globals:GlobalsService) {
  }

  ngOnInit() {
    this.data = this.globals.getData();
  }

}