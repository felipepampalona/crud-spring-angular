import { Injectable } from '@angular/core';
import {Course} from '../model/course';
import {HttpClient} from '@angular/common/http';
import {delay, first, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses';

  findAll(){
    return this.http.get<Course[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(courses => console.log(courses))
      )
  }

  constructor(
    private http: HttpClient
  ) { }

  save(record: Partial<Course>){
    return this.http.post<Course>(this.API, record).pipe(first());

  }
}
