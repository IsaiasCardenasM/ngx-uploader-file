import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FileComponent } from "./file-drop.component";
import { CloudIconComponent } from "../icons/cloud-icon/cloud-icon.component";

@NgModule({
    declarations: [FileComponent],
    exports: [FileComponent],
    imports: [CommonModule, CloudIconComponent],
    providers: [],
    bootstrap: [FileComponent],
})
export class FileDropModule {}
