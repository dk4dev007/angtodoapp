import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output()
  todoAdd : EventEmitter<Todo> = new EventEmitter();

  @Input() oldtodo: Todo = new Todo;

  title: string | undefined
  desc: string | undefined
  val: boolean = false;
  
  constructor() { 
  }

  ngOnInit(): void {
  }
  
  onSubmit()
  {
    if(this.title == undefined || this.desc == undefined || this.title == "" || this.desc == "")
    {
      this.val = true;
    }
    else{
      this.val = false
      const todo = {
        title : this.title,
        desc : this.desc,
        active : true,
        edit: this.oldtodo.edit ? true : false
      }
      this.todoAdd.emit(todo)
      this.oldtodo.edit = todo.edit 
      this.title = ""
      this.desc = ""
    }
  }

}
