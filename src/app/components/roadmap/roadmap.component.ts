import { Component, Input } from '@angular/core';

export interface IRoadmap {
  logo: {
    src: string,
    alt: string
  };
  fechaInicio?: string;
  fechaFin: string;
  titulo: string;
  subtitulo?: string;
  categorias: {
    nombre: string;
    descripciones: string [];
  } [];
  certificacion?: string;
}

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})

export class RoadmapComponent {

  @Input({required: true}) contenido!: IRoadmap;

  constructor() {}

}
