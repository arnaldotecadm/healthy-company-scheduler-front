import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MonthAnalysisComponent } from "./month-analysis.component";

describe("MonthAnalysisComponent", () => {
  let component: MonthAnalysisComponent;
  let fixture: ComponentFixture<MonthAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthAnalysisComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
