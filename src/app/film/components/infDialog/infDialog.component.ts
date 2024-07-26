import { Component, Inject, Input, OnInit } from '@angular/core';
import { Film } from '../../interface/film.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-inf-dialog',  // Puedes ajustar el selector si es necesario
  templateUrl: './infDialog.component.html',
  styleUrls: ['./infDialog.component.css']
})
export class InfDialog {

  film!: Film;

  constructor(
    private dialogRef: MatDialogRef<InfDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { film: Film }
  ) {
    this.film = data.film;
  }
  ngOnInit(): void {
    if(!this.film) throw Error ('Film property is required')
  }
}

