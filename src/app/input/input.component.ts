import { Component, OnInit } from '@angular/core';
import {Globals} from './globals'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  nama = "";
  deskripsi = "";

  constructor() { }

  ngOnInit() {
  }

  input() {
    this.nama = "";
    this.deskripsi = "";
  }
}