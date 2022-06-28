import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewtoappPageRoutingModule } from './newtoapp-routing.module';

import { NewtoappPage } from './newtoapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewtoappPageRoutingModule
  ],
  declarations: [NewtoappPage]
})
export class NewtoappPageModule {}
