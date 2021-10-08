import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedComponent } from "./sidebar/shared.component";

@NgModule({
    declarations: [
        SharedComponent

    ],
    exports: [
        SharedComponent

    ],
    imports: [
        CommonModule,

    ]

})
export class SharedModule { }