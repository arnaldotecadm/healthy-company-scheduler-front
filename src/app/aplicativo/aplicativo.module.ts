import { NgModule } from "@angular/core";
import { SoftwareModule } from "./software/software.module";
import { AppListModule } from "./app-list/app-list.module";
import { SoftwareComponent } from "./software/software.component";
import { AppListComponent } from "./app-list/app-list.component";
import { CommonModule } from "@angular/common";
import { AplicativoService } from "./aplicativo.service";

@NgModule({
    declarations: [],
    exports: [
        SoftwareComponent,
        AppListComponent],
    imports: [
        CommonModule,
        SoftwareModule,
        AppListModule
    ]
})
export class AplicativoModule { }