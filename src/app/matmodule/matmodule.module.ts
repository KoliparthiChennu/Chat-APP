import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule
  ]
})
export class MatmoduleModule { }
