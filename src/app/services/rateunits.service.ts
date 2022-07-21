import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Rateunits}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class RateunitsService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Rateunits>> {
        let url:string = this.config.api + "/rest/rateunits/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Rateunits>>(url, {params});
    }

    list():Observable<Array<Rateunits>> {
        return this.http.get<Array<Rateunits>>(this.config.api + "/rest/rateunits");
    }

    save(model: Rateunits):Observable<Rateunits>{
        return this.http.post<Rateunits>(this.config.api + "/rest/rateunits", model);
    }

    getById(id: string):Observable<Rateunits> {
        return this.http.get<Rateunits>(this.config.api + "/rest/rateunits/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/rateunits/" + id);
    }
}
