import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialComponentes = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({

  imports: [materialComponentes],
  exports: [materialComponentes]
})
export class MaterialModule { }
