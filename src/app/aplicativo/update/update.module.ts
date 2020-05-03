import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageModule } from 'app/shared/vmessage/vmessage.module';
import { UpdateComponent } from './update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [UpdateComponent],
  exports: [UpdateComponent],
  imports: [
    CommonModule,
    VMessageModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
})
export class UpdateModule {}
