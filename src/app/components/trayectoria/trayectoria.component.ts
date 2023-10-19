import { Component, OnInit } from '@angular/core';
import { TRAYECTORIA_ACADEMICA, TRAYECTORIA_PROFESIONAL } from 'src/app/data/data';
import { IRoadmap } from '../roadmap/roadmap.component';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.scss']
})
export class TrayectoriaComponent implements OnInit {
  trayectoriaProfesional: IRoadmap [] = [];
  trayectoriaAcademica: IRoadmap [] = []; 
  formacionComplementaria: IRoadmap [] = []; 

  constructor(public perfilService: PerfilService) { }
  
  ngOnInit(): void {
    this.subscripcionTrayectorias();
  }

  subscripcionTrayectorias() {
    this.perfilService.roadmapProfesional().subscribe(items => {
      this.trayectoriaProfesional = items;
    });
    this.perfilService.roadmapAcademico().subscribe(items => {
      this.trayectoriaAcademica = items;
    });
    this.perfilService.formacionComplementaria().subscribe(items => {
      this.formacionComplementaria = items;
    });

  }
}
