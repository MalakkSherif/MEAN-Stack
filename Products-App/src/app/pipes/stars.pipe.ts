import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: number, max: number = 5, size: number = 24): SafeHtml {
    let result = '';

    for (let i = 1; i <= max; i++) {
      if (value >= i) {
        // full star
        result += `<span style="color: gold; font-size:${size}px;">★</span>`;
      } else if (value > i - 1) {
        // partial star
        const fraction = (value - (i - 1)) * 100; // % fill for this star
        result += `
          <span style="position: relative; display:inline-block; font-size:${size}px; color: lightgray;">
            ★
            <span style="
              position: absolute;
              top: 0;
              left: 0;
              width: ${fraction}%;
              overflow: hidden;
              color: gold;
              white-space: nowrap;">
              ★
            </span>
          </span>
        `;
      } else {
        // empty star
        result += `<span style="color: lightgray; font-size:${size}px;">★</span>`;
      }
    }

    return this.sanitizer.bypassSecurityTrustHtml(result);
  }
}
