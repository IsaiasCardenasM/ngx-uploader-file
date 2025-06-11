import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FilePreviewModel } from "../../file-preview.model";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CloseIconComponent } from "../../icons/close-icon/close-icon.component";
import { NgStyle } from "@angular/common";

@Component({
    selector: "preview-lightbox",
    templateUrl: "./preview-lightbox.component.html",
    styleUrls: ["./preview-lightbox.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CloseIconComponent, NgStyle]
})
export class PreviewLightboxComponent implements OnInit {
  @Input() file: FilePreviewModel;
  @Output() previewClose = new EventEmitter<void>();
  loaded: boolean;
  safeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getSafeUrl(this.file.file);
  }
  public getSafeUrl(file: File | Blob): void {
    const url = window.URL.createObjectURL(file);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  public onClose(event): void {
    this.previewClose.next();
  }
}
