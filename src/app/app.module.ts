import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BannerComponent } from './components/banner/banner.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { AsideContactoComponent } from './components/aside-contacto/aside-contacto.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LinkExternoDirective } from './directives/linkExterno/LinkExternoDirective';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PresentacionComponent,
    TrayectoriaComponent,
    SkillsComponent,
    FooterComponent,
    PrincipalComponent,
    RoadmapComponent,
    BannerComponent,
    MarqueeComponent,
    AsideContactoComponent,
    LinkExternoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SlickCarouselModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#ec5453",
      innerStrokeColor: "#FFFF",
      animationDuration: 1000,
      showSubtitle: false
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
