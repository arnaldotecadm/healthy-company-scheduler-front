import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { AplicativoService } from '../aplicativo.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Software } from './software.interface';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private aplicativoService: AplicativoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.construirFormulario();
    
    let id = this.route.snapshot.paramMap.get('softwareId');

    this.aplicativoService.getById(id ? +id : 0)
    .subscribe( usuario =>{
      this.formulario.patchValue(usuario);
    });
  }

  listSoftwares() {
    this.router.navigate(['/app-list']);
  }

  updateSoftware() {
    this.aplicativoService.salvarRegistro(this.formulario.getRawValue())
      .subscribe( () =>{
        this.router.navigate(['/app-list']);
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id : [''],
      name: [''],
      nickname: [''],
      publicKey: [{ value: '', disabled: true }],
      privateKey: [{ value: '', disabled: true }],
      urlUserManual: [''],
      emailContact: [''],
      mobileVersion: [''],
      active: [''],
      consideration: ['']
    });
  }
}
