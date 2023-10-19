import { Injectable } from '@angular/core';
import { IImagen, IMenuItem } from '../interfaces/interfaces';
import { Observable, of } from 'rxjs';
import { LOGOS_MARQUEE, MENU_ITEMS } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor() { }

  itemsMenu(): Observable <IMenuItem []> {
    return of(MENU_ITEMS);
  }

  logosMarquee(): Observable <IImagen []> {
    return of(LOGOS_MARQUEE);
  }
}
