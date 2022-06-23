/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  selectTab: any;
  token:any;
  tokenDetails:any;
  constructor() { }

  ngOnInit() {
    console.log('Token: ', localStorage.getItem('token'));

    this.token = localStorage.getItem('token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
      localStorage.setItem('tokendetails',this.tokenDetails);
      localStorage.setItem('hello','hello');
      console.log(localStorage.getItem('hello')+'\n '+localStorage.getItem('tokendetails'));
    }
  }

  setCurrentTab(event) {
    console.log(event);
   // this.selectTab = this.tabs.getSelected();
  }

}
