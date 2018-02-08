import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from "../models/todo.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RestService {

  constructor(private http: HttpClient) {
  }

  getTodoItems() {
    return this.http.get("http://127.0.0.1:7777/api/todos");
  }

  saveTodoItems(todos: Todo[]) {
    return this.http.post("http://127.0.0.1:7777/api/todos", {todos: todos});
  }
}
