import { Observable, of } from 'rxjs';
import { LOGOS_MARQUEE, MENU_ITEMS } from 'src/app/data/data';
import { IImagen, IMenuItem } from 'src/app/interfaces/interfaces';

export class PrincipalServiceStub {

public mockMenuItems: IMenuItem[] = MENU_ITEMS;
public mockLogos: IImagen[] = LOGOS_MARQUEE;


  itemsMenu(): Observable<IMenuItem[]> {
    return of(this.mockMenuItems);
  }

  logosMarquee(): Observable<IImagen[]> {
    return of(this.mockLogos);
  }
}