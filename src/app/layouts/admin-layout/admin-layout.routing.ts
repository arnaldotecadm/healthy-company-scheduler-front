import { Routes } from '@angular/router';

import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { AppListComponent } from 'app/aplicativo/app-list/app-list.component';
import { SoftwareComponent } from 'app/aplicativo/software/software.component';
import { AuthGuard } from 'app/core/auth/auth.guard';
import { HomePageComponent } from 'app/home/home-page/home-page.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomePageComponent,
    canActivate: [AuthGuard]  },
    { 
        path: 'user',           
        component: UserComponent 
    },
    { path: 'table',          component: TablesComponent },
    { path: 'app-list',       component: AppListComponent },
    { path: 'software',       component: SoftwareComponent },
];
