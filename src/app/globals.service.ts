import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

  private data=[{nama: "Informatika", deskripsi: "Pemrograman", nomor: 0}];
  private jumlah = 1;

  public getJumlah(){
    return this.jumlah;
  }

  public constructor() { }

  public getData(){
    return this.data;
  }

  public addData(namaIn, deskripsiIn){
    this.data.push({nama: namaIn, deskripsi: deskripsiIn, nomor: this.jumlah});
    this.jumlah++;
  }

  public setData(dataIn){
    this.data = dataIn;
  }
}