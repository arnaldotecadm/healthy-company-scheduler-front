import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubArea } from '../subarea.interface';
import { SubAreaService } from '../subarea.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-subarea-lista',
  templateUrl: './subarea-lista.component.html',
  styleUrls: ['./subarea-lista.component.css'],
})
export class SubareaListaComponent implements OnInit {
  public subAreas$: Observable<SubArea[]>;

  constructor(private router: Router, private service: SubAreaService) {}

  ngOnInit() {
    this.subAreas$ = this.service.getAll();
  }

  addNewEntry() {
    this.router.navigate(['/sub-area']);
  }

  edit(id: number) {
    this.router.navigate(['/sub-area', { id: id }]);
  }

  remove(id: number) {
    if (confirm('Você deseja realmente excluir a SubArea selecionado?')) {
      this.subAreas$ = this.service.removeById(id).pipe(
        switchMap(() => {
          return this.service.getAll();
        })
      );
    }
  }
}
