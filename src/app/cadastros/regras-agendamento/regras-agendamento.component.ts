import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenssageService } from 'app/shared/notification/notification.service';
import { Subject } from 'rxjs';
import { RegrasAgendamentoInterface } from './regras-agendamento.interface';
import { RegrasAgendamentoService } from './regras-agendamento.service';

@Component({
  selector: 'app-regras-agendamento',
  templateUrl: './regras-agendamento.component.html',
  styleUrls: ['./regras-agendamento.component.css'],
})
export class RegrasAgendamentoComponent implements OnInit {
  public formulario: FormGroup;
  public local$: Subject<RegrasAgendamentoInterface> = new Subject<
    RegrasAgendamentoInterface
  >();

  constructor(
    private router: Router,
    private service: RegrasAgendamentoService,
    private formBuilder: FormBuilder,
    private msgService: MenssageService
  ) {}

  ngOnInit() {
    this.construirFormulario();

    this.service.getFirst().subscribe((local) => {
      this.formulario.patchValue(local);
    });
  }

  cancelUpdate() {
    this.router.navigate(['/home']);
  }

  updateEntry() {
    this.service
      .salvarRegistro(this.formulario.getRawValue())
      .subscribe((resposta: any) => {
        console.log('Resposta do servidor: ' + resposta.message);
        this.msgService.showSucess('Informações salvas com sucesso.');
      });
  }

  private construirFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      limiteDiasPorSemana: [],
      limitePessoasPorLocal: [''],
      limitePessoasPorArea: [''],
      limitePessoasPorSubArea: [''],
      limitePessoasPorDia: [''],
    });
  }
}
