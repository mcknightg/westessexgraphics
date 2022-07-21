import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Procplaterate}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class ProcplaterateService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Procplaterate>> {
        let url:string = this.config.api + "/rest/procplaterate/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Procplaterate>>(url, {params});
    }

    list():Observable<Array<Procplaterate>> {
        return this.http.get<Array<Procplaterate>>(this.config.api + "/rest/procplaterate");
    }

    save(model: Procplaterate):Observable<Procplaterate>{
        return this.http.post<Procplaterate>(this.config.api + "/rest/procplaterate", model);
    }

    getById(id: string):Observable<Procplaterate> {
        return this.http.get<Procplaterate>(this.config.api + "/rest/procplaterate/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/procplaterate/" + id);
    }
}
