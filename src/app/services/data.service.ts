import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {DataResponseModel} from "../models/data-response.model";

import {of} from "rxjs/observable/of";
import {environment} from "../../environments/environment";

@Injectable()
export class DataService {
    private dummy_data: DataResponseModel;

    constructor(private http: HttpClient) {
        this.dummy_data = new DataResponseModel({
            name: "docker_start",
            responses: [
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service",
                        "ecs-api-key-service",
                        "ecs-api-key-service",
                        "ecs-api-key-service",
                        "ecs-api-key-service",
                        "ecs-crapi"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                },
                {
                    name: "docker_start",
                    contributors: [
                        "ecs-api-key-service"
                    ],
                    count: 5,
                    ts: 1518970272000
                }
            ]
        });
    }

    /**
     * Get new data set
     * @returns {Array<any>}
     */
    public get(): Observable<DataResponseModel> {
        return of(this.dummy_data);

        // return this.http.get(environment.urls.rest + "v1")
        //     .map((r: Response) => new DataResponseModel(r.json()));
    }
}
