import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MonthAnalysisComparisonComponent } from "./month-analysis-comparison.component";

@NgModule({
  declarations: [MonthAnalysisComparisonComponent],
  exports: [MonthAnalysisComparisonComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class MonthAnalysisComparisonModule {}
