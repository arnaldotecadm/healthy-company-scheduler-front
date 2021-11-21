import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Area } from './area.interface';
import { AreaService } from './area.service';

@Injectable({ providedIn: 'root' })
export class AreaResolver implements Resolve<Area> {
  constructor(private service: AreaService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.service.getAll();
  }
}
