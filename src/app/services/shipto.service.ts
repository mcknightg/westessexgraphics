import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Shipto}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class ShiptoService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Shipto>> {
        let url:string = this.config.api + "/rest/shipto/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Shipto>>(url, {params});
    }

    list():Observable<Array<Shipto>> {
        return this.http.get<Array<Shipto>>(this.config.api + "/rest/shipto");
    }

    save(model: Shipto):Observable<Shipto>{
        return this.http.post<Shipto>(this.config.api + "/rest/shipto", model);
    }

    getById(id: string):Observable<Shipto> {
        return this.http.get<Shipto>(this.config.api + "/rest/shipto/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/shipto/" + id);
    }
}
