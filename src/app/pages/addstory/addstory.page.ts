/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { StoryPage } from '../story/story.page';

@Component({
  selector: 'app-addstory',
  templateUrl: './addstory.page.html',
  styleUrls: ['./addstory.page.scss'],
})
export class AddstoryPage implements OnInit {
  @Input() userid;
  description:string="";
  fileInput:any;
  constructor(private http:HttpClient,private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  imageOnClick(event:any){
    this.fileInput = event.target.files[0]
    console.log(this.fileInput)
  }

  submit(){
    const form = new FormData();
    console.log("user ID from tabb" + this.userid)
    form.append('user',this.userid);
    form.append("story",this.fileInput);
    this.saveStroyToDb(form).subscribe(data => {
      alert("successfully added");
      console.log(data);
      this.back();
    })
  }

  saveStroyToDb(form:FormData){
    return this.http.post("http://localhost:5000/api/addstory",form);
  }
  async back(){
    const post = await this.modalCtrl.create({
      component: StoryPage,
    });
    await post.present();
  }

}
