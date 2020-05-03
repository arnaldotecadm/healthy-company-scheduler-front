import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AplicativoService } from '../aplicativo.service';
import { SoftwareModel } from '../software.model';
import { UpdateDetailModel } from '../update-detail.model';
import { UpdateModel } from '../update.model';
import { UpdateModule } from './update.module';
import { MenssageService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  software$: Observable<SoftwareModel>;
  formulario: FormGroup;
  formRelease: FormGroup;

  dataAtual = new Date();

  objModel: UpdateDetailModel[] = [];

  constructor(
    private softwareService: AplicativoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private msgService: MenssageService
  ) {}

  ngOnInit(): void {
    this.construirFormulario();
    this.software$ = this.softwareService.getById(
      +this.route.snapshot.paramMap.get('softwareId')
    );
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      notaAtualizacao: ['', Validators.required],
    });

    this.formRelease = this.formBuilder.group({
      rls_nome: ['', Validators.required],
      rls_identificacao: ['', Validators.required],
      rls_tipo: ['', Validators.required],
      rls_descricao: ['', Validators.required],
    });
  }

  private addReleaseNotes() {
    this.objModel.push({
      id: null,
      nome: this.formRelease.get('rls_nome').value,
      descricao: this.formRelease.get('rls_descricao').value,
      identificacao: this.formRelease.get('rls_identificacao').value,
      updateDetailType: this.formRelease.get('rls_tipo').value,
    });
    this.formRelease.reset();
  }

  private removeReleaseNote(itemIndex: number) {
    this.objModel.splice(itemIndex, 1);
  }

  private saveNewUpdatenote(publicKey: string) {
    const updateNote = new UpdateModel();
    updateNote.nome = this.formulario.get('nome').value;
    updateNote.descricao = this.formulario.get('descricao').value;
    updateNote.dataAtualizacao = this.dataAtual;
    updateNote.notaAtualizacao = this.formulario.get('notaAtualizacao').value;
    updateNote.updateDetailList = this.objModel;
    updateNote.softwarePublicKey = publicKey;

    console.log(JSON.stringify(updateNote));

    this.softwareService.addUpdateNote(updateNote).subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.cancelUpdateNote();
      },
      (err) => {
        this.msgService.showError(err.error.message);
      }
    );
  }

  private cancelUpdateNote() {
    this.router.navigate([
      '/update-list',
      { softwareId: +this.route.snapshot.paramMap.get('softwareId') },
    ]);
  }
}
