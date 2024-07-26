import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interface/film.interface';
import { MatDialog } from '@angular/material/dialog';
import { InfDialog } from '../infDialog/infDialog.component';

@Component({
  selector: 'filmCard',
  templateUrl: './filmCard.component.html',
  styleUrls: ['./filmCard.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() public film!: Film;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if (!this.film) {
      throw new Error('Film property is required');
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(InfDialog, {
      height: '600',
      width: '5000',
      data: { film: this.film }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
