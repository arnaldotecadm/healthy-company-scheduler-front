import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'app/shared/component/alert/alert.module';
import { VMessageModule } from 'app/shared/vmessage/vmessage.module';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule,
    VMessageModule
  ]
})
export class UserModule { }
