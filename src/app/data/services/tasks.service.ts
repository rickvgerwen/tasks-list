import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@shared/types/task.type';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  readonly api_url = 'http://localhost:3000';
  readonly tasks_endpoint = '/tasks';

  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.api_url + this.tasks_endpoint);
  }

  public getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.api_url + this.tasks_endpoint + '/' + id);
  }
}
