import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  nama = "";
  deskripsi = "";
  data;

  constructor(public globals:GlobalsService) { }

  ngOnInit() {
    this.data = this.globals.getData();
  }

  input() {
    this.globals.addData(this.nama, this.deskripsi);
  }
}