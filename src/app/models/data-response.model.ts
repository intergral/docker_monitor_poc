export class DataResponseModel {
    private _name: string;
    private _responses: Array<EventBlock> = [];

    constructor(private response_data: any) {
        this._name = response_data.name;
        this.response_data.responses
            .forEach(r => this._responses.push(new EventBlock(r)));

        delete this.response_data;
    }

    get responses(): Array<EventBlock> {
        return this._responses;
    }

    set responses(value: Array<EventBlock>) {
        this._responses = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

export class EventBlock {
    private _name: string;
    private _contributors: Array<{ name: string, count: number }> = [];
    private _count: number;
    private _ts: number;

    constructor(private response: any) {
        this._name = response.name;
        this.groupContributors(this.response.contributors);

        this._count = response.count;
        this._ts = response.ts;

        delete this.response;
    }

    private groupContributors(contribs: Array<string>): void {
        const trimmed = contribs
            .map(contributor => {
                return {
                    name: contributor,
                    count: contribs.filter(c => c === contributor).length
                };
            });

        trimmed.forEach(b => {
            if (!this._contributors.find(c => c.name === b.name)) {
                this._contributors.push(b);
            }
        });
    }

    get ts(): number {
        return this._ts;
    }

    set ts(value: number) {
        this._ts = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }

    get contributors(): Array<{ name: string, count: number }> {
        return this._contributors;
    }

    set contributors(value: Array<{ name: string, count: number }>) {
        this._contributors = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

