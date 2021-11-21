import { Routes } from '@angular/router';
import { AreaListaComponent } from 'app/cadastros/area/area-lista/area-lista.component';
import { AreaComponent } from 'app/cadastros/area/area.component';
import { AreaResolver } from 'app/cadastros/area/area.resolver';
import { ListaLocaisComponent } from 'app/cadastros/local/lista-locais/lista-locais.component';
import { LocalComponent } from 'app/cadastros/local/local.component';
import { LocalResolver } from 'app/cadastros/local/local.resolver';
import { SubareaListaComponent } from 'app/cadastros/subarea/subarea-lista/subarea-lista.component';
import { SubareaComponent } from 'app/cadastros/subarea/subarea.component';
import { SubAreaResolver } from 'app/cadastros/subarea/subarea.resolver';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { HomePageComponent } from 'app/home/home-page/home-page.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { UserComponent } from '../../user/user.component';
import { RegrasAgendamentoComponent } from 'app/cadastros/regras-agendamento/regras-agendamento.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    resolve: {
      locais: LocalResolver,
      areas: AreaResolver,
      subAreas: SubAreaResolver,
    },
  },
  { path: 'user', component: UserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'local', component: LocalComponent },
  { path: 'lista-locais', component: ListaLocaisComponent },
  { path: 'area', component: AreaComponent },
  { path: 'lista-areas', component: AreaListaComponent },
  { path: 'sub-area', component: SubareaComponent },
  { path: 'lista-sub-areas', component: SubareaListaComponent },
  { path: 'regras-agendamento', component: RegrasAgendamentoComponent },
];
