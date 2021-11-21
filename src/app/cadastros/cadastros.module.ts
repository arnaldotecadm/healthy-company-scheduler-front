import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local/local.component';
import { ListaLocaisComponent } from './local/lista-locais/lista-locais.component';
import { VMessageModule } from 'app/shared/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from './area/area.component';
import { AreaListaComponent } from './area/area-lista/area-lista.component';
import { SubareaComponent } from './subarea/subarea.component';
import { SubareaListaComponent } from './subarea/subarea-lista/subarea-lista.component';
import { RegrasAgendamentoComponent } from './regras-agendamento/regras-agendamento.component';

@NgModule({
  declarations: [
    LocalComponent,
    ListaLocaisComponent,
    AreaComponent,
    AreaListaComponent,
    SubareaComponent,
    SubareaListaComponent,
    RegrasAgendamentoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
  exports: [LocalComponent, AreaComponent],
})
export class CadastrosModule {}
