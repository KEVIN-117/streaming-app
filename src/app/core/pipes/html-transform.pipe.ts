import {inject, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: 'htmlTransform',
  standalone: true
})
export class HtmlTransformPipe implements PipeTransform {
  private readonly domSanitizer: DomSanitizer = inject(DomSanitizer)
  transform(value: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}
