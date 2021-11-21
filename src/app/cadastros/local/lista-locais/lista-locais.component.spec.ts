import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLocaisComponent } from './lista-locais.component';

describe('ListaLocaisComponent', () => {
  let component: ListaLocaisComponent;
  let fixture: ComponentFixture<ListaLocaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLocaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
