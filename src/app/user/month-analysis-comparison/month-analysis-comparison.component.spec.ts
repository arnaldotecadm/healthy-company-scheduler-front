import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MonthAnalysisComparisonComponent } from "./month-analysis-comparison.component";

describe("MonthAnalysisComparisonComponent", () => {
  let component: MonthAnalysisComparisonComponent;
  let fixture: ComponentFixture<MonthAnalysisComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthAnalysisComparisonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthAnalysisComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
