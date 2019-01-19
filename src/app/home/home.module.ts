import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { ContactComponent } from '../contact/contact.component';
import { DealsComponent } from '../deals/deals.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { CalenderComponent } from '../calender/calender.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    BottomBarComponent,
    ContactComponent,
    DealsComponent,
    NotificationsComponent,
    CalenderComponent
  ]
})

export class HomeModule { }
