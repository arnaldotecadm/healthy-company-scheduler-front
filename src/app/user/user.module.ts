import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'app/shared/component/alert/alert.module';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule
  ]
})
export class UserModule { }
