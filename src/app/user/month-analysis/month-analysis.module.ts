import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MonthAnalysisComponent } from "./month-analysis.component";

@NgModule({
  declarations: [MonthAnalysisComponent],
  exports: [MonthAnalysisComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class MonthAnalysisModule {}
