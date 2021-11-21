import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'app/user/user.interface';
import { UserService } from 'app/user/user.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users$: Observable<Usuario[]>;

  constructor(private router: Router, private userService: UserService) {}

  addNewUser() {
    this.router.navigate(['/user']);
  }

  edit(usuarioId: number) {
    this.router.navigate(['/user', { usuarioId: usuarioId }]);
  }

  remove(usuarioId: number) {
    if (confirm('Você deseja realmente excluir o Usuário selecionado?')) {
      this.users$ = this.userService.removeById(usuarioId).pipe(
        switchMap(() => {
          return this.userService.getAll();
        })
      );
    }
  }

  ngOnInit() {
    this.users$ = this.userService.getAll();
  }

  alert(val) {
    console.log(val);
  }
}
