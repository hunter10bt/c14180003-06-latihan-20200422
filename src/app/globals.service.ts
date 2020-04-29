import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  private data=[{nama: "Informatika", deskripsi: "Pemrograman"}];

  public constructor() { }

  public getData(){
    return this.data;
  }

  public addData(namaIn, deskripsiIn){
    this.data.push({nama: namaIn, deskripsi: deskripsiIn});
  }
}