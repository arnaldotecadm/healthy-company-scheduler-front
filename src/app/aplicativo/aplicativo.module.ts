import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppListComponent } from './app-list/app-list.component';
import { AppListModule } from './app-list/app-list.module';
import { SoftwareComponent } from './software/software.component';
import { SoftwareModule } from './software/software.module';
import { UpdatesComponent } from './updates/updates.component';
import { UpdatesModule } from './updates/updates.module';

@NgModule({
  declarations: [],
  exports: [SoftwareComponent, AppListComponent, UpdatesComponent],
  imports: [CommonModule, SoftwareModule, AppListModule, UpdatesModule],
})
export class AplicativoModule {}
