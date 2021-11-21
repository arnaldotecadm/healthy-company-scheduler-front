import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SubArea } from './subarea.interface';
import { SubAreaService } from './subarea.service';

@Injectable({ providedIn: 'root' })
export class SubAreaResolver implements Resolve<SubArea> {
  constructor(private service: SubAreaService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return this.service.getAll();
  }
}
