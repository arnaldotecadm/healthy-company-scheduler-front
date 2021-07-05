import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailByTypeComponent } from './detail-by-type.component';

describe('DetailByTypeComponent', () => {
  let component: DetailByTypeComponent;
  let fixture: ComponentFixture<DetailByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailByTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
