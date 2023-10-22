import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FontAwesomeModule,
    MatExpansionModule
],
  providers: [],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FontAwesomeModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }