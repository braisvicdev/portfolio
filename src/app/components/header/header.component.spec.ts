import { ComponentFixture, TestBed, async, fakeAsync } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { LinkExternoDirective } from "src/app/directives/linkExterno/LinkExternoDirective";
import { findNativeEl } from "src/test/assets/jasmine-utils";

describe('header.component', () => {
  //Arrange
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  @Component({
    template: `
      <div style="height: 3000px;">
        <app-header #header style="height: 500px;"></app-header>
      </div>
    `,
  })
  class HostComponent {
    constructor() { }
    @ViewChild('header') public header: HeaderComponent | undefined;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [HeaderComponent, HostComponent, LinkExternoDirective],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe('Cuando se hace scroll hacia la posición 400', () => {
    beforeEach((() => {
      const scrollEvent = new Event('scroll');
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 400;
      window.dispatchEvent(scrollEvent);
      fixture.detectChanges();
    }));
    it('Debería el elemento header contener la clase mainHeaderSticky-off', () => {
      // Arrange
      expect(findNativeEl(fixture, 'header')?.classList).toContain('mainHeaderSticky-off');
    });
  });

  describe('Cuando se hace scroll hacia la posición 400 y se vuelve a la 200', () => {
    beforeEach((() => {
      const scrollEvent = new Event('scroll');
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 400;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      fixture.detectChanges();
    }));
    it('Debería el elemento header contener la clase mainHeaderSticky', () => {
      // Arrange
      expect(findNativeEl(fixture, 'header')?.classList).toContain('mainHeaderSticky')
    });
  });

  describe('Cuando se hace scroll hacia la posición 400 y se vuelve a la 0', () => {
    beforeEach((() => {
      const scrollEvent = new Event('scroll');
      window.scrollY = 200;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 400;
      window.dispatchEvent(scrollEvent);
      window.scrollY = 0;
      window.dispatchEvent(scrollEvent);
      fixture.detectChanges();
    }));
    it('Debería el elemento header contener la clase mainHeaderNormal', () => {
      // Arrange
      expect(findNativeEl(fixture, 'header')?.classList).toContain('mainHeaderNormal')
    });
  });


});
