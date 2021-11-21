import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Area } from './area.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaService } from './area.service';
import { MenssageService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  public formulario: FormGroup;
  public local$: Subject<Area> = new Subject<Area>();

  constructor(
    private router: Router,
    private service: AreaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    this.construirFormulario();

    const id = this.route.snapshot.paramMap.get('areaId');

    if (!id) {
      return;
    }

    this.service.getById(id ? +id : 0).subscribe((local) => {
      this.formulario.patchValue(local);
      this.local$.next(local);
    });
  }

  cancelUpdate() {
    this.router.navigate(['/lista-areas']);
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
        this.router.navigate(['/lista-areas']);
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
