import {Todo} from "../models/Todo";
import {Observable} from "rxjs/Rx";


export class TodoService {
    public todoList: Array<Todo> = [];

    constructor() {

    }

    public addTodo(todo: Todo) {
        this.todoList.push(todo);
    }

    public removeTodo(title: string) {
        this.todoList = this.todoList.filter(t => t.title !== title);
    }

    public getTodoList(): Observable<Array<Todo>> {
        return Observable.of(this.todoList);
    }
}
