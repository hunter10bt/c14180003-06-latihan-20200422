import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public globals:Globals) { }

  ngOnInit() {
  }

}