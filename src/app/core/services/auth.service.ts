import { Injectable } from "@angular/core"
import { ApiService } from "@core/services/api.service"
import { JwtHelperService } from "@auth0/angular-jwt"
import { paths } from "@enviroments/paths"

import { LoginInterface } from "@shared/interfaces/loginInterface"
import { BehaviorSubject } from "rxjs"

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private apiService: ApiService) {
		this.validateToken()
	}

	private helper = new JwtHelperService()
	isLogged: boolean = false

	get token(): string {
		return localStorage.getItem("Authorization")!
	}

	set token(_token: string) {
		localStorage.setItem("Authorization", _token)
		const isLogged = _token.length > 0
		this.isLogged = isLogged
	}

	login(user: LoginInterface) {
		return this.apiService.post(paths.Athentication, {
			...user,
		})
	}

	logout() {
		this.token = ""
	}

	validateToken() {
		const isExpired = this.helper.isTokenExpired(this.token)
		if (isExpired) {
			this.logout()
		} else {
			this.isLogged = true
		}
	}
}
