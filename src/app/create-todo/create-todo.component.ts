import {Component, EventEmitter, Output} from "@angular/core";
import {NotificationService} from "@intergral/kaleidoscope";
import {Todo} from "../models/Todo";
import {TodoService} from "../services/todo.service";

@Component({
    selector: "app-create-todo",
    templateUrl: "./create-todo.component.html",
    styleUrls: ["./create-todo.component.scss"]
})
export class CreateTodoComponent {
    @Output() public save: EventEmitter<any> = new EventEmitter();

    public newTodo: Todo;

    public states: { clear: string, save: string } = {
        clear: "",
        save: ""
    };

    public loaders: { saving: boolean } = {saving: false};

    constructor(private notificationService: NotificationService,
                private _todoService: TodoService) {
        this.newTodo = new Todo();
    }

    public ClearToDo() {
        this.states.clear = "inProgress";

        setTimeout(() => {
            this.ResetToDo();

            this.states.clear = "success";

            this.notificationService.create({
                title: "ToDo cleared",
                body: "The todo form has been reset back to default",
                styleType: "info"
            });
        }, 1000);
    }

    public SaveToDo() {
        this.states.save = "inProgress";

        setTimeout(() => {
            this._todoService.addTodo(this.newTodo.copy());
            this.save.emit();
            this.states.save = "success";

            this.notificationService.create({
                title: "ToDo saved",
                body: "Todo " + this.newTodo.title + " has been saved",
                styleType: "success"
            });

            this.ResetToDo();
        }, 1000);
    }

    private ResetToDo() {
        this.newTodo.reset();
    }
}
