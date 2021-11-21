import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';
import { Observable } from 'rxjs';
import { Local } from '../local.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-locais',
  templateUrl: './lista-locais.component.html',
  styleUrls: ['./lista-locais.component.css'],
})
export class ListaLocaisComponent implements OnInit {
  public locais$: Observable<Local[]>;

  constructor(private router: Router, private service: LocalService) {}

  ngOnInit() {
    this.locais$ = this.service.getAll();
  }

  addNewEntry() {
    this.router.navigate(['/local']);
  }

  edit(localId: number) {
    this.router.navigate(['/local', { localId: localId }]);
  }

  remove(localId: number) {
    if (confirm('Você deseja realmente excluir o Local selecionado?')) {
      this.locais$ = this.service.removeById(localId).pipe(
        switchMap(() => {
          return this.service.getAll();
        })
      );
    }
  }
}
