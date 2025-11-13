import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UtilService } from './util/util.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
    
  ],
  providers:[
    UtilService
  ]
})
export class SharedModule { }
