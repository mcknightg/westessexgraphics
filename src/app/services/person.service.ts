import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Person}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class PersonService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Person>> {
        let url:string = this.config.api + "/rest/person/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Person>>(url, {params});
    }

    list():Observable<Array<Person>> {
        return this.http.get<Array<Person>>(this.config.api + "/rest/person");
    }

    save(model: Person):Observable<Person>{
        return this.http.post<Person>(this.config.api + "/rest/person", model);
    }

    getById(id: string):Observable<Person> {
        return this.http.get<Person>(this.config.api + "/rest/person/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/person/" + id);
    }
}
