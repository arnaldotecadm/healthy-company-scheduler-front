import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestInterceptor } from './auth/request.interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true
    }
]
})
export class CoreModule { }
