import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {NgxUIModule} from "@intergral/kaleidoscope";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ViewTableComponent} from "./view-table/view-table.component";

@NgModule({
    declarations: [
        AppComponent,
        ViewTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxUIModule,
        NgxDatatableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
