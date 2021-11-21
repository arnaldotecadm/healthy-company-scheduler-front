import { Local } from './local.interface';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalService } from './local.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalResolver implements Resolve<Local> {
  constructor(private service: LocalService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.service.getAll();
  }
}
