import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareComponent } from './software.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'app/shared/vmessage/vmessage.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [SoftwareComponent],
  exports: [SoftwareComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    MatExpansionModule,
  ],
})
export class SoftwareModule {}
