import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppListComponent } from './app-list/app-list.component';
import { AppListModule } from './app-list/app-list.module';
import { SoftwareComponent } from './software/software.component';
import { SoftwareModule } from './software/software.module';
import { UpdateListComponent } from './update-list/update-list.component';
import { UpdateListModule } from './update-list/update-list.module';
import { UpdateComponent } from './update/update.component';
import { UpdateModule } from './update/update.module';

@NgModule({
  declarations: [],
  exports: [
    SoftwareComponent,
    AppListComponent,
    UpdateListComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    SoftwareModule,
    AppListModule,
    UpdateListModule,
    UpdateModule,
  ],
})
export class AplicativoModule {}
