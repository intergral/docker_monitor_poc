import {Component, OnInit, ViewChild} from "@angular/core";
import {Todo} from "../models/Todo";
import {TodoService} from "../services/todo.service";
import {AlertService, NotificationService} from "@intergral/kaleidoscope";

@Component({
    selector: "app-view-todo-table",
    templateUrl: "./view-todo-table.component.html",
    styleUrls: ["./view-todo-table.component.scss"]
})
export class ViewTodoTableComponent implements OnInit {
    @ViewChild("myTable") private table: any;

    public todoList: Array<Todo> = [new Todo("test", "test")];

    constructor(private _todoService: TodoService,
                private notificationService: NotificationService,
                private alertService: AlertService) {

    }

    public ngOnInit() {
        this.refresh();
    }

    public refresh() {
        this._todoService.getTodoList()
            .subscribe(todoList => this.todoList = [...todoList]);
    }

    public toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }

    public deleteRow(row) {
        const subject = this.alertService.confirm({
            title: "Delete " + row.title,
            content: "Are you sure?"
        });

        subject.subscribe(
            (v) => {
                if (v.type !== "ok") return;

                this._todoService.removeTodo(row.title);
                this.refresh();

                this.notificationService.create({
                    title: "ToDo removed",
                    body: row.title + " has been removed",
                    styleType: "success"
                });
            },
            err => console.log("Prompt err", err),
        );
    }
}
