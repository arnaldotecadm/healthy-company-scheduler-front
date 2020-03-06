import { NgModule } from '@angular/core';
import { VMessageComponent } from './vmessage.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ VMessageComponent ],
    imports: [CommonModule],
    exports: [ VMessageComponent]
})
export class VMessageModule { }