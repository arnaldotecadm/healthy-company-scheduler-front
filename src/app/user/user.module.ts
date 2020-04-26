import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AlertModule } from "app/shared/component/alert/alert.module";
import { VMessageModule } from "app/shared/vmessage/vmessage.module";
import { UserListComponent } from "./user-list/user-list.component";

@NgModule({
  declarations: [UserComponent, UserListComponent],
  exports: [UserComponent, UserListComponent],
  imports: [CommonModule, ReactiveFormsModule, AlertModule, VMessageModule],
})
export class UserModule {}
