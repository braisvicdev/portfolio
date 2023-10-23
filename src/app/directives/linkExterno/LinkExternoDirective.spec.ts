import { Component } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { LinkExternoDirective } from './LinkExternoDirective';
import { findDebugEl } from 'src/test/assets/jasmine-utils';

describe('Dada la Directiva LinkExterno', () => {
  describe('Dado un enlace con la directiva [linkExterno]', () => {
    //Arrange
    @Component({
      template: `
        <a  [linkExterno]="linkExterno">TEST</a>
        `,
    })
    class HostComponentEscenario1 {
      constructor() { }
      public linkExterno = 'https://www.google.es/';
    }

    let hostComponentEscenario1: HostComponentEscenario1;
    let fixtureEscenario1: ComponentFixture<HostComponentEscenario1>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [LinkExternoDirective, HostComponentEscenario1],
      }).compileComponents();
    });

    beforeEach(() => {
      fixtureEscenario1 = TestBed.createComponent(HostComponentEscenario1);
      hostComponentEscenario1 = fixtureEscenario1.componentInstance;
      fixtureEscenario1.detectChanges();
    });

    describe('Cuando se hace click', () => {
      beforeEach(() => {
        spyOn(window, 'open').and.returnValue(null);
        const a = findDebugEl(fixtureEscenario1, 'a');
        a.click();
      });
      it('Debería establecerse una redirección', () => {
        expect(window.open).toHaveBeenCalledOnceWith(hostComponentEscenario1.linkExterno, '_blank');
      });
    });
  });


  describe('Dado un enlace con la directiva [linkExterno] con [target] = false', () => {
    @Component({
      template: `
        <a  [linkExterno]="linkExterno" [target]="false">TEST</a>
        `,
    })
    class HostComponentEscenario2 {
      constructor() { }
      public linkExterno = 'https://www.google.es/';
    }

    let hostComponentEscenario2: HostComponentEscenario2;
    let fixtureEscenario2: ComponentFixture<HostComponentEscenario2>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [LinkExternoDirective, HostComponentEscenario2],
      }).compileComponents();
    });

    beforeEach(() => {
      fixtureEscenario2 = TestBed.createComponent(HostComponentEscenario2);
      hostComponentEscenario2 = fixtureEscenario2.componentInstance;
      fixtureEscenario2.detectChanges();
    });

    describe('Cuando se hace click', () => {
      beforeEach(() => {
        spyOn(window, 'open').and.returnValue(null);
        const a = findDebugEl(fixtureEscenario2, 'a');
        a.click();
      });
      it('Debería NO establecerse redirección', () => {
        expect(window.open).toHaveBeenCalledOnceWith(hostComponentEscenario2.linkExterno, '_self');
      });
    });
  });



  describe('Dado un enlace con las con  la directiva [linkExterno] y [routerLink]', () => {
    @Component({
      template: `
        <a [routerLink]="linkInterno"  [linkExterno]="linkExterno">TEST</a>
        `,
    })
    class HostComponentEscenario3 {
      constructor() { }
      public linkExterno = 'https://www.google.es/';
      public linkInterno = 'inicio/test';
    }

    let hostComponentEscenario2: HostComponentEscenario3;
    let fixtureEscenario2: ComponentFixture<HostComponentEscenario3>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [LinkExternoDirective, HostComponentEscenario3],
      }).compileComponents();
    });

    beforeEach(() => {
      fixtureEscenario2 = TestBed.createComponent(HostComponentEscenario3);
      hostComponentEscenario2 = fixtureEscenario2.componentInstance;
      fixtureEscenario2.detectChanges();
    });

    describe('Cuando se hace click', () => {
      beforeEach(() => {
        spyOn(window, 'open').and.returnValue(null);
        const a = findDebugEl(fixtureEscenario2, 'a');
        a.click();
      });
      it('Debería establecerse una redirección al linkExterno en una nueva pestaña', () => {
        expect(window.open).toHaveBeenCalledWith(hostComponentEscenario2.linkExterno, '_blank');
      });
    });
  });



  describe('Dado un enlace con la [routerLink] = "inicio/test"', () => {
    @Component({
      template: `
        <h1>Test router link</h1>
      `,
    })
    class HostComponentTestRouterLink {
      constructor() { }
    }

    @Component({
      template: `
        <a [routerLink]="linkInterno" [linkExterno]="linkExterno">TEST</a>
        <router-outlet></router-outlet>
        `,
    })
    class HostComponentEscenario4 {
      constructor() { }
      public linkExterno: string = '';
      public linkInterno = '/inicio/test';
    }

    let hostComponentEscenario4: HostComponentEscenario4;
    let fixtureEscenario3: ComponentFixture<HostComponentEscenario4>;
    let router: Router;
    let location: Location;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          CommonModule,
          RouterTestingModule.withRoutes([
            { path: 'inicio/test', component: HostComponentTestRouterLink }
          ])
        ],
        declarations: [LinkExternoDirective, HostComponentEscenario4, HostComponentTestRouterLink],
      }).compileComponents();
    });

    beforeEach(() => {
      router = TestBed.get(Router);
      location = TestBed.get(Location);
      fixtureEscenario3 = TestBed.createComponent(HostComponentEscenario4);
      hostComponentEscenario4 = fixtureEscenario3.componentInstance;
      fixtureEscenario3.detectChanges();
    });

    describe('Cuando se hace click', () => {
      it('Debería renderizarse a la ruta interna especificada',
        async(inject([Router, Location], (router: Router, location: Location) => {
          fixtureEscenario3.debugElement.query(By.css('a')).nativeElement.click();
          fixtureEscenario3.whenStable().then(() => {
            expect(location.path()).toEqual(hostComponentEscenario4.linkInterno);
          });
        })));
    });
  });
});
