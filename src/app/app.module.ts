import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {NgxUIModule, PermissionService} from "@intergral/kaleidoscope";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreateTodoComponent} from "./create-todo/create-todo.component";
import {ViewTodoTableComponent} from "./view-todo-table/view-todo-table.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TodoService} from "./services/todo.service";

@NgModule({
    declarations: [
        AppComponent,
        CreateTodoComponent,
        ViewTodoTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgxUIModule,
        NgxDatatableModule
    ],
    providers: [
        PermissionService,
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
