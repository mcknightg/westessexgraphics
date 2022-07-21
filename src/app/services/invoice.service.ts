import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Invoice}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class InvoiceService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Invoice>> {
        let url:string = this.config.api + "/rest/invoice/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Invoice>>(url, {params});
    }

    list():Observable<Array<Invoice>> {
        return this.http.get<Array<Invoice>>(this.config.api + "/rest/invoice");
    }

    save(model: Invoice):Observable<Invoice>{
        return this.http.post<Invoice>(this.config.api + "/rest/invoice", model);
    }

    getById(id: string):Observable<Invoice> {
        return this.http.get<Invoice>(this.config.api + "/rest/invoice/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/invoice/" + id);
    }
}
