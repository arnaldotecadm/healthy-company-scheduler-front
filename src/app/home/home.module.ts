import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'app/shared/vmessage/vmessage.module';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalAgendamentoComponent } from './home-page/modal-agendamento/modal-agendamento.component';
import { ConfirmDialogModule } from 'app/shared/confirm-dialog/confirm-dialog.module';

@NgModule({
  declarations: [SigninComponent, HomePageComponent, ModalAgendamentoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FullCalendarModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    ConfirmDialogModule,
  ],
  exports: [SigninComponent, HomePageComponent],
})
export class HomeModule {}
