/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'
import { AddstoryPage } from '../addstory/addstory.page';
import { SinglestoryPage } from '../singlestory/singlestory.page';
@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {

  slideOpts = {};
  stories:any;
  buttonValue = 'grid';
  buttonItems: any[] = [];
 // posts: any[] = [];

  constructor(private http:HttpClient , private modalCtrl : ModalController) { }
  storiesValue: any;
  ngOnInit() {

    this.stories = [
      { name: 'New' },
      { name: 'Android', src: 'assets/imgs/circles/android.png' },
      { name: 'Angular', src: 'assets/imgs/circles/angular.png' },
      { name: 'Ionic', src: 'assets/imgs/circles/ionic.png' },
      { name: 'Nodejs', src: 'assets/imgs/circles/nodejs.png' },
      { name: 'Laravel', src: 'assets/imgs/circles/laravel.png' },
      { name: 'IOS', src: 'assets/imgs/circles/ios.png' },
      { name: 'Php', src: 'assets/imgs/circles/php.png' },
    ];
    this.slideOpts = {
      slidesPerView: this.checkScreen(),
      slideShadows: true,
      speed:1000
    };
    this.buttonItems = [
      {value: 'grid', icon: 'grid'},
      {value: 'reels', icon: 'film'},
      {value: 'photos', icon: 'images'},
    ];
    // this.posts = [
    //   { id: 1, url: 'assets/imgs/posts/1.jpg'},
    //   { id: 2, url: 'assets/imgs/posts/2.jpg'},
    //   { id: 3, url: 'assets/imgs/posts/3.png'},
    //   { id: 4, url: 'assets/imgs/posts/4.png'},
    //   { id: 9, url: 'assets/imgs/posts/5.jpg'},
    //   { id: 6, url: 'assets/imgs/posts/6.png'},
    //   { id: 5, url: 'assets/imgs/posts/7.png'},
    //   { id: 8, url: 'assets/imgs/posts/8.jpg'},
    //   { id: 7, url: 'assets/imgs/posts/9.png'},
    //   { id: 10, url: 'assets/imgs/posts/10.png'},
    //   { id: 11, url: 'assets/imgs/posts/11.png'},
    //   { id: 12, url: 'assets/imgs/posts/12.png'},
    // ];

    this.getStories("62aeeed26b0657ec29e03f84").subscribe((data:any)=>{
      this.storiesValue = data.data;
      console.log(typeof data);
      console.log(this.storiesValue);
    })
  }

  getStories(id){
    return this.http.get('http://localhost:5000/api/getstory/'+id);
  }
  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(5.5);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(5.5);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(6.5);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(7.5);
      case 901 <= innerWidth:
        return this.checkLength(9.5);
    }
  }

  checkLength(val) {
    let length = this.stories.length;
    return val < length ? val : length;
  }

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

  async viewStory(url:string){
    // console.log(this.storiesValue.storyUrl);
    const postselected = await this.modalCtrl.create({
      component: SinglestoryPage,
      componentProps: {postselected: url},
    });
    await postselected.present();
  }

// async showPost(post: any){
//     console.log('parameter to child '+post);
//     const postselected = await this.modalCtrl.create({
//       component: SinglepostviewPage,
//       componentProps: {postselected: post},
//     });
//     await postselected.present();
//   }

async addStory(){
    const addstory = await this.modalCtrl.create({
      component:AddstoryPage,
      componentProps:{userid:"62aee4e2f6dd4af8ea2fdbbf"}
    })
    await addstory.present();
}


}
