import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list.component';

@NgModule({
  declarations: [AppListComponent],
  exports: [AppListComponent],
  imports: [
    CommonModule
  ]
})
export class AppListModule { }
