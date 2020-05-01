import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SoftwareComponent } from "./software.component";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "app/shared/vmessage/vmessage.module";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [SoftwareComponent],
  exports: [SoftwareComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, MatDialogModule],
})
export class SoftwareModule {}
