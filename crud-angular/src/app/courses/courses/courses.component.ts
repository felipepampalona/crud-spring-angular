import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {AppMaterialModule} from '../../shared/app-material/app-material.module';
import {CoursesService} from '../services/courses.service';
import {catchError, Observable, of, throwError} from 'rxjs';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {AsyncPipe, NgIf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../../shared/components/error-dialog/error-dialog.component';
import {CategoryPipe} from '../../shared/pipes/category.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseFormComponent } from "../course-form/course-form.component";
import { CoursesListComponent } from "../courses-list/courses-list.component";


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AppMaterialModule,
    MatProgressSpinner,
    AsyncPipe,
    NgIf,
    CategoryPipe,
    CourseFormComponent,
    CoursesListComponent
],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;


//courseService: CoursesService;

  constructor(
    private coursesService:CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //this.courses=[];
    //this.courseService = new CoursesService();
    this.courses$ = this.coursesService.findAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar curso')
          return of([]);
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
