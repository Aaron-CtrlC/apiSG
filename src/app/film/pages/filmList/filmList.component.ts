import { Component, OnInit } from '@angular/core';
import { Film } from '../../interface/film.interface';
import { ghibliService } from '../../services/ghibli.service';

@Component({
  selector: 'app-filmList',
  templateUrl: './filmList.component.html',
  styleUrls: ['./filmList.component.css']
})
export class FilmListComponent implements OnInit {

  public films: Film[] = [];

  constructor(private filmService: ghibliService) { }

  ngOnInit(): void {
    this.loadFilms();
  }

  private loadFilms(): void {
    this.filmService.getFilms().subscribe(
      (films: Film[]) => {
        this.films = films;
      },
      error => {
        console.error('Error fetching films', error);
      }
    );
  }
}



