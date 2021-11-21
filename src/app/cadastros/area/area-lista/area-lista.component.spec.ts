import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaListaComponent } from './area-lista.component';

describe('AreaListaComponent', () => {
  let component: AreaListaComponent;
  let fixture: ComponentFixture<AreaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
