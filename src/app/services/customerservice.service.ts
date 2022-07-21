import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Customerservice}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class CustomerserviceService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Customerservice>> {
        let url:string = this.config.api + "/rest/customerservice/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Customerservice>>(url, {params});
    }

    list():Observable<Array<Customerservice>> {
        return this.http.get<Array<Customerservice>>(this.config.api + "/rest/customerservice");
    }

    save(model: Customerservice):Observable<Customerservice>{
        return this.http.post<Customerservice>(this.config.api + "/rest/customerservice", model);
    }

    getById(id: string):Observable<Customerservice> {
        return this.http.get<Customerservice>(this.config.api + "/rest/customerservice/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/customerservice/" + id);
    }
}
