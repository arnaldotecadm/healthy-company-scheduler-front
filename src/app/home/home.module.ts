import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'app/shared/vmessage/vmessage.module';
import { LbdModule } from 'app/lbd/lbd.module';

@NgModule({
  declarations: [
    SigninComponent, 
    HomePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    LbdModule
  ],
  exports:[
    SigninComponent, 
    HomePageComponent
  ]
})
export class HomeModule { }
