import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { AppListComponent } from 'app/aplicativo/app-list/app-list.component';
import { SoftwareComponent } from 'app/aplicativo/software/software.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { 
        path: 'user',           
        component: UserComponent 
    },
    { path: 'table',          component: TablesComponent },
    { path: 'app-list',       component: AppListComponent },
    { path: 'software',       component: SoftwareComponent },
];
