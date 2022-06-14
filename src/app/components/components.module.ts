import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabbarComponent} from './tabbar/tabbar.component'
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [TabbarComponent],
  exports: [TabbarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
