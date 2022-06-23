import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ProfilePage} from '../profile/profile.page'
import { TabsPage } from '../tabs/tabs.page';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  @Input() userid;
  format:string='';

  selectedFiles?: FileList;

  hidechooseProfile:boolean=true;
  
  username:string='';
  description:string='';

  isSelected: boolean=false;
  url: string | ArrayBuffer;
  inprogress:boolean=false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  showChooseProfile(){
    this.hidechooseProfile=false;
  }
  closechooseProfile(){
    this.hidechooseProfile=true;
    this.url='';
    this.isSelected=false;
  }

  async back(){
    const post = await this.modalCtrl.create({
      component: TabsPage,
    });
    await post.present();
  }

  saveProfilePost(){
    console.log(this.url);
    this.inprogress=true;
    
  }
  saveProfileData(){
    console.log(this.username);
    console.log(this.description);
    this.inprogress=true;

    
  }

  onChange(event: any) {

      const file = event.target.files && event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        if(file.type.indexOf('image')> -1){
          this.format = 'image';
        } else if(file.type.indexOf('video')> -1){
          this.format = 'video';
        }
        // eslint-disable-next-line @typescript-eslint/no-shadow
        reader.onload = (event) => {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          this.url = (<FileReader>event.target).result;
          this.isSelected=true;
        };
      }else{
        this.isSelected=false;
      }
    }
}
