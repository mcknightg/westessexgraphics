import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Shipmethod}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class ShipmethodService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Shipmethod>> {
        let url:string = this.config.api + "/rest/shipmethod/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Shipmethod>>(url, {params});
    }

    list():Observable<Array<Shipmethod>> {
        return this.http.get<Array<Shipmethod>>(this.config.api + "/rest/shipmethod");
    }

    save(model: Shipmethod):Observable<Shipmethod>{
        return this.http.post<Shipmethod>(this.config.api + "/rest/shipmethod", model);
    }

    getById(id: string):Observable<Shipmethod> {
        return this.http.get<Shipmethod>(this.config.api + "/rest/shipmethod/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/shipmethod/" + id);
    }
}
