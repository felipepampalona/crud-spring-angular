import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import {CoursesComponent} from './courses/courses.component';
import {MatTableModule} from '@angular/material/table';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesComponent,
    MatTableModule,
    CoursesRoutingModule,
    SharedModule,
  ]
})
export class CoursesModule { }
