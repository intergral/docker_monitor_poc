import {Component, OnInit, ViewChild} from "@angular/core";

@Component({
    selector: "app-view-table",
    templateUrl: "./view-table.component.html",
    styleUrls: ["./view-table.component.scss"]
})
export class ViewTableComponent implements OnInit {
    @ViewChild("myTable") private table: any;

    public items: Array<any> = [];

    constructor() {

    }

    public ngOnInit() {
        this.refresh();
    }

    public refresh() {
        // this._todoService.getTodoList()
        //     .subscribe(todoList => this.todoList = [...todoList]);
    }

    public toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }
}
