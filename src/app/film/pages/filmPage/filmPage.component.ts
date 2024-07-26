import { Component, Input, OnInit } from '@angular/core';
import { ghibliService } from '../../services/ghibli.service';
import { Film } from '../../interface/film.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-filmPage',
  templateUrl: './filmPage.component.html',
  styleUrls: ['./filmPage.component.css']
})
export class FilmPageComponent implements OnInit{
  public film!: Film;

  constructor(
    private filmService: ghibliService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  )
  {
    
  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.filmService.getFilmById(id))
    )
    .subscribe(film =>{
      if(!film) return this.router.navigate(['/films/list']);
      this.film=film;
      return;
    })
  }}