import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Local } from './local.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalService } from './local.service';
import { MenssageService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
})
export class LocalComponent implements OnInit {
  public formulario: FormGroup;
  public local$: Subject<Local> = new Subject<Local>();

  constructor(
    private router: Router,
    private service: LocalService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    this.construirFormulario();

    const id = this.route.snapshot.paramMap.get('localId');

    if (!id) {
      return;
    }

    this.service.getById(id ? +id : 0).subscribe((local) => {
      this.formulario.patchValue(local);
      this.local$.next(local);
    });
  }

  cancelUpdate() {
    this.router.navigate(['/lista-locais']);
  }

  updateUser() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }
    this.service
      .salvarRegistro(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        console.log('Resposta do servidor: ' + resposta.message);
        this.router.navigate(['/lista-locais']);
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      identificacao: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: [''],
      observacao: [''],
    });
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }
}
