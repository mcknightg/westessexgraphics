import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Specsheet}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class SpecsheetService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Specsheet>> {
        let url:string = this.config.api + "/rest/specsheet/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Specsheet>>(url, {params});
    }

    list():Observable<Array<Specsheet>> {
        return this.http.get<Array<Specsheet>>(this.config.api + "/rest/specsheet");
    }

    save(model: Specsheet):Observable<Specsheet>{
        return this.http.post<Specsheet>(this.config.api + "/rest/specsheet", model);
    }

    getById(id: string):Observable<Specsheet> {
        return this.http.get<Specsheet>(this.config.api + "/rest/specsheet/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/specsheet/" + id);
    }
}
