import {Component, ViewChild} from "@angular/core";
import {ViewTableComponent} from "./view-table/view-table.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    @ViewChild(ViewTableComponent) private tableViewer;

    constructor() {

    }

    public RefreshTable() {
        this.tableViewer.refresh();
    }
}
