import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Calendar, View } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridWeek from '@fullcalendar/timegrid';
import { Local } from 'app/cadastros/local/local.interface';
import { TokenService } from 'app/core/token/token.service';
import { User } from 'app/core/user/user';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { AgendamentoInterface } from './agendamento/agendamento.interface';
import { AgendamentoService } from './agendamento/agendamento.service';
import { ModalAgendamentoComponent } from './modal-agendamento/modal-agendamento.component';
import { MenssageService } from 'app/shared/notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  usuario = jwt_decode(this.tokenService.getToken()) as User;

  locais: Local[];

  animal: string;
  name: string;
  dataAtual: Date;
  dataAtualStr: string;

  calendar: Calendar;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private service: AgendamentoService,
    private tokenService: TokenService,
    private msgService: MenssageService
  ) {}
  ngOnInit() {
    const calendarEl = document.getElementById('calendar');
    const plug = [dayGridPlugin, interactionPlugin];
    const now = moment(); // add this 2 of 4

    const dataMoment = moment(new Date());
    const utcWeek = new Date().getUTCDay();
    dataMoment.add(8 - utcWeek, 'days');

    this.calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridWeek, interactionPlugin],
      height: 600,
      /*validRange: {
        start: dataMoment.toDate(),
      },*/
      selectAllow: function (select) {
        return moment().diff(select.start) <= 0;
      },
      showNonCurrentDates: true,
      selectable: true,
      themeSystem: 'Lux',
      defaultView: 'dayGridMonth',
      /*customButtons: {
        myCustomButton: {
          text: 'Data Sugerida',
          click: (args) => {
            //this.addEvento();
          },
        },
      },*/
      editable: true,
      buttonText: {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Lista',
      },
      dateClick: (args) => {
        if (dataMoment.diff(args.date) >= 0) {
          this.msgService.showInfo(
            'Serão permitidos agendamentos apenas para a próxima semana.'
          );
          return;
        }
        this.dayClick(args.date, args.dateStr, args.jsEvent, args.view);
      },
      eventClick: (args) => {
        if (dataMoment.diff(args.event.start) >= 0) {
          this.msgService.showInfo(
            'Serão permitidos agendamentos apenas para a próxima semana.'
          );
          return;
        }
        this.dataAtual = args.event.extendedProps.dataAtual;
        this.openDialog();
      },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay',
      },
      titleFormat: { year: 'numeric', month: 'short', day: 'numeric' },

      businessHours: {
        daysOfWeek: [1, 2, 3, 4, 5],
      },
    });

    this.calendar.render();

    this.carregarEventos();
  }

  dayClick(date: Date, dateStr, jsEvent, activeView: View) {
    if (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
      alert('Por favor selecione uma data válida.');
      this.calendar.unselect();
    } else {
      this.dataAtualStr = dateStr;
      this.dataAtual = date;
      this.openDialog();
    }
  }

  openDialog(): void {
    debugger;
    const dialogRef = this.dialog.open(ModalAgendamentoComponent, {
      width: '850px',
      data: {
        idFuncionario: this.usuario.id,
        nomeFuncionario: this.usuario.name,
        dataSelecionada: moment(this.dataAtual),
        locais: this.route.snapshot.data.locais,
        areas: this.route.snapshot.data.areas,
        subAreas: this.route.snapshot.data.subAreas,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.calendar.getEventById(result).remove();
      } else {
        this.carregarEventos();
      }
    });
  }

  carregarEventos() {
    this.service.getAll().subscribe((agendamentos: AgendamentoInterface[]) => {
      agendamentos.forEach((agendamento) => {
        if (!this.calendar.getEventById('' + agendamento.id)) {
          this.calendar.addEvent({
            /*date: moment(agendamento.dataAgendamento).format('yyyy-MM-DD'),*/
            date: agendamento.dataAgendamento.toString().substring(0, 10),
            id: agendamento.id,
            title: agendamento.nomeFuncionario,
            backgroundColor:
              agendamento.idFuncionario === this.usuario.id
                ? '#bc79ff'
                : '#3788d8',
            editable: false,
            extendedProps: {
              idUsuario: this.usuario.id,
              dataAtual: agendamento.dataAgendamento
                .toString()
                .substring(0, 10),
            },
          });
        }
      });
    });
  }
}
