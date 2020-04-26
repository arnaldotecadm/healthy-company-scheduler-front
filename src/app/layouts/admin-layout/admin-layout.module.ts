import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { AplicativoModule } from "app/aplicativo/aplicativo.module";
import { UserModule } from "app/user/user.module";
import { HomeModule } from "app/home/home.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    AplicativoModule,
    UserModule,
    HomeModule,
  ],
  declarations: [],
})
export class AdminLayoutModule {}
