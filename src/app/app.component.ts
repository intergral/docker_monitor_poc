import {Component, ViewChild} from "@angular/core";
import {ViewTodoTableComponent} from "./view-todo-table/view-todo-table.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    @ViewChild(ViewTodoTableComponent) private tableViewer;

    constructor() {

    }

    public RefreshTable() {
        this.tableViewer.refresh();
    }
}
