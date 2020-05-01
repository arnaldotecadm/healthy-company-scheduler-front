import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { UpdatesComponent } from './updates.component';

@NgModule({
  declarations: [UpdatesComponent],
  exports: [UpdatesComponent],
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
})
export class UpdatesModule {}
