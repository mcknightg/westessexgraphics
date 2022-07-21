import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Primarycsr}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class PrimarycsrService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Primarycsr>> {
        let url:string = this.config.api + "/rest/primarycsr/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Primarycsr>>(url, {params});
    }

    list():Observable<Array<Primarycsr>> {
        return this.http.get<Array<Primarycsr>>(this.config.api + "/rest/primarycsr");
    }

    save(model: Primarycsr):Observable<Primarycsr>{
        return this.http.post<Primarycsr>(this.config.api + "/rest/primarycsr", model);
    }

    getById(id: string):Observable<Primarycsr> {
        return this.http.get<Primarycsr>(this.config.api + "/rest/primarycsr/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/primarycsr/" + id);
    }
}
