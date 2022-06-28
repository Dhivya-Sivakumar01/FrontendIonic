/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {Storage} from '@capacitor/storage';
@Component({
  selector: 'app-newtoapp',
  templateUrl: './newtoapp.page.html',
  styleUrls: ['./newtoapp.page.scss'],
})
export class NewtoappPage implements OnInit {

  onstructor() { }
  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 0,
    speed: 1000
  };
  randomColor:string="pink";
  hexDigit= ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9]
  async  setItem() {
    const cartValue = JSON.stringify([
      {
        id:1,
        product:'apple'
      },
      {
        id:2,
        product:'banana'
      }
    ])
    await Storage.set({
      key:'products',
      value:cartValue
    })
  }
  async getItem(){
    const products = await Storage.get({key:'products'});
    console.log(JSON.parse(products.value));
  }
  async removeItems(){
    await Storage.remove({key:'products'});
  }
  async getKeys(){
    const keys = await Storage.keys();
    console.log(keys);
  }
  async clearStorage(){
    await Storage.clear();
  }
  ChangeBgColor(){
    this.randomColor=this.randomColoFunction();
  }
  randomColoFunction() {
    var hex1 = this.hexDigit[Math.floor(Math.random() * this.hexDigit.length)];
    var hex2 = this.hexDigit[Math.floor(Math.random() * this.hexDigit.length)];
    var hex3 = this.hexDigit[Math.floor(Math.random() * this.hexDigit.length)];
    var hex4 = this.hexDigit[Math.floor(Math.random() * this.hexDigit.length)];
    var hex5 = this.hexDigit[Math.floor(Math.random() * this.hexDigit.length)];
    var hex6 = this.hexDigit[Math.floor(Math.random() * this.hexDigit.length)];
    return "#" + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;
  }
 async setString(key: string, value: string) {
    await Storage.set({ key, value });
}
async getString(key: string): Promise<{ value: any }> {
    return (await Storage.get({ key }));
}
async setObject(key: string, value: any) {
    await Storage.set({ key, value: JSON.stringify(value) });
}
async getObject(key: string): Promise<{ value: any }> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
}
async removeItem(key: string) {
    await Storage.remove({ key });
}
}
