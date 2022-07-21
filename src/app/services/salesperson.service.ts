import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Salesperson}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class SalespersonService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Salesperson>> {
        let url:string = this.config.api + "/rest/salesperson/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Salesperson>>(url, {params});
    }

    list():Observable<Array<Salesperson>> {
        return this.http.get<Array<Salesperson>>(this.config.api + "/rest/salesperson");
    }

    save(model: Salesperson):Observable<Salesperson>{
        return this.http.post<Salesperson>(this.config.api + "/rest/salesperson", model);
    }

    getById(id: string):Observable<Salesperson> {
        return this.http.get<Salesperson>(this.config.api + "/rest/salesperson/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/salesperson/" + id);
    }
}
