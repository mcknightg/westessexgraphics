import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Orientation}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class OrientationService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Orientation>> {
        let url:string = this.config.api + "/rest/orientation/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Orientation>>(url, {params});
    }

    list():Observable<Array<Orientation>> {
        return this.http.get<Array<Orientation>>(this.config.api + "/rest/orientation");
    }

    save(model: Orientation):Observable<Orientation>{
        return this.http.post<Orientation>(this.config.api + "/rest/orientation", model);
    }

    getById(id: string):Observable<Orientation> {
        return this.http.get<Orientation>(this.config.api + "/rest/orientation/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/orientation/" + id);
    }
}
