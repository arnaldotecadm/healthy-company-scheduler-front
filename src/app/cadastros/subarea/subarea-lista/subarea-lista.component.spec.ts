import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubareaListaComponent } from './subarea-lista.component';

describe('SubareaListaComponent', () => {
  let component: SubareaListaComponent;
  let fixture: ComponentFixture<SubareaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubareaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubareaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
