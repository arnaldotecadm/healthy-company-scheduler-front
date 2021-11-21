import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrosModule } from 'app/cadastros/cadastros.module';
import { HomeModule } from 'app/home/home.module';
import { UserModule } from 'app/user/user.module';
import { AdminLayoutRoutes } from './admin-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    UserModule,
    HomeModule,
    CadastrosModule,
  ],
  declarations: [],
})
export class AdminLayoutModule {}
