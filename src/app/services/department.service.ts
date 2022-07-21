import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Department}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class DepartmentService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Department>> {
        let url:string = this.config.api + "/rest/department/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Department>>(url, {params});
    }

    list():Observable<Array<Department>> {
        return this.http.get<Array<Department>>(this.config.api + "/rest/department");
    }

    save(model: Department):Observable<Department>{
        return this.http.post<Department>(this.config.api + "/rest/department", model);
    }

    getById(id: string):Observable<Department> {
        return this.http.get<Department>(this.config.api + "/rest/department/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/department/" + id);
    }
}
