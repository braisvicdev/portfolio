import { Directive, HostListener, Input, Optional } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Directiva personalizada para combinar el uso de routerLink con la redirección a URLs externas.
 * Cuando se utiliza esta directiva en un elemento HTML, se permite especificar tanto un routerLink
 * como un linkExterno. Si linkExterno tiene un valor, tiene preferencia sobre routerLink y se abrirá
 * la URL externa en una nueva ventana o pestaña según el valor de 'target'.
 */
@Directive({
  selector: '[linkExterno]'
})
export class LinkExternoDirective {

  /**
   * URL externa a la que se redirigirá cuando se haga clic en el elemento que usa esta directiva.
   */
  @Input() linkExterno = '';

  /**
   * Indica si se debe abrir la URL externa en una nueva ventana o pestaña (_blank) o en la misma ventana (_self).
   * El valor predeterminado es 'true' para abrir en una nueva ventana.
   */
  @Input() target = true;

  /**
   * Evento de escucha del elemento HTML con la directiva. Cuando se hace clic en el elemento, esta función se ejecutará.
   */
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

  /**
   * @param link (Opcional) Referencia a la directiva RouterLink si está presente en el mismo elemento.
   * Si RouterLink está presente, se anula el comportamiento predeterminado de RouterLink en favor de esta directiva.
   */
  constructor(
    @Optional() public link: RouterLink
  ) {
    if (!link) {
      return;
    }
    const onClick = link.onClick;

    // Sobrescribe el comportamiento de RouterLink para redirigir a la URL externa si está definida.
    link.onClick = (...args: [button: number, ctrlKey: boolean, shiftKey: boolean, altKey: boolean, metaKey: boolean]) => {
      if (this.linkExterno) {
        if (this.target) {
          window.open(this.linkExterno, '_blank');
        } else {
          window.open(this.linkExterno, '_self');
        }
        return false; // Evita el comportamiento predeterminado de RouterLink.
      } else {
        return onClick.apply(link, args); // Deja que RouterLink maneje el click si no hay URL externa definida.
      }
    };
  }
}
