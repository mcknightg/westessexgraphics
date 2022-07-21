import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Varnplaterate}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class VarnplaterateService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Varnplaterate>> {
        let url:string = this.config.api + "/rest/varnplaterate/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Varnplaterate>>(url, {params});
    }

    list():Observable<Array<Varnplaterate>> {
        return this.http.get<Array<Varnplaterate>>(this.config.api + "/rest/varnplaterate");
    }

    save(model: Varnplaterate):Observable<Varnplaterate>{
        return this.http.post<Varnplaterate>(this.config.api + "/rest/varnplaterate", model);
    }

    getById(id: string):Observable<Varnplaterate> {
        return this.http.get<Varnplaterate>(this.config.api + "/rest/varnplaterate/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/varnplaterate/" + id);
    }
}
