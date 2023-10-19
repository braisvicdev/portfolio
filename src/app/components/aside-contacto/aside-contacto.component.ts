import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aside-contacto',
  templateUrl: './aside-contacto.component.html',
  styleUrls: ['./aside-contacto.component.scss']
})
export class AsideContactoComponent {
  @Input() titulo = 'Contacta conmigo';
  @Input() iconClass = 'mdi mdi-whatsapp';
  @Input() href = environment.linkContacto;
}
