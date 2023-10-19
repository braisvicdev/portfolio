import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  
  @ViewChild('maquinaEscribir') maquinaEscribir!: ElementRef<any>;
  textoMaquinaEscribir: string = "Desarrollador de aplicaciones web.";
  indiceMaquinaEscribir: number = 0;
  velocidadMaquinaEscribir: number = 40;

  constructor() {}

  get _environment() {
    return environment;
  }


  ngAfterViewInit(): void {
    this.iniciarMaquinaEscribir();
  }
  
  iniciarMaquinaEscribir() {
    if (this.indiceMaquinaEscribir < this.textoMaquinaEscribir.length) {
      this.maquinaEscribir.nativeElement.textContent += this.textoMaquinaEscribir.charAt(this.indiceMaquinaEscribir);
      this.indiceMaquinaEscribir++;
      setTimeout(() => this.iniciarMaquinaEscribir(), this.velocidadMaquinaEscribir);
    }
  }
  


}
