import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {SKILLS, TRAYECTORIA_ACADEMICA, TRAYECTORIA_FORMACION_COMPLEMENTARIA, TRAYECTORIA_PROFESIONAL } from '../data/data';
import { IRoadmap } from '../components/roadmap/roadmap.component';
import { ISkill } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor() { }

  roadmapProfesional(): Observable <IRoadmap []> {
    return of(TRAYECTORIA_PROFESIONAL);
  }

  roadmapAcademico(): Observable <IRoadmap []> {
    return of(TRAYECTORIA_ACADEMICA);
  }

  formacionComplementaria(): Observable <IRoadmap []> {
    return of(TRAYECTORIA_FORMACION_COMPLEMENTARIA);
  }

  skills(): Observable <ISkill []> {
    return of(SKILLS);
  }
}
