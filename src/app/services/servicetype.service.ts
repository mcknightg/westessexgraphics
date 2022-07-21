import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Servicetype}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class ServicetypeService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Servicetype>> {
        let url:string = this.config.api + "/rest/servicetype/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Servicetype>>(url, {params});
    }

    list():Observable<Array<Servicetype>> {
        return this.http.get<Array<Servicetype>>(this.config.api + "/rest/servicetype");
    }

    save(model: Servicetype):Observable<Servicetype>{
        return this.http.post<Servicetype>(this.config.api + "/rest/servicetype", model);
    }

    getById(id: string):Observable<Servicetype> {
        return this.http.get<Servicetype>(this.config.api + "/rest/servicetype/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/servicetype/" + id);
    }
}
