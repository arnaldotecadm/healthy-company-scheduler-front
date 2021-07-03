import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "app/shared/vmessage/vmessage.module";

@NgModule({
  declarations: [SigninComponent, HomePageComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
  exports: [SigninComponent, HomePageComponent],
})
export class HomeModule {}
