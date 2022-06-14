import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';


import { ProfilePage } from './profile.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScanPageRoutingModule } from '../scan/scan-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    ComponentsModule,
    ScanPageRoutingModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
