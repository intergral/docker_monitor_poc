export class Todo {
    private _title: string;
    private _body: string;
    private _done: boolean = false;
    private _tags: Array<string> = [];

    constructor(title?: string, body?: string, done?: boolean, tags?: Array<string>) {
        this.title = title || "";
        this.body = body || "";
        this.done = done || false;
        this.tags = tags || [];
    }

    get body(): string {
        return this._body;
    }

    set body(value: string) {
        this._body = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get done(): boolean {
        return this._done;
    }

    set done(value: boolean) {
        this._done = value;
    }

    get tags(): Array<string> {
        return this._tags;
    }

    set tags(value: Array<string>) {
        this._tags = value;
    }

    public reset() {
        this.title = "";
        this.body = "";
        this.done = false;
        this.tags = [];
    }

    public copy(): Todo {
        return new Todo(this.title, this.body, this.done, this.tags);
    }
}
