import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Jobshipmethod}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class JobshipmethodService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Jobshipmethod>> {
        let url:string = this.config.api + "/rest/jobshipmethod/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Jobshipmethod>>(url, {params});
    }

    list():Observable<Array<Jobshipmethod>> {
        return this.http.get<Array<Jobshipmethod>>(this.config.api + "/rest/jobshipmethod");
    }

    save(model: Jobshipmethod):Observable<Jobshipmethod>{
        return this.http.post<Jobshipmethod>(this.config.api + "/rest/jobshipmethod", model);
    }

    getById(id: string):Observable<Jobshipmethod> {
        return this.http.get<Jobshipmethod>(this.config.api + "/rest/jobshipmethod/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/jobshipmethod/" + id);
    }
}
