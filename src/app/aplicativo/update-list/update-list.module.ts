import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { UpdateListComponent } from './update-list.component';

@NgModule({
  declarations: [UpdateListComponent],
  exports: [UpdateListComponent],
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
})
export class UpdateListModule {}
