import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ListarEventosComponent } from './pages/listar-eventos/listar-eventos.component';
import { FormsEventosComponent } from './pages/forms-eventos/forms-eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import localePT from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { EventoServiceService } from './service/evento-service.service';

registerLocaleData(localePT, 'pt-BR')



@NgModule({
  declarations: [    
      ListarEventosComponent,
      FormsEventosComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ], 
  providers: [
    EventoServiceService,
   { provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class EventosModule { }
