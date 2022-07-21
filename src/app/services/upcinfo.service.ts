import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Upcinfo}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class UpcinfoService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Upcinfo>> {
        let url:string = this.config.api + "/rest/upcinfo/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Upcinfo>>(url, {params});
    }

    list():Observable<Array<Upcinfo>> {
        return this.http.get<Array<Upcinfo>>(this.config.api + "/rest/upcinfo");
    }

    save(model: Upcinfo):Observable<Upcinfo>{
        return this.http.post<Upcinfo>(this.config.api + "/rest/upcinfo", model);
    }

    getById(id: string):Observable<Upcinfo> {
        return this.http.get<Upcinfo>(this.config.api + "/rest/upcinfo/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/upcinfo/" + id);
    }
}
