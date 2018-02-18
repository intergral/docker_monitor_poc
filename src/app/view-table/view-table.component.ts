import {Component, OnInit, ViewChild} from "@angular/core";
import {DataResponseModel, EventBlock} from "../models/data-response.model";
import {DataService} from "../services/data.service";

@Component({
    selector: "app-view-table",
    templateUrl: "./view-table.component.html",
    styleUrls: ["./view-table.component.scss"]
})
export class ViewTableComponent implements OnInit {
    @ViewChild("myTable") private table: any;

    public items: Array<EventBlock> = [];

    constructor(private _dataService: DataService) {

    }

    public ngOnInit() {
        this.refresh();
    }

    public refresh() {
        this._dataService.get()
            .subscribe((r: DataResponseModel) => this.items = [...r.responses]);
    }
}
