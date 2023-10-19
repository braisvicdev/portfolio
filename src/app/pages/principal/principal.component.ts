import { Component, OnInit } from '@angular/core';
import { IImagen } from 'src/app/interfaces/interfaces';
import { PrincipalService } from 'src/app/services/principal.service';
import { environment } from 'src/environments/environment';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  logosMarquee: IImagen [] = [];
  faCoffee = faCoffee;

  constructor (
    private principalService: PrincipalService,
    private meta: Meta
  ) {
    this.meta.updateTag({ name: 'title', content: 'Brais Vicente' });
    this.meta.updateTag({ name: 'description', content: 'Gran apasionado del desarrollo Frontend y de la aplicación de la tecnología para la solvencia de necesidades y problemas del día a día en el ámbito personal y empresarial.' });
  }

  get _environment() {
    return environment;
  }

  ngOnInit(): void {
    this.subscripcionLogosMarquee();
  }

  subscripcionLogosMarquee() {
    this.principalService.logosMarquee().subscribe(logos => {
      this.logosMarquee = logos;
    });
  }




}
