import { Injectable } from "@angular/core"
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http"
import { environment } from "@enviroments/environment"
import { ResponseInterface } from "@shared/interfaces/responseInterface"
import { catchError, map } from "rxjs/operators"
import { throwError } from "rxjs"

@Injectable({
	providedIn: "root",
})
export class ApiService {
	constructor(private http: HttpClient) {}

	get(path: string, params: HttpParams = new HttpParams()) {
		return this.http
			.get<ResponseInterface>(`${environment.apiUrl}${path}`, { params })
			.pipe(map((res) => res.result))
	}
	//Access-Control-Allow-Origin

	post(path: string, body: any) {
		return this.http
			.post<ResponseInterface>(`${environment.apiUrl}${path}`, body)
			.pipe(map((res) => res.result))
	}
}
