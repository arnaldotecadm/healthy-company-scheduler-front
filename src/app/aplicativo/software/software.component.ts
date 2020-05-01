import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AplicativoService } from '../aplicativo.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss'],
})
export class SoftwareComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private aplicativoService: AplicativoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.construirFormulario();

    const id = this.route.snapshot.paramMap.get('softwareId');

    this.aplicativoService.getById(id ? +id : 0).subscribe((usuario) => {
      this.formulario.patchValue(usuario);
    });
  }

  updateNotes() {
    this.router.navigate([
      '/updates',
      { softwareId: this.route.snapshot.paramMap.get('softwareId') },
    ]);
  }

  listSoftwares() {
    this.router.navigate(['/app-list']);
  }

  updateSoftware() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }

    this.aplicativoService
      .salvarRegistro(this.formulario.getRawValue())
      .subscribe(() => {
        this.router.navigate(['/app-list']);
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      nickname: ['', Validators.required],
      publicKey: [{ value: '', disabled: true }],
      privateKey: [{ value: '', disabled: true }],
      urlUserManual: [''],
      emailContact: [''],
      mobileVersion: [''],
      active: [''],
      inMaintenance: [],
      consideration: ['', Validators.required],
    });
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }
}
