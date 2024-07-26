import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';
import { FilmListComponent } from './pages/filmList/filmList.component';
import { FilmPageComponent } from './pages/filmPage/filmPage.component';
import { FilmCardComponent } from './components/filmCard/filmCard.component';

import { MaterialModule } from '../material/material/material.module';
import { FilmRoutingModule } from './pages.routing';
import { InfDialog } from './components/infDialog/infDialog.component';

@NgModule({
  declarations: [LayoutComponent, FilmListComponent, FilmPageComponent, FilmCardComponent, InfDialog],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FilmRoutingModule,
  ]
})
export class FilmModule { }
