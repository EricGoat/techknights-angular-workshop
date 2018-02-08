import { Component, OnInit } from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoItem: Todo;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getTodoItems()
      .subscribe(items => {
        this.todos = items as Todo[];
      });
  }

  addTodo(data) {
    let formData = data.form.value;
    let title = formData.title;
    let todoToAdd = new Todo(title, false, null);
    this.todos.push(todoToAdd);
    this.saveTodos();
  }

  toggleItem(idx) {
    let item = this.todos[idx];
    item.isCompleted = !item.isCompleted;
    if(item.isCompleted) {
      item.completedAt = new Date();
    } else {
      item.completedAt = null;
    }
    this.saveTodos();
  }

  deleteAllItems() {
    this.todos = [];
    this.saveTodos();
  }

  saveTodos() {
    this.rest.saveTodoItems(this.todos)
      .subscribe(res => {
      });
  }
}
