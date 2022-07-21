import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Emptype}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class EmptypeService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Emptype>> {
        let url:string = this.config.api + "/rest/emptype/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Emptype>>(url, {params});
    }

    list():Observable<Array<Emptype>> {
        return this.http.get<Array<Emptype>>(this.config.api + "/rest/emptype");
    }

    save(model: Emptype):Observable<Emptype>{
        return this.http.post<Emptype>(this.config.api + "/rest/emptype", model);
    }

    getById(id: string):Observable<Emptype> {
        return this.http.get<Emptype>(this.config.api + "/rest/emptype/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/emptype/" + id);
    }
}
