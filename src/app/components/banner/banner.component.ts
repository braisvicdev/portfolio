import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() titulo = '';
  @Input() texto = '';
  @Input() btnTxt = '';
  @Input() btnLnk = '';
  @Input() imgSrc = '';
}
