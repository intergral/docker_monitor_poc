import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {NgxUIModule} from "@intergral/kaleidoscope";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ViewTableComponent} from "./view-table/view-table.component";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ViewTableComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        NgxUIModule,
        HttpClientModule,
        NgxDatatableModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
