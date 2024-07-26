import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interface/film.interface';

@Injectable({
    providedIn: 'root'
})
export class ghibliService {

    private apiUrl = 'https://ghibliapi.vercel.app';

    constructor(private http: HttpClient) { }

    getFilms(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/films`);
    }

    getFilmById(id: string): Observable<Film> {
        return this.http.get<Film>(`${this.apiUrl}/films/${id}`);
    }

    postData(data: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/ruta`, data);
    }
}