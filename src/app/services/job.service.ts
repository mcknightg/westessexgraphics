import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {job}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class jobService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<job>> {
        let url:string = this.config.api + "/rest/job/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<job>>(url, {params});
    }

    list():Observable<Array<job>> {
        return this.http.get<Array<job>>(this.config.api + "/rest/job");
    }

    save(model: job):Observable<job>{
        return this.http.post<job>(this.config.api + "/rest/job", model);
    }

    getById(id: string):Observable<job> {
        return this.http.get<job>(this.config.api + "/rest/job/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/job/" + id);
    }
}
