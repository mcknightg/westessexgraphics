import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Spotplaterate}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class SpotplaterateService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Spotplaterate>> {
        let url:string = this.config.api + "/rest/spotplaterate/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Spotplaterate>>(url, {params});
    }

    list():Observable<Array<Spotplaterate>> {
        return this.http.get<Array<Spotplaterate>>(this.config.api + "/rest/spotplaterate");
    }

    save(model: Spotplaterate):Observable<Spotplaterate>{
        return this.http.post<Spotplaterate>(this.config.api + "/rest/spotplaterate", model);
    }

    getById(id: string):Observable<Spotplaterate> {
        return this.http.get<Spotplaterate>(this.config.api + "/rest/spotplaterate/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/spotplaterate/" + id);
    }
}
