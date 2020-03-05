import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareComponent } from './software.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SoftwareComponent],
  exports:[SoftwareComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SoftwareModule { }
