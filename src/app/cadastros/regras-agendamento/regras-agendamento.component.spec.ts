import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrasAgendamentoComponent } from './regras-agendamento.component';

describe('RegrasAgendamentoComponent', () => {
  let component: RegrasAgendamentoComponent;
  let fixture: ComponentFixture<RegrasAgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrasAgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrasAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
