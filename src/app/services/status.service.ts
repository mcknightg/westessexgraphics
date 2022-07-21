import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Status}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class StatusService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Status>> {
        let url:string = this.config.api + "/rest/status/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Status>>(url, {params});
    }

    list():Observable<Array<Status>> {
        return this.http.get<Array<Status>>(this.config.api + "/rest/status");
    }

    save(model: Status):Observable<Status>{
        return this.http.post<Status>(this.config.api + "/rest/status", model);
    }

    getById(id: string):Observable<Status> {
        return this.http.get<Status>(this.config.api + "/rest/status/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/status/" + id);
    }
}
