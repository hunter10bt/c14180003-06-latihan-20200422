import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  nama = "";
  deskripsi = "";

  constructor(public globals:Globals) { }

  ngOnInit() {
  }

  input() {
    var add = {"Nama": this.nama, "Deskripsi": this.deskripsi};

    this.globals.daftar.push(add);
  }
}