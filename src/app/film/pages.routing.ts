import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { FilmListComponent } from './pages/filmList/filmList.component';
import { NgModule } from '@angular/core';
import { FilmPageComponent } from './pages/filmPage/filmPage.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'filmList', component: FilmListComponent },
      { path: ':id', component:  FilmPageComponent},
      { path: '', redirectTo: 'filmList', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule
{

}
