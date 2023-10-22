import { ComponentFixture, TestBed, async, fakeAsync } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { CUSTOM_ELEMENTS_SCHEMA, Component, DebugElement, ViewChild } from "@angular/core";
import { LinkExternoDirective } from "src/app/directives/linkExterno/LinkExternoDirective";
import { findDebugEl, findNativeEl, queryAll } from "src/test/assets/jasmine-utils";
import { IMenuItem } from "src/app/interfaces/interfaces";
import { environment } from "src/environments/environment";
import { PrincipalService } from "src/app/services/principal.service";
import { PrincipalServiceStub } from "src/test/assets/stubs/principalServiceStub";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing'
import { MaterialModule } from "src/material/material.module";
import { BrowserModule } from "@angular/platform-browser";

describe('Dado el Componente Header', () => {
  let hostComponent: HostComponent;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let fixtureHostComponent: ComponentFixture<HostComponent>;
  let loader: HarnessLoader;

  @Component({
    template: `
    <body>
      <div style="height: 3000px;">
        <app-header #header style="height: 500px;"></app-header>
      </div>
    </body>
    `,
  })
  class HostComponent {
    constructor() { }
    @ViewChild('header') public header: HeaderComponent | undefined;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, BrowserModule, MaterialModule],
      declarations: [HeaderComponent, HostComponent, LinkExternoDirective],
      providers: [
        {
          provide: PrincipalService,
          useClass: PrincipalServiceStub
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureHostComponent = TestBed.createComponent(HostComponent);
    fixture = TestBed.createComponent(HeaderComponent);
    hostComponent = fixtureHostComponent.componentInstance;
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });


  describe('Cuando ngOnInit()', () => {
    beforeEach((() => {
      spyOn(fixture.componentInstance.principalService, 'itemsMenu').and.callThrough();
      spyOn(component, 'inicioStickyHeader').and.callThrough();
      component.ngOnInit();
      fixture.detectChanges();
    }));
    it('Debería establecerse la subscripción a principalService.itemsMenu()', function () {
      expect(component.principalService.itemsMenu).toHaveBeenCalled();
    });
    it('Deberían guardardarse los datos que se obtienen del servicio', async () => {
      fixture.whenStable().then(() => {
        expect(fixture.componentInstance.itemsMenu.length).toBeGreaterThan(0);
      })
    });
    it('Debería llamarse 1 vez a inicioStickyHeader()', function () {
      expect(component.inicioStickyHeader).toHaveBeenCalledTimes(1);
    });
  });

  describe('Cuando inicioStickyHeader()', () => {
    beforeEach((() => {
      spyOn(component, 'stickyHeaderHandler');
      component.inicioStickyHeader();
      fixture.detectChanges();
    }));
    it('Debería mainHeaderScroll y mainHeaderOrigen = 0', function () {
      expect(component.mainHeaderScroll).toBe(0);
      expect(component.mainHeaderOrigen).toBe(0);
    });
    it('Debería llamarse 1 vez a stickyHeaderHandler(true)', function () {
      expect(component.stickyHeaderHandler).toHaveBeenCalledOnceWith(true);
    });
  });

  describe('Cuando se hace scroll hacia la posición 400', () => {
    it('Debería el elemento header contener la clase mainHeaderSticky-off', () => {
      const scrollEvent = new Event('scroll');
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 400;
      window.dispatchEvent(scrollEvent);
      fixture.detectChanges();
      expect(findNativeEl(fixture, 'header')?.classList).toContain('mainHeaderSticky-off');
    });
  });

  describe('Cuando se hace scroll hacia la posición 400 y se vuelve a la 200', () => {
    it('Debería el elemento header contener la clase mainHeaderSticky', () => {
      const scrollEvent = new Event('scroll');
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 400;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      fixture.detectChanges();
      expect(findNativeEl(fixture, 'header')?.classList).toContain('mainHeaderSticky')
    });
  });

  describe('Cuando se hace scroll hacia la posición 400 y se vuelve a la 0', () => {
    it('Debería el elemento header contener la clase mainHeaderNormal', () => {
      const scrollEvent = new Event('scroll');
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 400;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 0;
      window.dispatchEvent(scrollEvent);
      fixture.detectChanges();
      expect(findNativeEl(fixture, 'header')?.classList).toContain('mainHeaderNormal')
    });
  });

  describe('Cuando validacionMobile()', () => {
    it('Debería establecerse mobileVersion = true cuando window.innerWidth <= 768', function () {
      spyOnProperty(window, 'innerWidth').and.returnValue(768);
      component.validacionMobile();
      fixture.detectChanges();
      expect(component.mobileVersion).toBe(true);
    });
    it('Debería establecerse mobileVersion = true cuando window.innerWidth >= 768', function () {
      spyOnProperty(window, 'innerWidth').and.returnValue(769);
      component.validacionMobile();
      fixture.detectChanges();
      expect(component.mobileVersion).toBe(false);
    });
  });

  describe('Cuando toogleMenu()', () => {
    it('Debería alternar menuAbierto a su valor opuesto cuando finalice la llamada a la función', function () {
      component.menuAbierto = true;
      component.toggleMenu();
      expect(component.menuAbierto).toBe(false);

      component.menuAbierto = false;
      component.toggleMenu();
      expect(component.menuAbierto).toBe(true);
    });

    it('Debería existir un elemento con la clase .menuOpen cuando menuAbierto = false', function () {
      component.menuAbierto = false;
      component.toggleMenu();
      fixture.detectChanges();
      expect(findNativeEl(fixture, '.menuOpen')).toBeTruthy();
    });
    it('Debería NO existir un elemento con la clase .menuOpen cuando menuAbierto = true', function () {
      component.menuAbierto = true;
      component.toggleMenu();
      fixture.detectChanges();
      expect(findNativeEl(fixture, '.menuOpen')).toBeNull();
    });
    it('Debería el body contener la clase .bodyOpen cuando menuAbierto = false', function () {
      component.menuAbierto = false;
      component.toggleMenu();
      fixture.detectChanges();
      expect(component.document.body.classList.contains('bodyOpen')).toBeTrue();
    });
    it('Debería el body NO contener la clase .bodyOpen cuando menuAbierto = true', function () {
      component.menuAbierto = true;
      component.toggleMenu();
      fixture.detectChanges();
      expect(component.document.body.classList.contains('bodyOpen')).toBeFalse();
    });
    it('Debería llamarse 1 vez a window.scroll cuando menuAbierto = false', function () {
      component.menuAbierto = false;
      const scrollSpy = spyOn(window, 'scroll');
      component.toggleMenu();
      fixture.detectChanges();
      expect(scrollSpy).toHaveBeenCalledTimes(1);
    });
    it('Debería NO llamarse a window.scroll cuando menuAbierto = true', function () {
      component.menuAbierto = true;
      const scrollSpy = spyOn(window, 'scroll');
      component.toggleMenu();
      fixture.detectChanges();
      expect(scrollSpy).not.toHaveBeenCalled();
    });
  });

  describe('Cuando clickMenuBurguerItem()', () => {
    it('Debería establecerse checked = false clickMenuBurguerItem()', function () {
      component.clickMenuBurguerItem();
      expect(component.menuBurguerInput.nativeElement.checked).toBe(false);
    });
    it('Debería establecerse menuAbierto = true cuando menuAbierto = false', function () {
      component.menuAbierto = false;
      component.clickMenuBurguerItem();
      expect(component.menuAbierto).toBe(true);
    });
    it('Debería establecerse menuAbierto = false cuando menuAbierto = true', function () {
      component.menuAbierto = true;
      component.clickMenuBurguerItem();
      expect(component.menuAbierto).toBe(false);
    });
  });

  describe('Cuando determinarTargetBlank()', () => {
    it('Debería devolver true cuando item.targetBlank', function () {
      const item: IMenuItem = { label: 'Test', href: 'test', targetBlank: true };
      const result = component.determinarTargetBlank(item);
      expect(result).toBe(true);
    });
    it('Debería devolver true cuando se le envía una url que NO contiene base_url', function () {
      const item: IMenuItem = { label: 'Test', href: 'https://www.google.es' };
      const result = component.determinarTargetBlank(item);
      expect(result).toBe(true);
    });
    it('Debería devolver false cuando se le envía una url que contiene base_url', function () {
      const item: IMenuItem = { label: 'Test', href: `${environment.base_url}test` };
      const result = component.determinarTargetBlank(item);
      expect(result).toBe(false);
    });
  });

  // TEST INTEGRACIÓN
  it('Debería renderizarse correctamente el logo', () => {
    const logoElement = findNativeEl(fixture, '.logo img');
    expect(logoElement).toBeTruthy();
  });

  it('Debería renderizarse correctamente el bloque del menu principal', () => {
    const menuElement = findNativeEl(fixture, '.menu-items');
    expect(menuElement).toBeTruthy();
  });

  it('Debería renderizarse correctamente el bloque menuBurguer', () => {
    const burgerMenuElement = findNativeEl(fixture, '.menuBurguer');
    expect(burgerMenuElement).toBeTruthy();
  });


  it('Debería existir un enlace a base_url englobando al logo', () => {
    const logoElement = findDebugEl(fixture, '.logo');
    const anchorElement = logoElement.querySelector('a');
    expect(anchorElement).not.toBeNull();
    expect(anchorElement.getAttribute('href')).toBe(environment.base_url);
  });

  it('Debería mostrarse el logo con los atributos src y alt correspondientes', () => {
    const logoElement = findDebugEl(fixture, '.logo');
    const imgElement = logoElement.querySelector('img');
    expect(imgElement).not.toBeNull();
    expect(imgElement.getAttribute('src')).toBe('assets/images/logos/logo.webp');
    expect(imgElement.getAttribute('alt')).toBe('logo');
  });

  it('Deberían renderizarse correctamente los items del menu', () => {
    component.itemsMenu = [{
      label: 'Item 1',
      href: ''
    },
    {
      label: 'Item 2',
      href: `${environment.base_url}#presentacion`,
    },];
    fixture.detectChanges();

    const menuItems = queryAll(fixture, '.menu-item');
    expect(menuItems.length).toBe(2);
    expect(menuItems[0].nativeElement.textContent).toContain('Item 1');
    expect(menuItems[1].nativeElement.textContent).toContain('Item 2');
  });

  it('Deberían renderizarse correctamente los items del segundo nivel del menu', async () => {
    component.itemsMenu = [{
      label: 'Menu Item 1',
      href: '',
      subItems: [{
        label: 'Submenu Item 1',
        href: 'https://www.google.com'
      },
      {
        label: 'Submenu Item 2',
        href: 'https://www.google.es'
      }
      ]
    }];
    fixture.detectChanges();
    let menu = (await loader.getHarness(MatMenuHarness.with({ selector: '.menu-item' })));
    await menu.open();
    expect((await menu.getItems()).length).toEqual(2);
  });

  it('Deberían renderizarse correctamente los items de segundo nivel del menu burguer', () => {
    component.itemsMenu = [
      { label: 'Item 1', href: 'item1.html' },
      { label: 'Item 2', href: 'item2.html' },
    ];
    fixture.detectChanges();
    const menuItems = queryAll(fixture, '.menu-item-burguer a');
    expect(menuItems.length).toEqual(2);
  });

  it('Debería establecerse correctamente el link Externo en los items del menu', () => {
    component.itemsMenu = [{
      label: 'Menu Item 1',
      href: 'http://example.com',
    }];
    fixture.detectChanges();

    const link = findDebugEl(fixture, 'button a').getAttribute('ng-reflect-link-externo');
    expect(link).toBe('http://example.com');
  });

  it('Debería establecerse checked = true en menuBurguerInput cuando se hace click en el botón para abrir el menu burguer', async () => {
    const menuBurgerInput = findDebugEl(fixture, '#menuBurguerInput');
    const burgerBtn = findDebugEl(fixture, '.burguer-btn');
    burgerBtn.click();
    fixture.detectChanges();
    expect(menuBurgerInput.checked).toBeTrue();
  });

  it('Debería establecerse checked = true en el input menuBurguerInput cuando se hace click 2 veces en el botón para abrir el menu burguer', async () => {
    const menuBurgerInput = findDebugEl(fixture, '#menuBurguerInput');
    const burgerBtn = findDebugEl(fixture, '.burguer-btn');
    burgerBtn.click();
    fixture.detectChanges();
    burgerBtn.click();
    fixture.detectChanges();
    expect(menuBurgerInput.checked).toBeFalse();
  });

});
