import { Injectable } from "@angular/core"
import { CanActivate, Router } from "@angular/router"
import { AuthService } from "@core/services/auth.service"

@Injectable({
	providedIn: "root",
})
export class NotAuthenticatedGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate() {
		const isLogged: boolean = this.authService.isLogged
		if (isLogged) {
			this.router.navigate(["/groups"])
		}
		return !isLogged
	}
}
