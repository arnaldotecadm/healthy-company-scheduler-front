import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogService } from 'app/shared/confirm-dialog/confirm-dialog.service';
import * as moment from 'moment';
import { AgendamentoInterface } from '../agendamento/agendamento.interface';
import { AgendamentoService } from '../agendamento/agendamento.service';
import { ModalAgendamentoInterface } from './modal-agendamento.interface';
import { MenssageService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-modal-agendamento',
  templateUrl: './modal-agendamento.component.html',
  styleUrls: ['./modal-agendamento.component.css'],
  providers: [ConfirmDialogService],
})
export class ModalAgendamentoComponent implements OnInit {
  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AgendamentoService,
    private confirmDialogService: ConfirmDialogService,
    public dialogRef: MatDialogRef<ModalAgendamentoComponent>,
    private msgService: MenssageService,
    @Inject(MAT_DIALOG_DATA) public data: ModalAgendamentoInterface
  ) {}

  ngOnInit(): void {
    this.construirFormulario();

    this.service
      .getByIdentificacaoAgendamento(
        this.data.idFuncionario,
        this.data.dataSelecionada
      )
      .subscribe((entry) => {
        if (entry.id) {
          this.formulario.patchValue(entry);
          this.formulario
            .get('dataAgendamento')
            .setValue(moment(this.data.dataSelecionada).format('DD/MM/yyyy'));
        } else {
          this.formulario.patchValue({
            idFuncionario: this.data.idFuncionario,
            dataAgendamento: moment(this.data.dataSelecionada).format(
              'DD/MM/yyyy'
            ),
            nomeFuncionario: this.data.nomeFuncionario,
          });
        }
      });
  }

  updateEntry() {
    Object.keys(this.formulario.controls).forEach((field) => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    if (this.formulario.invalid) {
      return;
    }

    const agendamento: AgendamentoInterface = this.formulario.getRawValue();
    agendamento.dataAgendamento = this.data.dataSelecionada;
    this.service.salvarRegistro(agendamento).subscribe(
      (resposta: any) => {
        this.dialogRef.close();
        this.msgService.showSucess('Agendamento realizado com Sucesso.');
      },
      (err) => {
        this.msgService.showError(
          err.error.message ? err.error.message : err.error
        );
      }
    );
  }

  confirmRemoveEntry() {
    this.showDialog();
  }

  removeEntry(idAgendamento: number): void {
    this.service.removeById(idAgendamento).subscribe(() => {
      this.dialogRef.close(idAgendamento);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isFieldValid(field: string) {
    return (
      !this.formulario.get(field).valid && this.formulario.get(field).touched
    );
  }

  showDialog() {
    this.confirmDialogService.confirmThis(
      'Deseja realmente cancelar o Apontamento Informado?',
      () => {
        this.removeEntry(this.formulario.get('id').value);
      },
      () => {}
    );
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      dataAgendamento: ['', Validators.required],
      nomeFuncionario: ['', Validators.required],
      idFuncionario: ['', Validators.required],
      local: ['', Validators.required],
      area: ['', Validators.required],
      subArea: ['', Validators.required],
      about: [''],
    });
  }
}
