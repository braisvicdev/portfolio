import { Directive, HostListener, Input, Optional } from '@angular/core';
import { RouterLink } from '@angular/router';

// Directiva para combinar el uso de routerLink con redireccionamiento a url externas
// Si recibe linkExterno y routerLink tiene preferencia el linkExterno.

@Directive({
  selector: '[linkExterno]'
})
export class LinkExternoDirective {

  @Input() linkExterno: string = '';
  @Input() target: boolean = false;

  @HostListener('click', ['$event.target'])
  onClick() {
    if (this.linkExterno) {
      if (this.target) {
        window.open(this.linkExterno, '_blank');
      } else {
        window.open(this.linkExterno, '_self');
      }
    }
  }
  constructor(
    @Optional() public link: RouterLink
  ) {
    if (!link) {
      return;
    }
    const onClick = link.onClick;

    link.onClick = (...args: [button: number, ctrlKey: boolean, shiftKey: boolean, altKey: boolean, metaKey: boolean]) => {
      if (this.linkExterno) {
        if (this.target) {
          window.open(this.linkExterno, '_blank');
        } else {
          window.open(this.linkExterno, '_self');
        }
        return false;
      } else {
        return onClick.apply(link, args);
      }
    };
  }
}
