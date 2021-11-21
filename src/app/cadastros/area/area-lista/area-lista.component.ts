import { Component, OnInit } from '@angular/core';
import { Area } from '../area.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AreaService } from '../area.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-area-lista',
  templateUrl: './area-lista.component.html',
  styleUrls: ['./area-lista.component.css'],
})
export class AreaListaComponent implements OnInit {
  public areas$: Observable<Area[]>;

  constructor(private router: Router, private service: AreaService) {}

  ngOnInit() {
    this.areas$ = this.service.getAll();
  }

  addNewEntry() {
    this.router.navigate(['/area']);
  }

  edit(areaId: number) {
    this.router.navigate(['/area', { areaId: areaId }]);
  }

  remove(areaId: number) {
    if (confirm('Você deseja realmente excluir a Area selecionado?')) {
      this.areas$ = this.service.removeById(areaId).pipe(
        switchMap(() => {
          return this.service.getAll();
        })
      );
    }
  }
}
