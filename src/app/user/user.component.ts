import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenssageService } from 'app/shared/notification/notification.service';
import { Subject } from 'rxjs';
import { Usuario } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public formulario: FormGroup;
  public usuario$: Subject<Usuario> = new Subject<Usuario>();

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    this.construirFormulario();

    const id = this.route.snapshot.paramMap.get('usuarioId');

    if (!id) {
      return;
    }

    this.userService.getById(id ? +id : 0).subscribe((usuario) => {
      this.formulario.patchValue(usuario);
      this.usuario$.next(usuario);
    });
  }

  cancelUpdate() {
    this.router.navigate(['/user-list']);
  }

  updateUser() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }
    this.userService
      .salvarRegistro(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        console.log('Resposta do servidor: ' + resposta.message);
        this.router.navigate(['/user-list']);
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      company: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      superUser: [],
      lastName: [''],
      address: [''],
      city: [''],
      country: [''],
      postalCode: [''],
      consideration: [''],
      software: [''],
    });
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }
}
