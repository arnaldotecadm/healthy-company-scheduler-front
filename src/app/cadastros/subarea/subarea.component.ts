import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenssageService } from 'app/shared/notification/notification.service';
import { Subject } from 'rxjs';
import { SubArea } from './subarea.interface';
import { SubAreaService } from './subarea.service';

@Component({
  selector: 'app-subarea',
  templateUrl: './subarea.component.html',
  styleUrls: ['./subarea.component.css'],
})
export class SubareaComponent implements OnInit {
  public formulario: FormGroup;
  public local$: Subject<SubArea> = new Subject<SubArea>();

  constructor(
    private router: Router,
    private service: SubAreaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    this.construirFormulario();

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.service.getById(id ? +id : 0).subscribe((local) => {
      this.formulario.patchValue(local);
      this.local$.next(local);
    });
  }

  cancelUpdate() {
    this.router.navigate(['/lista-sub-areas']);
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
        this.router.navigate(['/lista-sub-areas']);
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
