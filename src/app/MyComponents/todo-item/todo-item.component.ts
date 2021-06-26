import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() i : number | undefined

  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck : EventEmitter<Todo> = new EventEmitter();
  @Output() todoEdit : EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo)
  {
    this.todoDelete.emit(todo)
    console.log("on click hase been triggerrd")
  }

  onCheck(todo : Todo)
  {
    this.todoCheck.emit(todo)
  }

  onEdit(todo : Todo)
  {
    this.todoEdit.emit(todo)
    console.log("on edit hase been triggerrd by child with  " + todo.title)
  }
}
