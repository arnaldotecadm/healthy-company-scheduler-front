import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DetailByTypeComponent } from './detail-by-type.component';

@NgModule({
  declarations: [DetailByTypeComponent],
  exports: [DetailByTypeComponent],
  imports: [CommonModule, MatSelectModule],
})
export class DetailByTypeModule {}
