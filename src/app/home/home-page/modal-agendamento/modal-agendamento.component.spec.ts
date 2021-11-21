import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgendamentoComponent } from './modal-agendamento.component';

describe('ModalAgendamentoComponent', () => {
  let component: ModalAgendamentoComponent;
  let fixture: ComponentFixture<ModalAgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
